import './App.css';
import React from 'react';
import Home from './pages/home';
import PrivateRoute from './common/privateRoute';
import { Route, Routes, BrowserRouter as Router, } from 'react-router-dom';
import Auth from './pages/auth';
import AuthProvider from './providers/Auth';

export const AuthContext = React.createContext(null);

const App = () => {
  return (
    <Router>
      <AuthProvider >
        <Routes>
          <Route index element={<Auth />} />
          <Route path="authtentication" element={<Auth />} />
          <Route
            path="home"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<>404 : No Found</>} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
