import React from 'react'

interface Props {
    title: string,
    duration: string,
    description: string
}

function Experience(props: Props) {
  const { title, duration, description } = props
  return (
    <>
    <h3>{title}</h3>
    <p>{duration}</p>
    <p>{description}</p>
    </>
  )
}

export default Experience