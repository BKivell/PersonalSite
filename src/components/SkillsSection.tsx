// components/SkillsSection.tsx
import Skill from "./Skill";
import styles from "../styles/SkillsSection.module.css";

const skillsData = [
  { name: "Next.js", description: "A React framework for production.", icon: "/icons/NextjsIcon.png" },
  { name: "Unity", description: "Game engine for 2D and 3D games.", icon: "/icons/UnityIcon.png" },
  { name: "TypeScript", description: "A typed superset of JavaScript.", icon: "/icons/TypescriptIcon.png" },
  { name: "Tailwind CSS", description: "A utility-first CSS framework.", icon: "/icons/TailwindIcon.png" },
  { name: "React", description: "JavaScript library for building UI.", icon: "/icons/ReactIcon.png" },
  { name: "Git", description: "Version control for project tracking.", icon: "/icons/GitIcon.png" },
  { name: "MongoDB", description: "NoSQL database for scalable applications.", icon: "/icons/MongodbIcon.png" },
  { name: "Python", description: "Versatile programming language for scripting and development.", icon: "/icons/PythonIcon.png" },
  { name: "OpenCV", description: "Computer vision library for image processing.", icon: "/icons/OpencvIcon.png" },
];
export default function SkillsSection() {
  return (
    <section className={styles.skillsSectionContainer}>
      <h2 className={styles.heading}>Core Skills</h2>
      <section className={styles.skillsSection}>
        {skillsData.map((skill, index) => (
          <Skill key={index} name={skill.name} description={skill.description} icon={skill.icon} />
        ))}
      </section>
    </section>
  );
}
