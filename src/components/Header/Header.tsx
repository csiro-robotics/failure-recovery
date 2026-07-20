import React from "react";
import styles from "../../Common.module.css";


const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      
      <h1 className={styles.title}>
        Failure Is Not the End
      </h1>

      <h2 className={styles.subtitle}>
        Toward Open-World Failure Recovery for Robots
      </h2>

   <p className={styles.meta}>
      Sydney, Australia
    </p>

    <p className={styles.metaSmall}>
      July 17, 2026 | 14:00–18:00
    </p>

    <p className={styles.metaSmall}>
      UTS CB11.00.401 (Building 11, Level 00, Room 401)
    </p>
  <p className={styles.metaSmall}>
       Online: <a href="https://monash.zoom.us/j/81682776264?pwd=xnKMh74jNsqWbVL6Yr1FJbLSdWZcPO.1" target="_blank" rel="noopener noreferrer">
          Join via Zoom
        </a>
      </p>


      <p className={styles.metaSmall}>
        {/* 🎥 Recordings: <a href="#">YouTube (coming soon)</a> */}
        Recordings: <a href="#">YouTube (Available after the workshop.)</a>
      </p>
    </header>
  );
};

export default Header;