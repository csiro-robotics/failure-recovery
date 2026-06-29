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
        Sydney, Australia | July 17th, 2026
      </p>

      <p className={styles.metaSmall}>
        14:00 – 18:00  · UTS (Room TBC)
      </p>

      <p className={styles.metaSmall}>
        🎥 Recordings: <a href="#">YouTube (coming soon)</a>
      </p>
    </header>
  );
};

export default Header;