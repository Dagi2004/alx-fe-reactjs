import { Link, Outlet } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <nav>
        <Link to="details">ProfileDetails</Link> |{" "}
        <Link to="settings">ProfileSettings</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Profile;
