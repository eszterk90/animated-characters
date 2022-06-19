import './index.css';
import {Suspense, useState} from 'react'
import {Canvas} from '@react-three/fiber'
import {OrbitControls} from '@react-three/drei'
import Archer from './components/Archer'

function App() {

  const [action, setAction] = useState('StandingIdle');

  return (
    <>
    <Canvas>
      <ambientLight />
        <pointLight intensity={2} position={[-1, 1, 3]} color="red" />
        <pointLight intensity={2} position={[1, 1, 3]} color="blue" />
        <pointLight intensity={2} position={[0, 3, -10]} color="white" />
      <Suspense fallback={null}>
        <Archer action={action}/>
      </Suspense>
      <OrbitControls />
    </Canvas>
    <div className='controls'>
      <button onClick={() => {setAction('RunForward')}}>Run Forward</button>
      <button onClick={() => {setAction('Death')}}>Death</button>
      <button onClick={() => {setAction('DrawArrow')}}>Draw Arrow</button>
      <button onClick={() => {setAction('StandingIdle')}}>Idle</button>
    </div>
    </>
  );
}

export default App;
