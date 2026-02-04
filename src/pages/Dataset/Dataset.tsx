import React from "react";
// import Slideshow from "../../components/Slideshow/Slideshow";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import VideoPlayerContainer from "../../components/VideoPlayerContainer/VideoPlayerContainer";
import ImageWithCaption from "../../components/ImageWithCaption/ImageWithCaption";
import PCMVContainer from "../../components/PCMVContainer/PCMVContainer";
import styles from "../../Common.module.css";
// import { useNavigate } from "react-router-dom";

// const images = [
//   "/HOTFormerLoc/assets/slides/karawatha_aerial_1.png",
//   "/HOTFormerLoc/assets/slides/karawatha_ground_1.png",
//   "/HOTFormerLoc/assets/slides/karawatha_aerial_2.png",
//   "/HOTFormerLoc/assets/slides/karawatha_ground_2.png",
//   "/HOTFormerLoc/assets/slides/karawatha_aerial_3.png",
//   "/HOTFormerLoc/assets/slides/karawatha_ground_3.png",

//   "/HOTFormerLoc/assets/slides/venman_aerial_1.png",
//   "/HOTFormerLoc/assets/slides/venman_ground_1.png",
//   "/HOTFormerLoc/assets/slides/venman_aerial_2.png",
//   "/HOTFormerLoc/assets/slides/venman_ground_2.png",
//   "/HOTFormerLoc/assets/slides/venman_aerial_3.png",
//   "/HOTFormerLoc/assets/slides/venman_ground_3.png",
// ];

const Dataset: React.FC = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        {/* <SlideshowSection /> */}
        <VideoSection/>
        <Links />
        <OverviewSection />
        <VisualisationSection />
        <MethodologySection />
        <BenchmarkingSection />
      </main>
    </div>
  );
};

const Header: React.FC = () => (
  <header className={styles.header}>
    <h1 className={styles.title}>CS-Wild-Places: A Novel Benchmark for Cross-Source Lidar Place Recognition in Forest Environments</h1>
  </header>
);

const Links: React.FC = () => {
  // const navigate = useNavigate();

  return (
    <div className={styles.buttonContainer}>
      {/* <a
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
      </a> */}
      <a
        href="https://data.csiro.au/collection/csiro:64896"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          textDecoration: 'none',
          color: '#FFF',
        }}
        className={styles.navButton}
      >
        Download
      </a>
      <a
        href="https://github.com/csiro-robotics/HOTFormerLoc/blob/main/media/CS_Wild_Places_README.pdf"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          textDecoration: 'none',
          color: '#FFF',
        }}
        className={styles.navButton}
      >
        README
      </a>
      {/* <button className={styles.navButton} onClick={() => navigate("/download")}>
        Download
      </button> */}
    </div>
  );
};

// const SlideshowSection: React.FC = () => (
//   <section className={styles.section}>
//     <Slideshow images={images} />
//   </section>
// );

// const VideoSection: React.FC = () => (
//   <section className={styles.section}>
//     <VideoPlayer src={"/HOTFormerLoc/assets/visualisation/HOTFormerLoc_website_submap_preview.mp4"} />
//   </section>
// );

// const OverviewSection: React.FC = () => (
//   <section className={styles.section}>
//     <h2 id="overview" className={styles.sectionHeading}>
//       Overview
//     </h2>
//     <p className={styles.paragraph}>
//       Field robots operate in environments where uncertainty, dynamic conditions, and sometimes limited sensing often lead to unmodelled/unpredicted behaviours that can cause system failures. Despite decades of progress in robot perception, planning, and control, real-world deployments continue to expose fundamental gaps in robustness: systems fail, degrade silently, or encounter edge cases that were never modelled during development. This workshop focuses on the next frontier in resilient autonomy: understanding, predicting, avoiding, and recovering from failures in real-world scenarios.
//       This workshop will bring together researchers and practitioners working across sub-communities, including field and service robotics, localisation and mapping, multimodal perception, fault detection and diagnosis, resilient planning, learning-based failure prediction, human–robot interaction, and safety-critical autonomy. We aim to create a platform for cross-pollination between academic groups, governmental organisations, and industry teams deploying robots in agriculture and forestry, mining, construction, underwater exploration, planetary missions, and search-and-rescue.
//       The intended audience includes PhD students, early-career researchers, and industry engineers who develop, deploy, or analyse robotic systems operating under extreme or uncertain conditions. Through invited talks, technical presentations, and panel discussions, participants will engage with questions such as:
//       By uniting diverse perspectives, the workshop intends to outline a roadmap for next-generation resilient autonomy, accelerating progress toward robots that can not only operate, but thrive, in challenging real-world environments.
//     </p>
//     <ul className={styles.list}>
//       <li>
//         How do we detect failures before they cascade?
//       </li>
//       <li>
//         Can robots adapt online when perception or actuation degrades?
//       </li>
//       <li>
//         How do we quantify risk and uncertainty in unstructured environments?
//       </li>
//       <li>
//         What frameworks allow robots to safely recover and continue their mission?
//       </li>
//       <li>
//         Challenging representational gaps such as variable point density and
//         significant occlusions between viewpoints.
//       </li>
//     </ul>
//     <ImageWithCaption
//       src=""
//       alt=""
//       caption=""
//     />
//     <ImageWithCaption
//       src=""
//       alt=""
//       caption=""
//     />
//     <ImageWithCaption
//       src=""
//       alt=""
//       caption=""
//     />
//     <p className={styles.paragraph}>
//       We 
//     </p>
//   </section>
// );



