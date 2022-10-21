import Mustang from './Mustang';
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber';

function Model() {
    return (
      <Canvas>
        <Suspense fallback={null}>
          {/* <Mustang position={[0,0,0]} /> */}
        </Suspense>
      </Canvas>
    );
}

export default Model;