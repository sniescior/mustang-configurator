import RedMustang from './RedMustang';
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';

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
            <RedMustang position={[0,-0.5,0]} dimmed={props.dimmed} />
          </Suspense>
        </PerspectiveCamera>
      </Canvas>
    );
}

export default Model;