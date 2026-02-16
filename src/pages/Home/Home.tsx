import React from "react";
import styles from "../../Common.module.css";
// import homeStyles from "./Home.module.css";
// import PCMVContainer from "../../components/PCMVContainer/PCMVContainer";
// import ContentBlock from "../../components/ContentBlock/ContentBlock";
import { useNavigate } from "react-router-dom";
// import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import Header from "../../components/Header/Header";

const About: React.FC = () => {
  return (
    <section className={styles.section}>
      <h2 id="about" className={styles.sectionHeading}>
        About
      </h2>
      <p className={styles.paragraph}>
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


        
      </p>
      {/* <div className={homeStyles.textContainer}>
        <ul className={homeStyles.dotPoints}>
          <li>
            How do we detect failures before they cascade?
          </li>
          <li>
            Can robots adapt online when perception or actuation degrades?
          </li>
          <li>
            How do we quantify risk and uncertainty in unstructured environments?
          </li>
          <li>
            What frameworks allow robots to safely recover and continue their mission?
          </li>
        </ul>
      </div>
      By uniting diverse perspectives, the workshop intends to outline a roadmap for next-generation resilient autonomy, accelerating progress toward robots that can not only operate, but thrive, in challenging real-world environments. */}
      {/* <ContentBlock
        imageSrc="/HOTFormerLoc/assets/architecture/architecture_hotformerloc.png"
        altText="HOTFormerLoc Architecture"
        caption="HOTFormerLoc Architecture"
        description=""
      /> */}
      {/* <p className={styles.paragraph}>
        We also propose <b>CS-Wild-Places</b>, a novel dataset for
        ground-to-aerial lidar place recognition featuring point cloud data from
        ground and aerial lidar scans captured in dense forests. Our dataset
        features:
      </p>
      <div className={homeStyles.contentContainer}>
        <div className={homeStyles.textContainer}>
          <ul className={homeStyles.dotPoints}>
            <li>
              ~<b>36k</b> high resolution lidar submaps captured from ground and
              aerial viewpoints in{" "} <b>4 unique forests</b> over 10 months.
            </li>
            <li>
              A total of <b>72k</b> submaps for training and <b>18k</b> submaps for evaluation
              when used in conjunction with the Wild-Places dataset.
            </li>
            <li>
              Challenging representational gaps such as variable point density
              and significant occlusions between viewpoints.
            </li>
            <li>
              Accurate <b>6-DoF</b> ground truth for all sequences.
            </li>
          </ul>
        </div>
        <div className={homeStyles.videoContainer}>
          <VideoPlayer src="/HOTFormerLoc/assets/visualisation/karawatha_submaps_matched_labelled.mp4" />
        </div>
      </div> */}
    </section>
  );
};

// const Visualise: React.FC = () => {
//   return (
//     <div>
//       <section className={styles.section}>
//         <h2 id="visualise-submap" className={styles.sectionHeading}>
//           Interactive Submap Visualisation
//         </h2>
//         <PCMVContainer
//           title1="Aerial View"
//           title2="Ground View"
//           isSingleViewer={false}
//         />
//       </section>
//     </div>
//   );
// };

// const GithubLink: React.FC = () => {
//   return (
//     <div className={styles.buttonContainer}>
//       <a
//         href="https://github.com/csiro-robotics/HOTFormerLoc"
//         target="_blank"
//         rel="noopener noreferrer"
//         className={styles.navButton}
//       >
//         Visit our GitHub Repo!
//       </a>
//     </div>
//   );
// };

const Links: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.buttonContainer}>
      <button className={styles.navButton} onClick={() => navigate("/")}>
        tbd
      </button>
      <a
        href="https://github.com/csiro-robotics"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          textDecoration: 'none',
          color: '#FFF',
        }}
        className={styles.navButton}
      >
        tbd
      </a>
      <a
        href="https://github.com/csiro-robotics"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          textDecoration: 'none',
          color: '#FFF',
        }}
        className={styles.navButton}
      >
        tbd
      </a>
      <button className={styles.navButton} onClick={() => navigate("/")}>
        tbd
      </button>
    </div>
  );
};

// const Citation: React.FC = () => {
//   const citationBibtex = `@InProceedings{HOTFormerLoc,
// 	author    = {Griffiths, Ethan and Haghighat, Maryam and Denman, Simon and Fookes, Clinton and Ramezani, Milad},
// 	title     = {{HOTFormerLoc}: {Hierarchical Octree Transformer} for {Versatile Lidar Place Recognition Across Ground} and {Aerial Views}},
// 	booktitle = {2025 {IEEE}/{CVF Conference} on {Computer Vision} and {Pattern Recognition} ({CVPR})},
// 	year      = {2025},
// 	month     = {June},
// }`;
//   // pages     = {tbd}
//   return (
//     <section className={styles.futureWork}>
//       <h2 id="citation" className={styles.sectionHeading}>
//         Citation
//       </h2>
//       <p className={styles.paragraph}>
//         If you find this work useful, consider citing our paper!
//       </p>
//       <SyntaxHighlighter language="LaTeX" style={materialDark}>
//         {citationBibtex}
//       </SyntaxHighlighter>
//     </section>
//   );
// };

const Contact: React.FC = () => {
  return (
    <section className={styles.section}>
      <h2 id="contact" className={styles.sectionHeading}>
        Contact Us
      </h2>
      <p className={styles.paragraph}>
        Reach out to tbd for any enquires{" "}
        <a href="tbd@data61.csiro.au">
          tbd@data61.csiro.au
        </a>
        .
      </p>
    </section>
  );
};

const KeynoteSpeaker: React.FC = () => {
  return (
    <section className={styles.section}>
      <h2 id="KeynoteSpeaker" className={styles.sectionHeading}>
        Keynote Speaker
      </h2>
      {/* <p className={styles.paragraph}>
        <b>2025 Mar:</b> CS-Wild-Places dataset released.
      </p> */}
    </section>
  );
};

const Organisers: React.FC = () => {
  return (
    <section className={styles.section}>
      <h2 id="organisers" className={styles.sectionHeading}>
        Organisers
      </h2>
      {/* <p className={styles.paragraph}>
        <b>2025 Mar:</b> CS-Wild-Places dataset released.
      </p> */}
    </section>
  );
};

const Acknowledgements: React.FC = () => {
  return (
    <section className={styles.section}>
      <h2 id="acknowledgements" className={styles.sectionHeading}>
        Acknowledgements
      </h2>
      <p className={styles.paragraph}>
        Special thanks
      </p>
    </section>
  );
};

const Home = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <Links />
        <About />
        {/* <Visualise /> */}
        <KeynoteSpeaker />
        <Organisers />
        <Contact />
        {/* <Updates /> */}
        <Acknowledgements />
      </main>
    </div>
  );
};

export default Home;
