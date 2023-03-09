import './App.css';
import * as THREE from 'react-three-fiber';
import { Canvas } from 'react-three-fiber'; 
import circle from './assets/circle.png'
import { Suspense } from 'react';

function Points(){

}

function AnimationCanvas(){
  return(
    <Canvas 
      colorManagement={false}
      camera={{position: [100, 10, 0], fov: 75}}
    >

      <Suspense fallback={<div>Loading ...</div>}>
        <Points />
      </Suspense>

    </Canvas>
  );
}

function App() {
  return (
    <div className="anim">
      <Suspense fallback={<div>Loading ...</div>}>
        <AnimationCanvas />
      </Suspense>
    </div>
  );
}

export default App;
