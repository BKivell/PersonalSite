// components/ProjectsSection.tsx

import React from 'react';
import ProjectCard from './ProjectCard';
import styles from "../styles/ProjectsSection.module.css";

const ProjectsSection = () => {
    const projects = [
        {
            title: 'Zomboly',
            skills: 'Unity3D, C#, Blender',
            description: 'Collaboratively developed a zombie-themed first-person shooter game in Unity3D. As Tech Lead, I tackled key technical challenges, ensured smooth component integration, and fostered a cohesive team dynamic. This project sharpened my skills in estimation, component integration, and team communication.',
            imageSrc: '/ZombolyScreenshot.png',
        },
        {
            title: 'Soft Robotics Tracking Algorithms',
            skills: 'OpenCV, Python',
            description: 'Developed and fine-tuned tracking algorithms tailored for soft robotics applications. Implemented methods like region-growing segmentation to enhance tracking precision, contributing to better movement analysis in soft robotic systems.',
            imageSrc: '/ImageProcessing.PNG',
        },
        {
            title: "Yasmin's Bakery Website",
            skills: 'Next.js, CSS',
            description: 'Created a responsive and visually appealing website for Yasmin’s Bakery. This project focused on delivering a user-friendly experience that showcases the Yasmins baking.',
            imageSrc: '/YasminsSite.PNG',
        },
        {
            title: 'Self-Watering Plant System',
            skills: 'Raspberry Pi, Arduino, Python',
            description: 'Developed an automated system that monitors soil moisture levels to maintain optimal hydration for plants. Integrated with Raspberry Pi and Arduino, the project features a user interface for real-time monitoring, enhancing ease of use.',
            imageSrc: '/PlantMonitor.PNG',
        },
        {
            title: 'Arcade-Style Mobile Apps',
            skills: 'Unity2D, Game Design Principles, Graphic Design',
            description: 'Designed and developed several arcade-style mobile games, exploring game mechanics, user experience, and the app deployment lifecycle. Gained valuable experience in mobile game design, optimizing gameplay for accessibility and engagement.',
            imageSrc: '/LightBop.png',
        },
        {
            title: 'Various University Projects',
            skills: 'Linux, Java, C++, Python, JavaScript, Node.js',
            description: 'Worked on a wide range of university projects covering data structures, algorithms, fuzzy logic, and traversal methods. Gained hands-on experience with Linux and multiple programming languages, building a strong foundation in software development.',
            imageSrc: '/AUTImage.jpg',
        },
        {
            title: 'Evolocity Electric Go-Kart',
            skills: 'Electric Vehicle Design, Sustainable Engineering',
            description: 'Built an electric go-kart from 100% recycled materials as part of Evolocity. Achieved first place in the drag race and received the Earth Care award for sustainable design, emphasizing eco-friendly practices and efficient performance.',
            imageSrc: '/Evolocity.jpg',
        },
    ];

    return (
        <div className={styles.projectsSection}>
            <h2 className={styles.heading}>Some of my Projects</h2>
            {projects.map((project, index) => (
                <ProjectCard
                    key={index}
                    title={project.title}
                    skills={project.skills}
                    description={project.description}
                    imageSrc={project.imageSrc}
                    isImageRight={index % 2 !== 0} // Alternates image position
                />
            ))}
        </div>
    );
};

export default ProjectsSection;
