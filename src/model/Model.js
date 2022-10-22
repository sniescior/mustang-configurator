import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import Mustang from './Mustang';

function Model(props) {
    return (
      <Canvas>
        <PerspectiveCamera>
          <OrbitControls 
            maxDistance={4}
            minDistance={3}
            minPolarAngle={1}
            maxPolarAngle={1.3}
            maxAzimuthAngle={2}
            screenSpacePanning={true}
            enablePan={false}
          />
          <Suspense fallback={null}>
            <Mustang position={[0,-0.5,0]} dimmed={props.dimmed} carPaint={props.carPaint} />
          </Suspense>
        </PerspectiveCamera>
      </Canvas>
    );
}

export default Model;