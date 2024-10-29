import Image from 'next/image';
import styles from "../styles/Skill.module.css";

interface SkillProps {
  name: string;
  description: string;
  icon: string;
}

export default function Skill({ name, description, icon }: SkillProps) {
  return (
    <div className={styles.card}>
      <Image src={icon} alt={`${name} icon`} width={50} height={50} className={styles.icon} />
      <div className={styles.textContainer}>
        <h3 className={styles.cardHeading}>{name}</h3>
        <p className={styles.cardText}>{description}</p>
      </div>
    </div>
  );
}
