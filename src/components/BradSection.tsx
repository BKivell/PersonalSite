// components/BradSection.tsx

import styles from "../styles/BradSection.module.css";

export default function BradSection() {
  return (
    <section className={styles.brad}>
      <div className={styles.textLeft}>
        <h1 className={styles.name}>Brad Kivell</h1>
        <p className={styles.subtitle}>Software Engineer</p>
      </div>
      <div className={styles.textRight}>
        <h2 className={styles.aboutHeading}>A bit about me</h2>
        <p className={styles.aboutText}>
          Hi! I&apos;m a software engineering student at AUT with a passion for problem-solving and creating things that make life easier. Always learning, always curious.
        </p>
      </div>
    </section>
  );
}
