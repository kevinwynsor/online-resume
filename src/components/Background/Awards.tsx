import React from 'react'

interface Props {
    award: string,
    organization: string
}

function Awards(props: Props) {
  const { award, organization } = props 
  return (
    <>
    <h3>{award}</h3>
    <p>{organization}</p>
    </>
  )
}

export default Awards