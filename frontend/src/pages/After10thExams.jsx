import { useEffect, useState } from "react";
import API from "../api";
import DashboardHeader from "../components/DashboardHeader";

function After10thExams() {
  const [examsAfter10th, setExamsAfter10th] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExams = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setError("Authorization token is missing.");
          setLoading(false);
          return;
        }

        const response = await API.get("/exams/after-10th", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setExamsAfter10th(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch courses data");
        setLoading(false);
      }
    };

    fetchExams();
  }, []);

  if (loading) return <div className="text-center mt-10">Loading exams...</div>;
  if (error) return <div className="text-center text-red-500 mt-10">{error}</div>;

  return (
    <div className="px-6 md:px-12 lg:px-20 py-12 bg-gray-50 min-h-screen">
      <DashboardHeader />

      <h2 className="text-2xl font-bold mb-8 text-center">Exams After 10th</h2>

      {Object.entries(examsAfter10th).map(([category, exams]) => (
        <div key={category} className="mb-12">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">
            {category.replace(/([A-Z])/g, " $1").replace(/and/g, " and").trim()}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(exams).map(([examName, description]) => (
              <div
                key={examName}
                className="bg-white shadow-md rounded-lg p-6 border border-gray-200 flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full mb-2">
                    {category.replace(/([A-Z])/g, " $1").replace(/and/g, " and").trim()}
                  </span>
                  <h4 className="text-lg font-bold text-gray-800 mb-2">
                    {examName}
                  </h4>
                  <p className="text-sm text-gray-600">{description}</p>
                </div>
                <button className="mt-6 bg-teal-600 hover:bg-teal-700 text-white text-sm font-medium py-2 px-4 rounded">
                  Explore Details
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default After10thExams;