// components/Skill.tsx
import styles from "../styles/Skill.module.css";

interface SkillProps {
  name: string;
  description: string;
  icon: string;
}

export default function Skill({ name, description, icon }: SkillProps) {
  return (
    <div className={styles.card}>
      <img src={icon} alt={`${name} icon`} className={styles.icon} />
      <div className={styles.textContainer}>
        <h3 className={styles.cardHeading}>{name}</h3>
        <p className={styles.cardText}>{description}</p>
      </div>
    </div>
  );
}
