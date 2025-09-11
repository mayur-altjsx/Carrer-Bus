import { useEffect, useState } from "react";
import DashboardHeader from "../components/DashboardHeader";

function Profile() {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setError("No token found. Please log in again.");
          return;
        }

        const res = await fetch("http://localhost:3000/api/auth/", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // ✅ Send token
          },
        });

        if (!res.ok) {
          throw new Error("Failed to fetch profile");
        }

        const data = await res.json();
        setProfile(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div>
      <DashboardHeader />
      <h2>Profile</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {profile ? (
        <div>
          <p><b>Name:</b> {profile.firstName} {profile.lastName}</p>
          <p><b>Email:</b> {profile.email}</p>
          <p><b>Contact:</b> {profile.contactNumber}</p>
          <p><b>StudyingIn</b> {profile.studyingIn}</p>
          <p><b>gender</b> {profile.gender}</p>
          <p><b>age</b> {profile.age}</p>
          <p><b>city</b> {profile.city}</p>
        </div>
      ) : (
        !error && <p>Loading profile...</p>
      )}
    </div>
  );
}

export default Profile;
