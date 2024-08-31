import { Navigate } from "react-router-dom";

const useAuth = () => {
  const isAuthenticated = true; // Change to false to test unauthenticated access
  return { isAuthenticated };
};

const ProtectedRoute = ({ element }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? element : <Navigate to="/profile" />;
};

export default ProtectedRoute;
