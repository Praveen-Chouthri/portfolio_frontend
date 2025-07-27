// API service for portfolio backend communication
const getApiBase = () => {
  // For development (localhost)
  if (process.env.NODE_ENV === 'development') {
    return (process.env.REACT_APP_BACKEND_URL || 'http://localhost:8001') + '/api';
  }
  
  // For production (Vercel/Netlify) - you'll need to set this environment variable
  if (process.env.REACT_APP_BACKEND_URL) {
    return process.env.REACT_APP_BACKEND_URL + '/api';
  }
  
  // Fallback for production without backend (offline mode)
  return null;
};

const API_BASE = getApiBase();

class APIError extends Error {
  constructor(message, status, data) {
    super(message);
    this.name = 'APIError';
    this.status = status;
    this.data = data;
  }
}

const handleResponse = async (response) => {
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new APIError(
      errorData.message || `HTTP error! status: ${response.status}`,
      response.status,
      errorData
    );
  }
  return response.json();
};

export const portfolioAPI = {
  // Get complete portfolio data
  getPortfolioData: async () => {
    try {
      // If no API_BASE, use offline data
      if (!API_BASE) {
        const { portfolioData } = await import('../mock');
        return { success: true, data: portfolioData };
      }
      
      const response = await fetch(`${API_BASE}/portfolio`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return handleResponse(response);
    } catch (error) {
      console.error('Error fetching portfolio data:', error);
      // Fallback to offline data
      const { portfolioData } = await import('../mock');
      return { success: true, data: portfolioData };
    }
  },

  // Submit contact form
  submitContactForm: async (formData) => {
    try {
      // If no API_BASE, simulate success
      if (!API_BASE) {
        return { 
          success: true, 
          message: 'Message sent successfully! (Offline mode)' 
        };
      }
      
      const response = await fetch(`${API_BASE}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      return handleResponse(response);
    } catch (error) {
      console.error('Error submitting contact form:', error);
      throw error;
    }
  },

  // Health check
  healthCheck: async () => {
    try {
      // If no API_BASE, return offline status
      if (!API_BASE) {
        return { status: 'offline', message: 'Running in offline mode' };
      }
      
      const response = await fetch(`${API_BASE}/health`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return handleResponse(response);
    } catch (error) {
      console.error('Error checking API health:', error);
      return { status: 'error', message: 'Unable to connect to server' };
    }
  }
};

// Helper function to handle API errors in components
export const handleAPIError = (error, fallbackMessage = 'An unexpected error occurred') => {
  if (error instanceof APIError) {
    return error.message;
  }
  if (error.name === 'TypeError' && error.message.includes('fetch')) {
    return 'Unable to connect to server. Please check your internet connection.';
  }
  return fallbackMessage;
};

// Loading state manager for API calls
export class LoadingManager {
  constructor() {
    this.loadingStates = new Map();
    this.listeners = new Set();
  }

  setLoading(key, isLoading) {
    this.loadingStates.set(key, isLoading);
    this.notifyListeners();
  }

  isLoading(key) {
    return this.loadingStates.get(key) || false;
  }

  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  notifyListeners() {
    this.listeners.forEach(listener => listener(this.loadingStates));
  }
}

export const loadingManager = new LoadingManager();