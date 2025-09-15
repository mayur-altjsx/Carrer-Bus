import { Link } from "react-router-dom";
import DashboardHeader from "../components/DashboardHeader";
import { Example } from "../components/RetractingSideBar";

function Courses() {
  return (
    <div className="min-h-screen bg-white flex">
      {/* Sidebar */}
      <Example />
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Top Navigation */}
        <div className="sticky top-0 z-10">
          <DashboardHeader />
        </div>

        {/* Course Selection Section */}
        <section className="mt-20 flex flex-col items-center justify-center text-center px-4 py-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
            Explore Your Path
          </h2>

          <p className="text-lg text-gray-600 text-center mb-8 leading-relaxed max-w-2xl">
            Choosing the right course after school is one of the most important
            decisions you'll make. Whether you just completed your 10th or 12th,
            we've curated a list of courses to help you discover opportunities
            that match your interests and career goals.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              to="/courses/after-10th"
              className="px-6 py-3 bg-green-600 text-white rounded-xl shadow-md hover:bg-green-700 hover:shadow-lg transform hover:-translate-y-1 transition duration-300 text-lg font-medium"
            >
              After 10th
            </Link>

            <Link
              to="/courses/after-12th"
              className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 hover:shadow-lg transform hover:-translate-y-1 transition duration-300 text-lg font-medium"
            >
              After 12th
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Courses;