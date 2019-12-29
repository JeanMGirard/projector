import React from "react";

import { MOCK_PROJECTS } from "../mock_projects";

export default function ProjectList(){
  return (
    <div id="project-list">
      { MOCK_PROJECTS.map((project, index) => (
        <div key={index}>{project.name}</div>
      ))}
    </div>
  )
}
