import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate,
} from "react-router-dom";
import ProfileDetails from "./components/ProfileDetails";
import ProfileSettings from "./components/ProfileSettings";
import Profile from "./components/Profile";
import UserProfile from "./components/UserProfile";
import ProtectedRoute from "./components/ProtectedRoute";
function App() {
  return (
    <Router>
      <nav>
        <Link to="/profile">Profile</Link>
        <Link to="/user/1">User 1</Link>
        <Link to="/user/2">User 2</Link>
      </nav>
      <Routes>
        <Route
          path="/profile"
          element={<ProtectedRoute element={<Profile />} />}
        >
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>
        <Route path="/user/:userId" element={<UserProfile />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
