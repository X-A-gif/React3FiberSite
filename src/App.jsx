import { Canvas } from '@react-three/fiber'
import { Suspense, useState } from 'react'; // Import Suspense and useState
import Navbar from './components/Navbar'
import LoadingScreen from './components/LoadingScreen'; // Create this component

const App = () => {
  const [isLoading, setIsLoading] = useState(true); // Create a loading state

  return (
    <div className='' id="canvas-container">
      <Navbar />
      {/* Wrap the Canvas with Suspense */}
      <Suspense fallback={<LoadingScreen />}>
        <Canvas onCreated={() => setIsLoading(false)}> {/* Set loading state to false after everything is loaded */}
          <ambientLight intensity={0.1} />
          <directionalLight color="red" position={[0, 0, 5]} />
          {/* Your 3D models and components go here */}
          {/* <mesh> ... </mesh> */}
        </Canvas>
      </Suspense>
      {/* Show the loading screen if isLoading is true */}
      {isLoading && <LoadingScreen />}
    </div>
  );
};

export default App;
