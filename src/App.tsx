import React from 'react';
import './App.css';
import Name from './components/Name';
import styled from 'styled-components'
import TechStack from './components/TechStack';
import Background from './components/Background';

function App() {
  return (
    <Body className="App">
      <Name/>
      <TechStack/>
      <Background/>
    </Body>
  );
}

const Body = styled.div`
  margin: 55px 200px;
`;


export default App;
