import React from 'react';
import styles from "../styles/ProjectCard.module.css";

interface ProjectCardProps {
  title: string;
  skills: string;
  description: string;
  imageSrc: string;
  isImageRight: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, skills, description, imageSrc, isImageRight }) => {
  return (
    <div className={`${styles.projectCard} ${isImageRight ? styles.reverse : ''}`}>
      <img src={imageSrc} alt={title} className={styles.image} />
      <div className={styles.textContainer}>
        <h2 className={styles.heading}>{title}</h2>
        <small className={styles.skills}>{skills}</small>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
