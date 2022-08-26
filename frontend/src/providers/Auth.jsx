
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../App';

const AuthProvider = ({ children }) => {
    const [token, setToken] = React.useState();
    const navigate = useNavigate();
  
    const handleLogin = (token) => {
      setToken(token);
      navigate('/home')
    };
  
    const handleLogout = () => {
      setToken(null);
    };
  
    const value = {
      token,
      onLogin: handleLogin,
      onLogout: handleLogout,
    };
  
    return (
      <AuthContext.Provider value={value}>
        {children}
      </AuthContext.Provider>
    );
  };
  export default AuthProvider