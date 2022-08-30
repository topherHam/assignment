import {
  Navigate,
} from 'react-router-dom';

import { useAuth } from '../hooks/useAuth';

const PrivateRoute = ({ children }) => {
  const { token } = useAuth();
  console.log(token)
  if (!token) {
    return <Navigate to="/authtentication" replace />;
  }
  return children;
};

export default PrivateRoute