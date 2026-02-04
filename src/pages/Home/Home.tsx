import React from "react";
import styles from "../../Common.module.css";
import homeStyles from "./Home.module.css";
import PCMVContainer from "../../components/PCMVContainer/PCMVContainer";
import ContentBlock from "../../components/ContentBlock/ContentBlock";
import { useNavigate } from "react-router-dom";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import Header from "../../components/Header/Header";

const About: React.FC = () => {
  return (
    <section className={styles.section}>
      <h2 id="about" className={styles.sectionHeading}>
        About
      </h2>
      <p className={styles.paragraph}>
        Field robots operate in environments where uncertainty, dynamic conditions, and sometimes limited sensing often lead to unmodelled/unpredicted behaviours that can cause system failures. Despite decades of progress in robot perception, planning, and control, real-world deployments continue to expose fundamental gaps in robustness: systems fail, degrade silently, or encounter edge cases that were never modelled during development. This workshop focuses on the next frontier in resilient autonomy: understanding, predicting, avoiding, and recovering from failures in real-world scenarios.
        This workshop will bring together researchers and practitioners working across sub-communities, including field and service robotics, localisation and mapping, multimodal perception, fault detection and diagnosis, resilient planning, learning-based failure prediction, human–robot interaction, and safety-critical autonomy. We aim to create a platform for cross-pollination between academic groups, governmental organisations, and industry teams deploying robots in agriculture and forestry, mining, construction, underwater exploration, planetary missions, and search-and-rescue.
        The intended audience includes PhD students, early-career researchers, and industry engineers who develop, deploy, or analyse robotic systems operating under extreme or uncertain conditions. Through invited talks, technical presentations, and panel discussions, participants will engage with questions such as:

        
      </p>
      <div className={homeStyles.textContainer}>
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
      By uniting diverse perspectives, the workshop intends to outline a roadmap for next-generation resilient autonomy, accelerating progress toward robots that can not only operate, but thrive, in challenging real-world environments.
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

const Visualise: React.FC = () => {
  return (
    <div>
      <section className={styles.section}>
        <h2 id="visualise-submap" className={styles.sectionHeading}>
          Interactive Submap Visualisation
        </h2>
        <PCMVContainer
          title1="Aerial View"
          title2="Ground View"
          isSingleViewer={false}
        />
      </section>
    </div>
  );
};

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
      <button className={styles.navButton} onClick={() => navigate("/paper")}>
        Paper
      </button>
      <a
        href="https://arxiv.org/abs/2503.08140"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          textDecoration: 'none',
          color: '#FFF',
        }}
        className={styles.navButton}
      >
        arXiv
      </a>
      <a
        href="https://github.com/csiro-robotics/HOTFormerLoc"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          textDecoration: 'none',
          color: '#FFF',
        }}
        className={styles.navButton}
      >
        GitHub
      </a>
      <button className={styles.navButton} onClick={() => navigate("/dataset")}>
        CS-Wild-Places Dataset
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

// const Updates: React.FC = () => {
//   return (
//     <section className={styles.section}>
//       <h2 id="updates" className={styles.sectionHeading}>
//         Updates
//       </h2>
//       <p className={styles.paragraph}>
//         <b>2025 Mar:</b> CS-Wild-Places dataset released.
//       </p>
//     </section>
//   );
// };

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
        {/* <Citation /> */}
        <Contact />
        {/* <Updates /> */}
        <Acknowledgements />
      </main>
    </div>
  );
};

export default Home;
