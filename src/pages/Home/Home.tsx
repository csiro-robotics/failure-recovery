import React from "react";
import styles from "../../Common.module.css";
import org from "./Organisers.module.css";
import ks from "./KeynoteSpeakers.module.css";
// import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
const Schedule: React.FC = () => {
  return (
    <section className={styles.section}>
      <h2 id="schedule" className={styles.sectionHeading}>
        Schedule
      </h2>

      <div className={styles.tableWrapper}>
        <table className={styles.scheduleTable}>
          <thead>
            <tr>
              <th>Time</th>
              <th>Topic / Focus</th>
              <th>Speaker</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>2:00 – 2:05 PM</td>
              <td>Introduction and focus of the workshop</td>
              <td>Organisation committee</td>
            </tr>

            <tr>
              <td>2:05 – 2:25 PM</td>
              <td>KS1: Industry Talk about World Model Deployment Challenges</td>
              <td>Will Madern</td>
            </tr>

            <tr>
              <td>2:25 – 2:45 PM</td>
              <td>KS2: Research Talk about Challenges of Spatial AI in Real-World Settings</td>
              <td>Stefan Leutenegger</td>
            </tr>

            <tr>
              <td>2:45 – 3:05 PM</td>
              <td>KS3: Industry Talk about Recoverable Deformable Manipulation</td>
              <td>Xuning Yang</td>
            </tr>

            <tr>
              <td>3:05 – 3:30 PM</td>
              <td>10–15 min talks from participants (spotlight/best papers)</td>
              <td>Participants/Authors</td>
            </tr>

            <tr>
              <td>3:30 – 4:00 PM</td>
              <td>Coffee break with poster sessions</td>
              <td>Participants</td>
            </tr>

            <tr>
              <td>4:00 – 4:20 PM</td>
              <td>KS4: Research Talk about Failure Reasoning using Foundation Models</td>
              <td>Milan Ganai</td>
            </tr>

            <tr>
              <td>4:20 – 4:40 PM</td>
              <td>KS5: Research Talk about Failure Detection in Open-world Navigation</td>
              <td>David Hsu</td>
            </tr>

            <tr>
              <td>4:40 – 5:00 PM</td>
              <td>KS6: Research Talk about Detecting and Repairing Errors and Failures in HRI</td>
              <td>Micol Spitale</td>
            </tr>

            <tr>
              <td>5:00 – 5:20 PM</td>
              <td>KS7: Robot Decision-Making in Complex Settings</td>
              <td>Abhinav Valada</td>
            </tr>

            <tr>
              <td>5:20 – 5:25 PM</td>
              <td>Short Break to make preparation for breakout session</td>
              <td>Organisation committee</td>
            </tr>

            <tr>
              <td>5:25 – 5:55 PM</td>
              <td>Audience participation with key panel experts in a round chair format on open challenges linking existing techniques with failure modes</td>
              <td>Participants/Panelist</td>
            </tr>

            <tr>
              <td>5:55 – 6:00 PM</td>
              <td>Conclusion/Followup: planning for position paper with the participants’ input</td>
              <td>Organisation committee</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};
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
        Reach out to us for any enquiries{" "}
        
        <a href="mailto:rss-2026-failure-recovery-workshop@googlegroups.com">
          rss-2026-failure-recovery-workshop@googlegroups.com
        </a>
      </p>
    </section>
  );
};

const BASE = import.meta.env.BASE_URL;
const keynoteSpeakers = [
  { name: "David Hsu", affiliation: "National University of Singapore", image: `${BASE}speakers/David_Hsu.jpeg`,url: "https://www.comp.nus.edu.sg/~dyhsu/" },
  //{ name: "Fabio Ramos", affiliation: "University of Sydney, NVIDIA-USA", image: `${BASE}speakers/Fabio_Ramos.jpeg`,url:"https://fabioramos.github.io/Home.html" },
  { name: "Abhinav Valada", affiliation: "University of Freiburg", image: `${BASE}speakers/Abhinav_Valada.jpeg`,url:"https://rl.uni-freiburg.de/people/valada" },
  { name: "Stefan Leutenegger", affiliation: "ETH Zurich", image: `${BASE}speakers/Stefan.png`,url:"https://scholar.google.com/citations?user=SmGQ48gAAAAJ&hl=en" },

  { name: "Milan Ganai", affiliation: "Stanford University, NVIDIA-USA", image: `${BASE}speakers/milan.png`},
  { name: "Will Maddern", affiliation: "Wayve", image: `${BASE}speakers/Will_Maddern.jpeg` },
  { name: "Micol Spitale", affiliation: "Polytecnico di Milano", image: `${BASE}speakers/Micol.png`,url:"https://spitale.faculty.polimi.it/" },
   { name: "Xuning Yang", affiliation: "NVIDIA-USA", image: `${BASE}speakers/xun.png`,url:"https://www.xuningyang.com/" }
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
  { name: "Fahira Afzal Maken",image: `${BASE}organizers/Fahira.png` },
  { name: "Kavindie Katuwandeniya",image: `${BASE}organizers/Kavi.png` },
  { name: "Paulo Borges",image: `${BASE}organizers/Paulo.png` },
  { name: "Paulo Drews-Jr",image: `${BASE}organizers/Drews.png` },
  { name: "Kristofer Kappel",image: `${BASE}organizers/Kris.png` },
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


// const Acknowledgements: React.FC = () => {
//   return (
//     <section className={styles.section}>
//       <h2 id="acknowledgements" className={styles.sectionHeading}>
//         Acknowledgements
//       </h2>
//       <p className={styles.paragraph}>Special thanks</p>
//     </section>
//   );
// };
const DiscussionTopics: React.FC = () => {
  return (
    <section className={styles.section}>
      <h2 id="discussion-topics" className={styles.sectionHeading}>
        Discussion Topics
      </h2>

      <p className={styles.paragraph}>
        The workshop focuses on resilient autonomy and failure recovery
        in field robotics, spanning perception, planning, learning,
        and human-robot interaction.
      </p>

      <ul className={styles.list}>
        <li>Characterising Failure in Field Robotics</li>
        <li>Robustness under Environmental and Sensor Degradation</li>
        <li>Failure Detection, Prediction, and Early Warning</li>
        <li>Recovery Mechanisms and Behavioural Adaptation</li>
        <li>Evaluation, Benchmarking, and Real-World Deployment</li>
        <li>Human-in-the-Loop Failure Detection and Recovery</li>
        <li>Foundation Models for Failure Detection and Recovery</li>
      </ul>

    </section>
  );
};
const CallForPapers: React.FC = () => {
  return (
    <section className={styles.section}>
      <h2 id="call-for-papers" className={styles.sectionHeading}>
        Call for Papers
      </h2>

      <p className={styles.paragraph}>
        Interested in contributing to the workshop? View the full{" "}
        <Link to="/call-for-papers">
          Call for Papers
        </Link>{" "}
        for submission guidelines and important dates.
      </p>
    </section>
  );
};
const Papers: React.FC = () => {
  return (
    <section className={styles.section}>
      <h2 id="papers" className={styles.sectionHeading}>
        Papers
      </h2>

      <p className={styles.paragraph}>
        View the workshop's accepted papers{" "}
        <Link to="/papers">
          here
        </Link>.
      </p>
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
        <DiscussionTopics />
        <CallForPapers />
        <Papers />
        <KeynoteSpeakers />
        <Schedule />
        <Organisers />
        <Contact />
        {/* <Acknowledgements /> */}
      </main>
    </div>
  );
};

export default Home;
