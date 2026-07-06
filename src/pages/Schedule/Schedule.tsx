import React from "react";
import styles from "../../Common.module.css";

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
              <td>Robustness, Failure, and Recovery in Real-World Mobile Robot Perception and Action</td>
              <td>Stefan Leutenegger</td>
            </tr>

            <tr>
              <td>2:45 – 3:05 PM</td>
              <td>How to Evaluate Real Robot Generalist Policies</td>
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
              <td>Errors and Mistakes in Human–Robot Interaction: Lessons from Robotic Mental Well-Being Coaches</td>
              <td>Micol Spitale</td>
            </tr>

            <tr>
              <td>5:00 – 5:20 PM</td>
              <td>Introspective Robot Learning for Open-World Autonomy</td>
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
export default Schedule;