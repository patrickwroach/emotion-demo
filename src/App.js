import React from 'react';
import { DemoContainer } from './demo-container';
import { AnimationContainer } from './animation-container';
import { Cube } from './cube';
import './styles/styles.css';

export const App = ()=> {
  const dimensions = 200;
  return (
    <DemoContainer>
      <AnimationContainer dimensions={dimensions}>
      <Cube dimensions={dimensions} isInternal ={true}/>
      <Cube dimensions={dimensions}/>
      </AnimationContainer>
    </DemoContainer>
  );
}

export default App;
