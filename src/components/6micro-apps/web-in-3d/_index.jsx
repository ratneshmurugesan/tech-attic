import React, { useRef } from "react";

import { Canvas, extend, useThree, useFrame } from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const Controls = () => {
  const { camera, gl } = useThree();
  const controls = useRef();

  useFrame(() => controls.current.update());

  return <OrbitControls  autoRotate ref={controls} args={(camera, gl.domElement)}></OrbitControls>;
};

extend({ OrbitControls });

const WebIn3D = () => {
  return (
    <div>
      <Canvas>
        <mesh>
          <Controls />
          <boxBufferGeometry
            attach="geometry"
            args={[1, 1, 1]}
          ></boxBufferGeometry>
          <meshBasicMaterial
            wireframe
            attach="material"
            color={"white"}
          ></meshBasicMaterial>
        </mesh>
      </Canvas>
    </div>
  );
};

export default WebIn3D;
