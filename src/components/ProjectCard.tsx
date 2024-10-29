import React from 'react';
import Image from 'next/image';
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
      <Image src={imageSrc} alt={title} width={600} height={330} className={styles.image} />
      <div className={styles.textContainer}>
        <h2 className={styles.heading}>{title}</h2>
        <small className={styles.skills}>{skills}</small>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
