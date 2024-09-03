function UserProfile() {
  return (
    <div className="user-profile bg-gray-100 p-8 max-w-sm:400 rounded-lg shadow-lg mx-auto my-20">
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        className="rounded-full w-36 h-36 mx-auto mb-5"
      />
      <h1 className="text-blue-800 text-xl my-4">John Doe</h1>
      <p className="text-gray-600 text-base">
        Developer at Example Co. Loves to write code and explore new
        technologies.
      </p>
    </div>
  );
}

export default UserProfile;
