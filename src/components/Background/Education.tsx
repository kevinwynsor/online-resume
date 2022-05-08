import React from 'react'

interface Props{
    school: string,
    duration: string
}

function Education(props: Props) {
  const { school, duration } = props
  return (
    <>
    <h3>{school}</h3>
    <p>{duration}</p>
    </>
  )
}

export default Education