// const BenchmarkingSection: React.FC = () => (
//   <section className={styles.section}>
//     <h2 id="benchmarking" className={styles.sectionHeading}>
//       Benchmarking
//     </h2>
//     <p>
//       We benchmark several SOTA LPR methods on our dataset, including our novel HOTFormerLoc,
//       to demonstrate the challenges of cross-source re-localisation within dense forests. 
//       We report Average Recall@N (AR@N), including variants such as AR@1 and AR@1%, where 1%
//       is 1% of the number of submaps in the database.
//     </p>
//     <div className={styles.imageGrid}>
//       <ImageWithCaption
//         src="/HOTFormerLoc/assets/dataset/experiments_benchmarking.png"
//         alt="Recall@N curves on CS-Wild-Places."
//         caption="Recall@N curves of SOTA LPR methods on CS-Wild-Places Baseline and Unseen splits."
//       />
//     </div>
//     <div className={styles.imageGrid}>
//       <ImageWithCaption
//         src="/HOTFormerLoc/assets/dataset/dataset_cswp_baseline.png"
//         alt="SOTA results on CS-Wild-Places Baseline evaluation."
//         caption="Comparison of SOTA on CS-Wild-Places baseline evaluation set."
//       />
//     </div>
//     <div className={styles.imageGrid}>
//       <ImageWithCaption
//         src="/HOTFormerLoc/assets/dataset/dataset_cswp_unseen.png"
//         alt="SOTA results on CS-Wild-Places Unseen evaluation."
//         caption="Comparison of SOTA on CS-Wild-Places Unseen evaluation set."
//       />
//     </div>
//   </section>
// );

// const VisualisationSection: React.FC = () => (
//   <section className={styles.section}>
//     <h2 id="visualisation" className={styles.sectionHeading}>
//       Visualisation
//     </h2>

//     <div>
//       <h3 id="submap" className={styles.subHeading}>
//         Interactive Submap Visualisation
//       </h3>
//       <div>
//         <PCMVContainer
//           title1="Aerial View"
//           title2="Ground View"
//           isSingleViewer={false}
//         />
//       </div>
//     </div>

//     <div>
//       <h3 id="aerial-map" className={styles.subHeading}>
//         Aerial Map Visualisation
//       </h3>
//       <div className={styles.imageGrid}>
//         <figure>
//           <VideoPlayerContainer
//             src_1_title="Karawatha"
//             src_1_path="/HOTFormerLoc/assets/visualisation/karawatha_aerial_vid.mp4"
//             src_2_title="Venman"
//             src_2_path="/HOTFormerLoc/assets/visualisation/venman_aerial_vid.mp4"
//           />
//           <VideoPlayerContainer
//             src_1_title="QCAT"
//             src_1_path="/HOTFormerLoc/assets/visualisation/qcat_aerial_overview_vid.mp4"
//             src_2_title="Samford"
//             src_2_path="/HOTFormerLoc/assets/visualisation/samford_aerial_overview_vid.mp4"
//           />
//           <figcaption></figcaption>
//         </figure>
//       </div>

//       <h3 id="ground-aerial-map" className={styles.subHeading}>
//         Ground vs Aerial Map Comparison
//       </h3>
//       <div className={styles.imageGrid}>
//         <ImageWithCaption
//           src="/HOTFormerLoc/assets/visualisation/ground_aerial_1.png"
//           alt="Ground Vs Aerial Lidar Visualisation"
//           caption="Ground (top) vs Aerial (bottom) lidar scans for a section of Karawatha (note that a vertical offset is added manually for visualisation purposes)."
//         />
//       </div>
//     </div>
//   </section>
// );

export default Dataset;
