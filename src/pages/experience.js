import React from "react";
import { Section, Animation } from "gatsby-theme-portfolio-minimal";

const ExperienceSection = (props) => {
  const experiences = [
    {
      date: "2020 - 2024",
      company: "Technology University",
      position: "Software Engineer",
      description: [
        "GPA: 8.5/10.",
        // "",
        // "",
        // "",
      ],
    },
    {
      date: "Th. 4 - 7 - 2024",
      company: "Thực Tập tại Công Ty TNHH Giải Pháp và Công Nghệ",
      position: "Front-End Developer",
      description: [
        "Công Nghệ Sử Dụng: ReactJS và Tailwind CSS.",
        "Top 1 Thành Viên Hoàn Thành Task Được Giao Sớm Nhất và Hoàn Thành Tốt Nhất.",
      ],
    },
  ];

  return (
    <Animation type="fadeUp">
      <Section anchor={props.sectionId} heading={props.heading}>
        <div className="experience-section">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-date">{exp.date}</div>
              <div className="experience-details">
                <h3 className="company-name">{exp.company}</h3>
                <p className="position">{exp.position}</p>
                <ul className="description-list">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
          <style jsx>{`
            .experience-section {
              max-width: 800px;
              margin: 0 0;
              padding: 0px;
            }
            .experience-item {
              display: flex;
              margin-bottom: 30px;
            }
            .experience-date {
              flex: 0 0 150px;
              font-weight: bold;
              padding-right: 20px;
            }
            .experience-details {
              flex: 1;
            }
            .company-name {
              font-weight: bold;
              margin: 0 0 5px 0;
            }
            .position {
              font-style: italic;
              margin: 0 0 10px 0;
            }
            .description-list {
              margin: 0;
              padding-left: 20px;
            }
            @media (max-width: 600px) {
              .experience-item {
                flex-direction: column;
              }
              .experience-date {
                margin-bottom: 10px;
              }
            }
          `}</style>
        </div>
      </Section>
    </Animation>
  );
};

export default ExperienceSection;
