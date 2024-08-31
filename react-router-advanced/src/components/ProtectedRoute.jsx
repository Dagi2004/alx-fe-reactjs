import { Navigate } from "react-router-dom";

// Simulate authentication status
const isAuthenticated = true; // Change to false to test unauthenticated access

const ProtectedRoute = ({ element }) => {
  return isAuthenticated ? element : <Navigate to="/profile" />;
};

export default ProtectedRoute;
