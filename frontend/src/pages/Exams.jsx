import { Link } from "react-router-dom";
import DashboardHeader from "../components/DashboardHeader";
import { Example } from "../components/RetractingSideBar";

function Exams() {
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

        {/* Exams Section */}
        <section className="mt-20 flex flex-col items-center justify-center text-center px-4 py-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
            Exams
          </h2>

          <p className="text-lg text-gray-600 text-center mb-8 leading-relaxed max-w-2xl">
            Explore different exams and choose the path that's best for your
            future. Whether you're planning your journey after 10th or 12th,
            we've got you covered with the right resources to guide you.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              to="/exams/after-10th"
              className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition duration-300 text-lg font-medium"
            >
              After 10th
            </Link>
            <Link
              to="/exams/after-12th"
              className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300 text-lg font-medium"
            >
              After 12th
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Exams;