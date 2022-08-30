import {
  Navigate,
} from 'react-router-dom';
import { useAuth } from '../hooks/authHook';
import { useMakeLogin } from '../hooks/useMakeLogin';

const PrivateRoute = ({ children }) => {
  const { token } = useMakeLogin();
  console.log(token)
  if (!token) {
    return <Navigate to="/authtentication" replace />;
  }
  return children;
};

export default PrivateRoute