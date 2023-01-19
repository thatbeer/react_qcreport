import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../store/Auth';

const ProtectedRoute = ({ children }) => {
  const {user} = useContext(AuthContext);

  if (!user) {
    return <Navigate to='/' />;
  }
  return children;
};

export default ProtectedRoute;

