import React from "react";
import ProjectsCSS from "./../assets/css/Projects.module.css";

interface ProjectProps {
  title: string;
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
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      imageUrl: "/images/catharsis.png",
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
  description,
  imageUrl,
  skills,
}) => {
  return (
    <li className={ProjectsCSS.project}>
      <img src={imageUrl} className={ProjectsCSS.projectImage} alt={title} />
      <div className={ProjectsCSS.rightContainer}>
        <h3 className={ProjectsCSS.projectTitle}>{title}</h3>
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
