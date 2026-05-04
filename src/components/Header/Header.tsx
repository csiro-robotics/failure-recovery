import React from "react";
import styles from "../../Common.module.css";
// import AuthorsBar from "../AuthorsBar/AuthorsBar";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        Failure Is Not the End: Towards Open-World Failure Recovery for Robots
      </h1>

      <p className={styles.meta}>
        Workshop at RSS 2026
      </p>

      <p className={styles.meta}>
        📅 July 17, 2026 &nbsp;|&nbsp; 🕒 13:00 – 17:00 (TBC)
      </p>

      <p className={styles.meta}>
        📍 In-person: UTS (Sydney, Australia) — Room TBC
      </p>

      <p className={styles.meta}>
        🎥 Recordings: <a href="#">YouTube (coming soon)</a>
      </p>
    </header>
  );
};
export default Header;
