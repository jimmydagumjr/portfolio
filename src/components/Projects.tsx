import React from "react";
import ProjectsCSS from "./../assets/css/Projects.module.css";

interface ProjectProps {
  title: string;
  projectLink: string;
  description: string;
  imageUrl: string;
  skills: string[];
}

interface ProjectSkillProps {
  skill: string;
}

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Catharsis",
      projectLink: "https://github.com/jimmydagumjr/catharsis",
      description:
        "I created a React-based web app designed for me and my friends to share music and photos. The app hosts hundreds of photos and music libraries, providing an easy platform for us to exchange content. I established an optimized PostgreSQL database system to efficiently store and asynchronously retrieve user information, supporting thousands of users. To enhance security, I integrated a 2-Factor authentication system using SMTP servers. Additionally, I streamlined the music player state management by reducing 10 different states to a single global state using React Redux, making the app smoother and more efficient. This project combined my passion for music and technology, creating a fun and practical way to share with others.",
      imageUrl: "/images/catharsis.webp",
      skills: ["React", "Redux", "JavaScript", "CSS", "HTML", "PostgreSQL"],
    },
    // add more projects here
  ];

  return (
    <section id="projects">
      <h2>projects</h2>
      <ul className={ProjectsCSS.projectsContainer}>
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            projectLink={project.projectLink}
            description={project.description}
            imageUrl={project.imageUrl}
            skills={project.skills}
          />
        ))}
      </ul>
    </section>
  );
};

const Project: React.FC<ProjectProps> = ({
  title,
  projectLink,
  description,
  imageUrl,
  skills,
}) => {
  return (
    <li className={ProjectsCSS.project}>
      <img src={imageUrl} className={ProjectsCSS.projectImage} alt={title} />
      <div className={ProjectsCSS.rightContainer}>
        <a
          className={ProjectsCSS.projectTitle}
          href={projectLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          {title}
          <div className={ProjectsCSS.linkIcon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13.5442 10.4558c-1.7057-1.70558-4.47104-1.70558-6.17667 0l-3.08831 3.0884c-1.70563 1.7056-1.70563 4.471 0 6.1766 1.70563 1.7056 4.47099 1.7056 6.17658 0L12 18.1766"
              />
              <path
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10.4558 13.5442c1.7056 1.7056 4.471 1.7056 6.1766 0l3.0883-3.0884c1.7057-1.70559 1.7057-4.47095 0-6.17658-1.7056-1.70563-4.471-1.70563-6.1766 0L12 5.82338"
              />
            </svg>
          </div>
        </a>
        <p className={ProjectsCSS.projectDescription}>{description}</p>
        <div className={ProjectsCSS.projectSkills}>
          {skills.map((skill, index) => (
            <ProjectSkill key={index} skill={skill} />
          ))}
        </div>
      </div>
    </li>
  );
};

const ProjectSkill: React.FC<ProjectSkillProps> = ({ skill }) => {
  return (
    <div className={ProjectsCSS.projectSkillWrapper}>
      <p className={ProjectsCSS.projectSkill}>{skill}</p>
    </div>
  );
};

export default Projects;
