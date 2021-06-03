import React, {useContext} from 'react';
import { RenderContext } from "../context/RenderContext";

export default function ProjectDistribution() {
  const context = useContext(RenderContext);

  return (
    <>
      {context.projects
        .sort((a, b) => a.projectNo - b.projectNo)
        .map((project, idx) => (
          <div key={idx}>{`${project.projectNo} - ${project.name}`}</div>
        ))}
    </>
  )
}
