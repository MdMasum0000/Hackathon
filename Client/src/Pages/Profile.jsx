import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        const decodedToken = jwtDecode(token);
        const userId = decodedToken.id;
        console.log(userId);
        const res = await axios.get(
          `http://localhost:8000/api/v1/user/UserById/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`, // Send the token in the Authorization header
            },
          }
        );

        if (res.data.success) {
          setUser(res.data.user); // Set the user data
        } else {
          navigate("/login"); // Redirect to login if the token is invalid
        }
      } catch (error) {
        console.error(error);
        navigate("/login"); // Redirect to login on error
      }
    };

    fetchProfile();
  }, [navigate]);

  if (!user) {
    return <div>Loading...</div>; // Show a loading message while fetching data
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-200 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-purple-600 mb-6">
          Profile
        </h1>
        <div className="text-lg">
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Role:</strong> {user.role}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
