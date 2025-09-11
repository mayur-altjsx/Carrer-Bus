import { useState } from "react";
import axios from "axios";
import DashboardHeader from "../components/DashboardHeader";

function Colleges() {
  const [searchMode, setSearchMode] = useState("state"); // "state", "city", "search"
  const [govt, setGovt] = useState(false);
  const [type, setType] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [name, setName] = useState("");
  const [colleges, setColleges] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const token = localStorage.getItem("token");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setColleges([]);

    try {
      let url = "";
      let payload = { type };

      if (searchMode === "state") {
        payload.state = state;
        url = govt ? "http://localhost:3000/api/data/government-college-state" : "http://localhost:3000/api/data/college-state";
      } else if (searchMode === "city") {
        payload.city = city;
        url = govt ? "http://localhost:3000/api/data/government-college-city" : "http://localhost:3000/api/data/college-city";
      } else if (searchMode === "search") {
        payload.name = name;
        if (state) payload.state = state;
        if (city) payload.city = city;
        url = govt ? "http://localhost:3000/api/data/search-government-college" : "http://localhost:3000/api/data/search-college";
      }

      const res = await axios.post(
        url,
        payload,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setColleges(res.data || []);
    } catch (err) {
      console.error("Error fetching colleges:", err);
      setError("Failed to fetch colleges. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <DashboardHeader />
      <h2 className="text-2xl font-bold mb-4">Colleges</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <label>
          Search Mode:
          <select value={searchMode} onChange={(e) => setSearchMode(e.target.value)}>
            <option value="state">By State</option>
            <option value="city">By City</option>
            <option value="search">Search by Name</option>
          </select>
        </label>

        <label>
          College Type:
          <input
            type="text"
            placeholder="e.g. engineering, medical"
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
          />
        </label>

        {searchMode === "state" && (
          <label>
            State:
            <input
              type="text"
              placeholder="Enter state"
              value={state}
              onChange={(e) => setState(e.target.value)}
              required
            />
          </label>
        )}

        {searchMode === "city" && (
          <label>
            City:
            <input
              type="text"
              placeholder="Enter city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </label>
        )}

        {searchMode === "search" && (
          <>
            <label>
              Name:
              <input
                type="text"
                placeholder="Enter college name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>
            <label>
              State (optional):
              <input
                type="text"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
            </label>
            <label>
              City (optional):
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </label>
          </>
        )}

        <label>
          <input
            type="checkbox"
            checked={govt}
            onChange={() => setGovt(!govt)}
          />
          Government Colleges Only
        </label>

        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
          Search
        </button>
      </form>

      {loading && <p>Loading colleges...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="mt-6">
        {colleges.length > 0 ? (
          <ul className="space-y-2">
            {colleges.map((college, index) => (
              <li key={index} className="border p-2 rounded">
                <strong>{college.name}</strong> <br />
                {college.city}, {college.state}
              </li>
            ))}
          </ul>
        ) : (
          !loading && <p>No colleges found.</p>
        )}
      </div>
    </div>
  );
}

export default Colleges;
