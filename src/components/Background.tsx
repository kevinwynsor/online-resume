import React from 'react'
import { Col, Row } from 'antd'
import Experience from './Background/Experience'
import Education from './Background/Education'
import Awards from './Background/Awards'
import Projects from './Background/Projects'

function Background() {
  return (
    <>
    <h1>Background</h1>
    <Row>
        <Col span={12}>
        <h3>Experience</h3>
        <Experience title='Freelancing' duration='Software Developer (2016 - Present)' description='Worked on several projects focusing on IoT, robotics, web development, data processing, and scripting.'/>
        <h3>Awards</h3>
        <Awards award='Dean’s Lister, 2nd Semester, A.Y. 2020-2021' organization='University of Santo Tomas'/>
        </Col>
        
        <Col span={12}>
        <h3>Education</h3>
        <Education school='University of Santo Tomas' duration='2018 - 2022'/>
        <h3>Projects</h3>
        <Projects project='PocketSaver (December 2020)' learnings={['Role - Backend Developer', 'Language - JavaScript, Nodejs']}/>
        </Col>
    </Row>
    
    </>
  )
}

export default Background