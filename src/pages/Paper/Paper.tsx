import React from "react";
import styles from "../../Common.module.css";

const PaperPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>Accepted Papers</h2>
             <p className={styles.paragraph}>
              Congratulations to the authors of{" "}
              <strong>Uncertainty Quantification for Flow-Based VLAs</strong>{" "}
              for receiving the Best Paper Award.
            </p>
            <div className={`${styles.paperItem} ${styles.bestPaper}`}>
              <div className={styles.awardBadge}>
                 Best Paper Award
              </div>

              <strong>
                Uncertainty Quantification for Flow-Based VLAs
              </strong>
              <br />
              Ralf Römer; Maximilian Seeliger; Saida Liu; Ben Sturgis; Marco Bagatella; Daniel Marta; Andreas Krause; Angela P. Schoellig
              <br />
              Technical University of Munich; ETH Zurich; Technical University of Munich; Technical University of Munich; ETH Zurich; ETH Zurich; ETH Zurich; Technical University of Munich
            </div>

              <div className={styles.noticeBox}>
                <h3 className={styles.subHeading}>Poster Presentation Instructions</h3>
                <p>
                  All accepted papers will be presented as posters during the workshop.
                </p>
                <ul className={styles.list}>
                  <li><strong>Poster size:</strong> A0 </li>
                  <li><strong>Orientation:</strong> Portrait</li>
                  <li><strong>Mounting:</strong> Poster boards will be provided for mounting posters</li>
                </ul>
              </div>
          <div className={styles.paperList}>
            <div className={styles.paperItem}>
              <strong>
                UEREBot: Learning Safe Quadrupedal Navigation under Unstructured Environments and High-Speed Dynamic Obstacles
              </strong>
              <br />
              Zihao Xu; Runyu Lei; Zihao Li; Boxi Lin; Ce Hao; Jin Song Dong
              <br />
              National University of Singapore; National University of Singapore; ShanghaiTech University; Xi'an Jiaotong University; National University of Singapore; National University of Singapore
            </div>

            <div className={styles.paperItem}>
              <strong>
                Language-Guided Adaptive Mission Replanning for Resilient Autonomous UAVs in Unknown Environments
              </strong>
              <br />
              Justin Turnau
              <br />
              Arizona State University
            </div>

            <div className={styles.paperItem}>
              <strong>
                Back to the Familiar Future: Failure Recovery for VLA Policies via Pre-Imagined Milestone Selection
              </strong>
              <br />
              Suyeon Shin; Juwon Kim; Hyeonbin Park; Hyunseo Kim; Hyundo Lee; Hyung-Sin Kim; Byoung-Tak Zhang
              <br />
              Seoul National University; Yonsei University; Soongsil University; Seoul National University; Seoul National University; Seoul National University; Seoul National University
            </div>

            <div className={styles.paperItem}>
              <strong>
                Failure Prediction at Runtime for Generative Robot Policies
              </strong>
              <br />
              Ralf Römer; Adrian Kobras; Luca Worbis; Angela P. Schoellig
              <br />
              Technical University of Munich; Technical University of Munich; Technical University of Munich; Technical University of Munich
            </div>

            <div className={styles.paperItem}>
              <strong>
                LIMO: Learning Inside Optimization for Recoverability-Aware Robot Control
              </strong>
              <br />
              Ishaan Mahajan; Brian Plancher
              <br />
              Columbia University; Dartmouth College
            </div>

            <div className={styles.paperItem}>
              <strong>
                InFeR: Informed Failure Resilience in Learned Visual Navigation Control
              </strong>
              <br />
              Zishuo Wang; Joel Loo; David Hsu
              <br />
              National University of Singapore; National University of Singapore; National University of Singapore
            </div>

            <div className={styles.paperItem}>
              <strong>
                Safe but Stuck: Autonomous Detection and Recovery of Liveness Lockouts in Field Robots
              </strong>
              <br />
              Siddhant Shrivastava; Malika Meghjani
              <br />
              Singapore University of Technology and Design
            </div>

            <div className={styles.paperItem}>
              <strong>
                TreeGuard: Behaviour-Tree-Grounded Runtime Failure Monitoring with Vision-Language Models
              </strong>
              <br />
              Ramtin Tabatabaei; Vassilis Kostakos; Wafa Johal
              <br />
              University of Melbourne; University of Melbourne; University of Melbourne
            </div>

            <div className={styles.paperItem}>
              <strong>
                A Pragmatist Robot: Learning Task Planning by Trial and Error with Memory-Augmented VLMs
              </strong>
              <br />
              Kaixian Qu; Guowei Lan; Rene Zurbrugg; Changan Chen; Christopher E. Mower; Haitham Bou-Ammar; Marco Hutter
              <br />
              Robotic Systems Lab, ETH Zurich; Robotic Systems Lab, ETH Zurich; Robotic Systems Lab, ETH Zurich, ETH AI Center; Robotic Systems Lab, ETH Zurich; Huawei Noah’s Ark Lab; Huawei Noah’s Ark Lab, UCL Centre for AI; Robotic Systems Lab, ETH Zurich
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PaperPage;