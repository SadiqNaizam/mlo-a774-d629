import React, { createContext, useContext, useState, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface AuthContextType {
  isAuthenticated: boolean;
  user: { name?: string; email?: string } | null;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

/**
 * NOTE: This is a simulated AuthProvider.
 * In a real application, it would be initialized with the MsalProvider from '@azure/msal-react'
 * and use the 'useMsal' hook to handle login and logout calls.
 */
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<{ name?: string; email?: string } | null>(null);
  const navigate = useNavigate();

  // In a real MSAL app, this would be an async function that calls instance.loginPopup() or instance.loginRedirect()
  const login = () => {
    // Simulate successful login
    setIsAuthenticated(true);
    setUser({ name: 'Doraemon', email: 'doraemon@example.com' });
    navigate('/'); // Redirect to home after login
  };

  // In a real MSAL app, this would call instance.logoutPopup() or instance.logoutRedirect()
  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    navigate('/signin'); // Redirect to sign-in page after logout
  };

  const value = { isAuthenticated, user, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};