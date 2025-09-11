import DashboardHeader from "../components/DashboardHeader";

const examsAfter10th = {
  governmentJobAndRecruitment: {
    SSC_MTS: "Entry-level posts in central government offices.",
    RRB_GroupD: "Technical and non-technical staff positions in Indian Railways.",
    IndianArmy: "Soldier (General Duty/Tradesman) recruitment in Defence sector.",
    IndianNavy: "Matric Recruit (MR): Entry as Sailor/Technician.",
    StatePolice: "Constable/Home Guard: Entry-level police posts (state exam).",
    ForestGuard: "Forest Guard/Technician roles in forestry and wildlife.",
    PSU_Helper:
      "Public Sector Units helper/technician roles (ONGC, BHEL, DRDO, ISRO) often requiring ITI/technical skill.",
  },
  competitiveAndScholarship: {
    NTSE: "National-level scholarship for talented students.",
    KVPY: "Research fellowships for aspiring scientists (now under INSPIRE).",
    Olympiads: "Science, Math, English, Cyber, GK (SOF/ISEA).",
    TalentExams: "All India Mathematics/Science Talent Exams at national/state levels.",
    JNVST: "Navodaya Vidyalaya admission test for gifted students.",
  },
  polytechnicAndDiploma: {
    statePolytechnic:
      "State Polytechnic Entrance Exams (e.g., JEECUP, Delhi CET, AP POLYCET).",
    ITI: "ITI Entrance: Vocational courses (Electrician, Mechanic, Computer Operator, etc.).",
    IMU_CET:
      "Indian Maritime University CET for Marine Engineering/Navigational Science (some after 12th, some after 10th).",
  },
  specializedExams: {
    sainikMilitary: "Sainik School & Military School Admissions (defence-prep).",
    RMO: "Regional Mathematics Olympiad, qualifying for national rounds.",
    biotechOlympiad: "National Biotechnology Olympiad for biosciences.",
  },
};

function After10thExams() {
  return (
    <div>
      <DashboardHeader />
      <h2>Exams After 10th</h2>

      {Object.entries(examsAfter10th).map(([category, exams]) => (
        <section key={category}>
          <h3>{category.replace(/([A-Z])/g, " $1")}</h3>
          <ul>
            {Object.entries(exams).map(([key, desc]) => (
              <li key={key}>
                <b>{key}:</b> {desc}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

export default After10thExams;
