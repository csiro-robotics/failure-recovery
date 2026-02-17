import React from "react";
import styles from "../../Common.module.css";
import org from "./Organisers.module.css";
import ks from "./KeynoteSpeakers.module.css";
// import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";

const About: React.FC = () => {
  return (
    <section className={styles.section}>
      <h2 id="about" className={styles.sectionHeading}>
        About
      </h2>

      <p className={styles.paragraph}>
        Rapid advances in physical AI, edge computing, and generalisable robot learning are
        bringing robots closer to open-world deployment. Yet reliability remains the primary
        barrier to large-scale adoption. As robots move into agriculture, mining, construction,
        disaster response, and planetary exploration, failure recovery and avoidance become
        central research challenges. This workshop focuses on resilient autonomy: predicting,
        avoiding, understanding, runtime failure detection and in-situ recovering from failures in
        real-world conditions.
      </p>

      <p className={styles.paragraph}>
        In practice, most robotic systems handle failures implicitly—through error rejection,
        human intervention, or safe shutdown—rather than explicitly diagnosing root causes
        and planning intelligent recovery. We bring together researchers/practitioners working
        across sub-communities, including SLAM, multimodal perception, fault detection and
        diagnosis, resilient planning and mobility, learning-based failure prediction,
        human–robot interaction, and safety-critical autonomy towards the common challenge
        of failure detection and recovery. This workshop aims to create a platform for
        cross-pollination between academic groups, governmental organisations, and industry
        teams deploying robots in challenging environments.
      </p>

      <p className={styles.paragraph}>
        The intended audience includes PhD students, early-career and industry
        researchers/engineers developing and deploying robotic systems. Through invited talks,
        technical presentations, posters, and structured round-table discussions, participants
        will explore key questions: How can failures be detected before cascading? How can
        robots adapt when sensing degrades? How should uncertainty and risk of failure be
        quantified? What frameworks enable safe recovery and continuation? What roles do
        foundation models play in explicit reasoning and recovery strategies for failures?
      </p>

      <p className={styles.paragraph}>
        By uniting diverse perspectives, we intend to outline a roadmap for next-gen resilient
        autonomy, accelerating progress toward robots that can not only operate but thrive in
        the real world.
      </p>
    </section>
  );
};

// const Links: React.FC = () => {
//   const navigate = useNavigate();

//   return (
//     <div className={styles.buttonContainer}>
//       <button className={styles.navButton} onClick={() => navigate("/")}>
//         tbd
//       </button>

//       <a
//         className={styles.navButton}
//         href="https://github.com/csiro-robotics"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         tbd
//       </a>

//       <a
//         className={styles.navButton}
//         href="https://github.com/csiro-robotics"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         tbd
//       </a>

//       <button className={styles.navButton} onClick={() => navigate("/")}>
//         tbd
//       </button>
//     </div>
//   );
// };

const Contact: React.FC = () => {
  return (
    <section className={styles.section}>
      <h2 id="contact" className={styles.sectionHeading}>
        Contact Us
      </h2>
      <p className={styles.paragraph}>
        Reach out to tbd for any enquiries{" "}
        <a href="mailto:tbd@data61.csiro.au">tbd@data61.csiro.au</a>.
      </p>
    </section>
  );
};

const BASE = import.meta.env.BASE_URL;
const keynoteSpeakers = [
  { name: "David Hsu", affiliation: "National University of Singapore", image: `${BASE}speakers/David_Hsu.jpeg`,url: "https://www.comp.nus.edu.sg/~dyhsu/" },
  { name: "Fabio Ramos", affiliation: "University of Sydney, NVIDIA-USA", image: `${BASE}speakers/Fabio_Ramos.jpeg`,url:"https://fabioramos.github.io/Home.html" },
  { name: "Abhinav Valada", affiliation: "University of Freiburg", image: `${BASE}speakers/Abhinav_Valada.jpeg`,url:"https://rl.uni-freiburg.de/people/valada" },
  { name: "Stefan Leutenegger", affiliation: "ETH Zurich", image: `${BASE}speakers/Stefan_Leutenegger.jpeg`,url:"https://scholar.google.com/citations?user=SmGQ48gAAAAJ&hl=en" },
  { name: "Marco Pavone", affiliation: "Stanford University, NVIDIA-USA", image: `${BASE}speakers/Marco_Pavone.jpeg`,url:"https://web.stanford.edu/~pavone/index.html" },
  { name: "Will Maddern", affiliation: "Wayve", image: `${BASE}speakers/Will_Maddern.jpeg` },
  { name: "Micol Spitale", affiliation: "Polytecnico di Milano", image: `${BASE}speakers/Micol_Spitale.jpeg`,url:"https://spitale.faculty.polimi.it/" },
];


const KeynoteSpeakers: React.FC = () => {
  return (
    <section className={styles.section}>
      <h2 id="keynote-speakers" className={styles.sectionHeading}>
        Keynote Speakers
      </h2>

  <div className={ks.grid}>
    {keynoteSpeakers.map((p) => (
      <div key={p.name} className={ks.card}>
        <img
          src={p.image}
          alt={p.name}
          className={ks.photo}
        />
        <p className={ks.name}>
        <a href={p.url} target="_blank" rel="noopener noreferrer">
          {p.name}
        </a>
      </p>
      <p className={ks.affiliation}>{p.affiliation}</p>
    </div>
    ))}
  </div>
    </section>
  );
};

const organisers = [
  { name: "Milad Ramezani",image: `${BASE}organizers/Milad.png` },
  { name: "Tirtha Bandyopadhyay",image: `${BASE}organizers/Tirtha.png` },
  { name: "Kavindie Katuwandeniya",image: `${BASE}organizers/Kavi.png` },
  { name: "Fahira Afzal Maken",image: `${BASE}organizers/Fahira.png` },
  { name: "Paulo Borges",image: `${BASE}organizers/Borges.png` },
  { name: "Paulo Drews-Jr",image: `${BASE}organizers/Drews.png` },
  { name: "Kristofer Kappel",image: `${BASE}organizers/Kristofer.png` },
];


const _getInitials = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .map((n) => n[0])
    .join("")
    .toUpperCase();

const Organisers: React.FC = () => {
  return (
    <section className={styles.section}>
      <h2 id="organisers" className={styles.sectionHeading}>
        Organisers
      </h2>

      <div className={org.orgGrid}>
        {organisers.map((person) => (
          <div key={person.name} className={org.orgCard}>
            <div className={org.orgAvatar}>
              {!person.image && <span className={org.orgInitials}>{_getInitials(person.name)}</span>}
              {person.image && <img src={person.image} alt={person.name} className={org.orgPhoto} />}
            </div>
            <p className={org.orgName}>{person.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};


const Acknowledgements: React.FC = () => {
  return (
    <section className={styles.section}>
      <h2 id="acknowledgements" className={styles.sectionHeading}>
        Acknowledgements
      </h2>
      <p className={styles.paragraph}>Special thanks</p>
    </section>
  );
};

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        {/* <Links /> */}
        <About />
        <KeynoteSpeakers />
        <Organisers />
        <Contact />
        <Acknowledgements />
      </main>
    </div>
  );
};

export default Home;
