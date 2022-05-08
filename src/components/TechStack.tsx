import React from 'react'
import { Col, Row } from 'antd'
import Languages from './Techstack/Languages'
import Frameworks from './Techstack/Frameworks'
import Technologies from './Techstack/Technologies'

function TechStack() {
  return (
    <>
    <h2>Tech Stack</h2>
    <Row>
    <Col span={8}><Languages/></Col>
    <Col span={8}><Frameworks/></Col>
    <Col span={8}><Technologies/></Col>
    </Row>
    </>
  )
}

export default TechStack