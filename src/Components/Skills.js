import React from 'react';
import { CgCPlusPlus } from "react-icons/cg";
import { FaReact, FaGitAlt, FaGithub, FaNpm, FaFigma, FaBootstrap, FaDocker } from "react-icons/fa";
import { DiNodejs, DiJavascript1, DiPostgresql } from "react-icons/di";
import { SiExpress, SiMongodb, SiPostman, SiRedis, SiTypescript, SiGrafana, SiGo } from "react-icons/si";

const Skills = ({ skill }) => {
  const icon = {
    'C++': <CgCPlusPlus />,
    'Postman': <SiPostman />,
    'React': <FaReact />,
    'JavaScript': <DiJavascript1 />,
    'Node': <DiNodejs />,
    'Express': <SiExpress />,
    'MongoDB': <SiMongodb />,
    'Git': <FaGitAlt />,
    'GitHub': <FaGithub />,
    'Npm': <FaNpm />,
    'Figma': <FaFigma />,
    'Bootstrap': <FaBootstrap />,
    'Docker': <FaDocker />,
    'PostgreSQL': <DiPostgresql />,
    'Redis': <SiRedis />,
    'TypeScript': <SiTypescript />,
    'Grafana': <SiGrafana />,
    'Golang': <SiGo />
  };

  return (
    <div title={skill} className='SkillBox'>
      {icon[skill]}
    </div>
  )
}

export default Skills
