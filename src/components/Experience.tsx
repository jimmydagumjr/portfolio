import React from "react";
import ExperienceCSS from "./../assets/css/Experience.module.css";

interface ExperienceCardProps {
  date: string;
  title: string;
  company: string;
  companyLink?: string;
  description: string;
  skills?: string[];
}

interface SkillProps {
  skill: string;
}

const Experience: React.FC = () => {
  const experiences = [
    {
      date: "May 2024 - December 2024",
      title: "Software & Systems Engineer Intern",
      company: "NexOasis",
      companyLink: "https://nexoasis.com/",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      skills: [
        "PHP",
        "JavaScript",
        "Python",
        "CSS - Bootstrap",
        "HTML",
        "MySQL",
        "Bash",
        "Proxmox",
      ],
    },
    {
      date: "December 2023 - May 2024",
      title: "Information Technology Support Consultant",
      company: "University of Nevada, Las Vegas",
      companyLink: "https://www.unlv.edu/",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      skills: ["Python", "JavaScript", "React", "HTML", "CSS"],
    },
  ];

  return (
    <section id="experience">
      <h2>experience</h2>
      <ul className={ExperienceCSS.listWrapper}>
        {experiences.map((exp, index) => (
          <ExperienceCard
            key={index}
            date={exp.date}
            title={exp.title}
            company={exp.company}
            companyLink={exp.companyLink}
            description={exp.description}
            skills={exp.skills}
          />
        ))}
      </ul>
      <a
        className={ExperienceCSS.resumeLink}
        href="/files/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        title="Jimmy Dagum's Resume"
      >
        view full resume
        <div className={ExperienceCSS.linkIcon}>
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
    </section>
  );
};

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  date,
  title,
  company,
  companyLink,
  description,
  skills,
}) => (
  <li className={ExperienceCSS.listItem}>
    <p className={ExperienceCSS.expDate}>{date}</p>
    <div className={ExperienceCSS.rightWrapper}>
      <h3 className={ExperienceCSS.expTitle}>{title}</h3>
      <a
        className={ExperienceCSS.expCompany}
        href={companyLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        {company}
        <div className={ExperienceCSS.linkIcon}>
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
      <p className={ExperienceCSS.expDescription}>{description}</p>
      {skills && (
        <ul className={ExperienceCSS.expSkillsWrapper}>
          {skills.map((skill, index) => (
            <Skill key={index} skill={skill} />
          ))}
        </ul>
      )}
    </div>
  </li>
);

const Skill: React.FC<SkillProps> = ({ skill }) => {
  return (
    <div className={ExperienceCSS.expSkillWrapper}>
      <li className={ExperienceCSS.expSkill}>{skill}</li>
    </div>
  );
};

export default Experience;
