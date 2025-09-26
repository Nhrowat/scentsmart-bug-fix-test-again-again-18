import * as React from 'react';

// Debug: Check if React is properly loaded
console.log('AdminContext: React loaded?', !!React);
console.log('AdminContext: useState available?', !!React.useState);

const { createContext, useContext, useState } = React;

interface AdminContextType {
  isAuthenticated: boolean;
  setIsAuthenticated: (authenticated: boolean) => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};

interface AdminProviderProps {
  children: React.ReactNode;
}

export const AdminProvider: React.FC<AdminProviderProps> = ({ children }) => {
  console.log('AdminProvider: About to call useState, React is:', !!React);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <AdminContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AdminContext.Provider>
  );
};