import api from './api'

export interface User {
  id: string
  email: string
  name: string
  subscription?: {
    planId: string
    planName: string
    startDate: string
    endDate: string
    isActive: boolean
  }
}

export interface AuthResponse {
  token: string
  user: User
}

export const authService = {
  register: async (email: string, password: string, name: string): Promise<AuthResponse> => {
    const response = await api.post<AuthResponse>('/api/auth/register', {
      email,
      password,
      name,
    })
    if (response.data.token) {
      localStorage.setItem('token', response.data.token)
    }
    return response.data
  },

  login: async (email: string, password: string): Promise<AuthResponse> => {
    const response = await api.post<AuthResponse>('/api/auth/login', {
      email,
      password,
    })
    if (response.data.token) {
      localStorage.setItem('token', response.data.token)
    }
    return response.data
  },

  logout: () => {
    localStorage.removeItem('token')
  },

  getCurrentUser: async (): Promise<User> => {
    const response = await api.get<{ user: User }>('/api/users/me')
    return response.data.user
  },

  isAuthenticated: (): boolean => {
    return !!localStorage.getItem('token')
  },
}

