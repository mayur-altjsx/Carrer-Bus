import DashboardHeader from "../components/DashboardHeader";

const examsAfter12th = {
  science: {
    engineering: ["JEE Main", "JEE Advanced", "BITSAT", "VITEEE", "COMEDK UGET", "SRMJEEE"],
    medical: ["NEET (MBBS, BDS, BAMS, BHMS, BUMS)", "AIIMS", "JIPMER", "AFMC"],
    architecture: ["NATA", "JEE Main (B.Arch)"],
    scienceDegrees: ["CUET (central universities)", "State-level entrance exams"],
    agriculture: ["ICAR AIEEA"],
    defence: ["NDA (PCM required for Air Force & Navy)"],
  },
  commerce: {
    accountancy: ["CA Foundation (CPT)", "CS Foundation"],
    management: [
      "IPMAT",
      "DU JAT",
      "SET",
      "CUET",
      "NPAT",
      "CLAT (for BBA LLB)",
      "State-level management exams",
    ],
    law: ["CLAT", "AILET", "State-level Law Exams"],
    ugManagement: ["BBA/BMS entrance exams", "University-specific tests"],
  },
  arts: {
    law: ["CLAT", "AILET", "State-level Law Exams"],
    design: ["NIFT (Fashion)", "NID (Design)"],
    hotelManagement: ["NCHMCT JEE"],
    liberalArts: ["CUET", "University-specific exams"],
    mediaAndSocialWork: ["College/university-specific entrance exams"],
  },
  common: {
    university: ["CUET (for central & state universities)"],
    abroad: ["SAT (for studying abroad)"],
    govtJobs: ["SSC CHSL", "RRB NTPC", "State PSC/Clerk/Constable Exams"],
    defence: ["NDA", "Indian Armed Forces (subject-specific eligibility)"],
  },
};

function After12thExams() {
  return (
    <div>
      <DashboardHeader />
      <h2>Exams After 12th</h2>

      {Object.entries(examsAfter12th).map(([stream, categories]) => (
        <section key={stream}>
          <h3>{stream.toUpperCase()}</h3>
          {Object.entries(categories).map(([cat, exams]) => (
            <div key={cat}>
              <h4>{cat}</h4>
              <ul>
                {exams.map((exam) => (
                  <li key={exam}>{exam}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      ))}
    </div>
  );
}

export default After12thExams;
