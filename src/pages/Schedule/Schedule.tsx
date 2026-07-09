import React from "react";
import styles from "../../Common.module.css";

const Schedule: React.FC = () => {
  return (
  <div className={styles.container}>
    <main className={styles.main}>
      <section className={styles.section}>
      <h2 id="schedule" className={styles.sectionHeading}>
        Schedule
      </h2>

      <div className={styles.tableWrapper}>
        <table className={styles.scheduleTable}>
          <thead>
            <tr>
              <th>Time</th>
              <th>Talk / Session</th>
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
              <td><strong>Leveraging Generative World Models for Resilient Autonomy Evaluation</strong>
                <p className={styles.abstract}>
                    Evaluating autonomous vehicles at scale remains a defining challenge because real-world testing is costly, logistically constrained, and increasingly data-inefficient due to the rarity of safety-critical events.
                     While traditional procedural or 3D-reconstruction simulators often trade visual realism for the ability to seamlessly handle dynamic actors and occlusions, large-scale generative world models offer a scalable alternative.
                    This talk presents GAIA-3, evolving general world models from simple visual synthesis tools into rigorous safety evaluation engines. It shows how to evaluate AI driving models where the vehicle's choices dynamically guide the simulated future under real-world constraints, maintaining authentic interactions in counterfactual scenarios and enabling fault injection and challenging scenario testing. It also demonstrates how to generate cosimulated multisensor data, expanding the platform's utility to validate resilient autonomy applications well beyond vision-only driving.
                    </p>
              </td>
              <td>
                    
                     <a 
                        href="https://scholar.google.com/citations?user=eZrWRbMAAAAJ&hl=en"
                        target="_blank"
                        rel="noopener noreferrer">
                    
                        Will Maddern
                    </a>
                   
                </td>
            </tr>

            <tr>
              <td>2:25 – 2:45 PM</td>
              <td><strong>Robustness, Failure, and Recovery in Real-World Mobile Robot Perception and Action</strong>
               <p className={styles.abstract}>
                Despite rapid advances in the age of physical AI, robustness and task success rates in the real world remain a central bottleneck of robotics. This talk presents recent work on Spatial AI that leverages complementary sensing modalities and explicit uncertainty representations to improve robustness and accuracy in robot perception. Furthermore, it shows how incorporating dynamical models enables robots to detect failures and recover from them, illustrated through autonomous drone applications. Finally, it discusses recent advances in learning robot actions directly from observing humans. Since transferring human skills to robots inevitably leads to initial failures, these methods enable efficient adaptation to robot embodiments, environments, and tasks using only a small number of demonstrations—leveraging both successful and failed attempts. </p></td>
              <td><a 
                    href="https://scholar.google.com/citations?user=SmGQ48gAAAAJ&hl=en"
                    target="_blank"
                    rel="noopener noreferrer">
                
                    Stefan Leutenegger
                </a></td>
            </tr>

            <tr>
              <td>2:45 – 3:05 PM</td>
              <td><strong>How to Evaluate Real Robot Generalist Policies</strong>
              <p className={styles.abstract}>
Evaluating general-purpose robot policies rigorously remains one of robotics' hardest challenges, given that real-world evaluation is slow and costly while existing simulation benchmarks suffer from high setup overhead and a persistent sim-to-real gap. This talk discusses how to rigorously evaluate real-world generalist robot policies at scale, covering the key pitfalls in current benchmarking practice and approaches to addressing them. It introduces principles for future-proofing evaluation, including embodiment-agnostic task design, scalable task generation, and diagnostic analysis tools, which are needed to build evaluations that keep pace with increasingly capable models.
              </p>
              </td>
              <td><a 
                    href="https://www.xuningyang.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Xuning Yang
                </a></td>
            </tr>

            <tr>
              <td>3:05 – 3:30 PM</td>
              <td>Spotlight talks from selected accepted papers</td>
              <td>Participants/Authors</td>
            </tr>
           <tr className={styles.breakRow}>
        <td>3:30 – 4:00 PM</td>
        <td>
            ☕ Coffee break and poster session
        </td>
        <td>Participants</td>
        </tr>

            <tr>
              <td>4:00 – 4:20 PM</td>
              <td><strong>Embodied Reasoning for Out-of-Distribution Reliability in Autonomy</strong>
                <p className={styles.abstract}>
                    Autonomous systems are remarkably capable until the world stops looking like their training data. The rare, unstructured, out-of-distribution moment is where autonomy can earn (or lose) our trust. A tempting solution is to make robots "think harder" by forcing embodied foundation models to perform exhaustive chain-of-thought reasoning all the time. But in embodied systems, deliberation is not free: it costs time, compute, and sometimes safety itself. This talk argues that the real questions are what to reason about, how to reason under pressure, and when reasoning is worth its cost. It first shows that embodied foundation models can discover for themselves which forms of reasoning actually improve decision-making by pruning away the verbose, templated reasoning that was previously assumed to be necessary. It then demonstrates that reasoning can be structured to operate at the speed of safety, anticipating potential hazards and improvising fallback behaviors in real time. Finally, it presents how intelligence can be budgeted by allocating deep deliberation only to the moments that demand it. Across manipulation, legged locomotion, and self-driving, a common lesson emerges: embodied reasoning is a resource to be discovered, deployed, and budgeted, rather than a fixed template applied uniformly.
                 </p>   
              </td>
              <td><a 
                    href="https://scholar.google.com/citations?user=LCMIfaQAAAAJ&hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Milan Ganai
                </a></td>
            </tr>

            <tr>
              <td>4:20 – 4:40 PM</td>
              <td><strong>Navigating the Open World: From Failure Recovery to Failure Resilience</strong>
              <p className={styles.abstract}>
                As robots move from tightly controlled environments into the open world, failures become inevitable. To navigate robustly, robots must not only recover from failures, but also learn from them and mitigate them over time. This talk presents recent work on (i) enabling learned policies to detect, recognize, and recover from failures, and (ii) leveraging uncertainty to drive continual adaptation of traversability models for robust navigation. Together, these methods position failure resilience as a foundational element of open-world navigation, empowering robots to withstand unavoidable failures and grow steadily more capable through them.
              </p>
              </td>
              <td><a 
                    href="https://www.comp.nus.edu.sg/~dyhsu/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    David Hsu
                </a></td>
            </tr>

            <tr>
              <td>4:40 – 5:00 PM 
                <span className={styles.onlineLabel}>
                    <br />
                    Online
                </span></td>
              <td><strong>Errors and Mistakes in Human–Robot Interaction: Lessons from Robotic Mental Well-Being Coaches</strong>
                <p className={styles.abstract}>
                    As robots become increasingly integrated into everyday life, understanding how they make and recover from errors is essential for building effective and trustworthy human–robot interactions. This talk explores the role of errors in HRI through a case study on robotic mental well-being coaches designed to support employees in the workplace, showing how robot mistakes can shape users' trust, engagement, and interaction outcomes. 
                    Beyond this case study, it highlights the growing interest in errors and failures across the HRI community. It presents the evolution of the ERR@HRI Challenge over its three editions and discusses the recent special issue dedicated to this topic, both of which reflect the increasing recognition of error as a key aspect of HRI research. 
                </p>
              </td>

              <td><a 
                    href="https://spitale.faculty.polimi.it/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Micol Spitale
                </a></td>
            </tr>

            <tr>
              <td>5:00 – 5:20 PM</td>
              <td><strong>Introspective Robot Learning for Open-World Autonomy</strong>
               <p className={styles.abstract}>
              Robots operating in the open world inevitably face distribution shifts, perceptual uncertainty, incomplete task specifications, and cascading errors over long horizons. In such settings, failure recovery cannot be treated as an exceptional add-on to an otherwise fixed autonomy stack. Instead, robots need the ability to anticipate failures, recognize when their internal models are unreliable, reason over structured task and scene representations, and adapt their behavior from limited experience. This talk discusses recent work toward this goal, spanning open-world perception, future-aware scene understanding, and structured representations for action. It argues that robust failure recovery requires moving beyond reactive error handling toward a more integrated view of open-world autonomy: perception systems that expose uncertainty, world models that support anticipation, task representations that enable repair, and policies that can adapt online. This perspective opens a path toward robots that do not merely fail safely, but learn from failure and continue acting effectively in the real world.</p>
              </td>
              <td><a 
                    href="https://rl.uni-freiburg.de/people/valada"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Abhinav Valada
                </a></td>
            </tr>

            <tr className={styles.breakRow}>
                <td>5:20 – 5:25 PM</td>
                <td>Short break to prepare for the breakout session</td>
                <td>Organisation committee</td>
            </tr>

            <tr>
              <td>5:25 – 5:55 PM</td>
              <td>Panel discussion with invited speakers and audience on open challenges in failure detection, reasoning, and recovery</td>
              <td>Participants/Panelists</td>
            </tr>

            <tr>
              <td>5:55 – 6:00 PM</td>
              <td>Closing remarks and discussion for a community position paper</td>
              <td>Organisation committee</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
    </main>
  </div>
  );
};

export default Schedule;