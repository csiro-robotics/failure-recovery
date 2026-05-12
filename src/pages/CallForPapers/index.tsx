import React from "react";
import styles from "../../Common.module.css";



const CallForPapersPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>
            Call for Papers
          </h2>

          <p className={styles.paragraph}>
            We invite contributions on failure detection, understanding,
            and recovery in real-world robotics. As robots are increasingly deployed
            in unstructured and safety-critical environments, robustness and resilience
            to failure become fundamental challenges. This workshop aims to bring together
            researchers and practitioners to explore methods that enable robots to
            detect, reason about, and recover from failures in the wild.
          </p>

          <p className={styles.paragraph}>
            We encourage submissions that introduce new research directions
            or ideas that invite discussion and provoke thoughtful reflection
            within the community.
          </p>

          <h3 className={styles.subHeading}>Discussion Topics</h3>

          <ul className={styles.list}>
            <li>Characterising Failure in Field Robotics</li>
            <li>Robustness under Environmental and Sensor Degradation</li>
            <li>Failure Detection, Prediction, and Early Warning</li>
            <li>Recovery Mechanisms and Behavioural Adaptation</li>
            <li>Evaluation, Benchmarking, and Real-World Deployment</li>
            <li>Human-in-the-Loop Failure Detection and Recovery</li>
            <li>Foundation Models for Failure Detection and Recovery</li>
          </ul>
        <h3 className={styles.subHeading}>Key Research Questions</h3>
            { 
            <ul className={styles.list}>
              <li>How can failures be detected before cascading?</li>
              <li>How can robots adapt when sensing degrades?</li>
              <li>How should uncertainty and risk of failure be quantified?</li>
              <li>What frameworks enable safe recovery and continued operation?</li>
              <li>What role do foundation models play in reasoning and recovery?</li>
            </ul> }
      

          <h3 className={styles.subHeading}>Submission Instructions</h3>

          <ul className={styles.list}>
            <li>Paper length: Up to 4 pages (excluding references and appendix)</li>
            <li>Format: RSS paper template</li>
            <li>
              Submission Portal:{" "}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScFPSOqZPHKhKpLxMWd-gb2PcUcsEx83PhgQRpasgmtx_GbaA/viewform?usp=sharing&ouid=109899858245832244605"
                target="_blank"
                rel="noopener noreferrer"
              >
                Online submission form
              </a>
            </li>
            <li>Supplementary Material: Videos and demos are encouraged</li>
          </ul>

          <p className={styles.paragraph}>
            Accepted papers will be presented as posters, with selected works
            featured as spotlight talks. Best Paper and Poster Awards will
            recognise outstanding contributions, particularly from early-career
            researchers.
          </p>

          <h3 className={styles.subHeading}>Important Dates</h3>

          <ul className={styles.list}>
            <li>Submission deadline: June 10, 2026</li>
            <li>Notification: June 15, 2026</li>
            <li>Camera-ready deadline: July 10, 2026</li>
            <li>Workshop date: July 17, 2026</li>
          </ul>

          <p className={styles.paragraph}>
            Join us at RSS 2026 to explore how robots can detect, adapt to,
            and recover from failures in real-world environments.
          </p>
        </section>
      </main>
    </div>
  );
};

export default CallForPapersPage;