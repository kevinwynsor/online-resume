import React from 'react'
import { Col, Row } from 'antd'
import Languages from './Languages'
import Frameworks from './Frameworks'
import Technologies from './Technologies'

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