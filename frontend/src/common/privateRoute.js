import {
  Navigate,
} from 'react-router-dom';

import { useAuth } from '../hooks';

const PrivateRoute = ({ children }) => {
  const { token } = useAuth();
  if (!token) {
    return <Navigate to="/auth" replace />;
  }
  return children;
};

export default PrivateRoute