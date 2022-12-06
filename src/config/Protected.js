import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Protected = ({ children }) => {
  const storeState = useSelector((state) => state);
  const { auth } = storeState;

  if (!auth.isAuthenticated) {
    return <Navigate to='/login' replace />;
  }
  return children;
};
export default Protected;
