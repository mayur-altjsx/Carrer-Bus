import DashboardHeader from "../components/DashboardHeader";

const coursesAfter12th = {
  majorAcademicStreams: {
    Science:
      "Includes subjects like Physics, Chemistry, Biology, and Mathematics; leads to careers in engineering, medicine, research, and technology.",
    Commerce:
      "Focuses on Business Studies, Accountancy, Economics, and Mathematics; pathways include CA, CS, banking, and management.",
    Arts:
      "Covers History, Geography, Political Science, Psychology, and Sociology; suited for law, journalism, public administration, and teaching.",
  },
  diplomaAndSkillCourses: {
    engineering: ["Mechanical", "Civil", "Electrical", "Electronics", "Automobile", "Computer", "Chemical"],
    medicalAndParamedical: ["Medical Laboratory Technology (MLT)", "Nursing", "Radiology", "Pharmacy", "Occupational Therapy"],
    computerAndIT: ["Diploma in Computer Applications", "Information Technology"],
    designAndMedia: ["Fashion Design", "Interior Design", "Animation & Multimedia", "Photography", "Journalism"],
    businessAndCommerce: ["Accounting", "Business Administration", "Retail Management", "Marketing"],
    hospitalityAndTourism: ["Hotel Management", "Food Technology"],
    vocationalTraining: ["Garment Technology", "Leather Technology", "Library Sciences", "Textile Processing"],
  },
  specializedCareerCourses: [
    "Company Secretary (CS)",
    "Chartered Accountancy (CA)",
    "Cost and Management Accountancy (CMA)",
    "Digital Marketing",
    "Entrepreneurship",
    "Animation & VFX",
    "Post Production",
  ],
};

function After12thCourses() {
  return (
    <div>
      <DashboardHeader />
      <h2>Courses After 12th</h2>

      <section>
        <h3>Major Academic Streams</h3>
        <ul>
          {Object.entries(coursesAfter12th.majorAcademicStreams).map(([stream, desc]) => (
            <li key={stream}>
              <b>{stream}:</b> {desc}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h3>Diploma & Skill Courses</h3>
        {Object.entries(coursesAfter12th.diplomaAndSkillCourses).map(([cat, list]) => (
          <div key={cat}>
            <h4>{cat}</h4>
            <ul>
              {list.map((course) => (
                <li key={course}>{course}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section>
        <h3>Specialized Career Courses</h3>
        <ul>
          {coursesAfter12th.specializedCareerCourses.map((course) => (
            <li key={course}>{course}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default After12thCourses;
