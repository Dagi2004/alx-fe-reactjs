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
import BlogPost from "./components/BlogPost";
import ProtectedRoute from "./components/ProtectedRoute";
function App() {
  return (
    <Router>
      <nav>
        <Link to="/profile">Profile</Link>
        <Link to="/blog/1">Blog Post 1</Link>
        <Link to="/blog/2">Blog Post 2</Link>
      </nav>
      <Routes>
        <Route
          path="/profile"
          element={<ProtectedRoute element={<Profile />} />}
        >
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
