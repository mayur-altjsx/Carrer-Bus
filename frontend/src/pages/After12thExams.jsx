import { useEffect, useState } from "react";
import API from "../api";
import DashboardHeader from "../components/DashboardHeader";

function After12thExams() {
  const [examsAfter12th, setExamsAfter12th] = useState({});
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

        const response = await API.get("/exams/after-12th", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setExamsAfter12th(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching after-12th exams:", err);
        setError("Failed to fetch exams data");
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

      <h2 className="text-2xl font-bold mb-8 text-center">Exams After 12th</h2>

      {Object.entries(examsAfter12th).map(([stream, categories]) => (
        <div key={stream} className="mb-12">
          <h3 className="text-xl font-semibold mb-4 text-gray-700 uppercase">{stream}</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(categories).map(([category, exams]) => (
              <div
                key={category}
                className="bg-white shadow-md rounded-lg p-6 border border-gray-200 flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full mb-2 capitalize">
                    {category.replace(/([A-Z])/g, " $1")}
                  </span>
                  <h4 className="text-lg font-bold text-gray-800 mb-2">
                    {category.replace(/([A-Z])/g, " $1")}
                  </h4>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    {exams.map((exam) => (
                      <li key={exam}>{exam}</li>
                    ))}
                  </ul>
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

export default After12thExams;
