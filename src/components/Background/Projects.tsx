import React from 'react'

interface Props {
    project: string,
    learnings: Array<string>
}

function Projects(props: Props) {
  const { project, learnings } = props
  return (
    <>
    <h3>{project}</h3>
    {learnings.map((learning)=>(
        <li>{learning}</li>
    ))}
    </>
  )
}

export default Projects