//  Translation, rotation, and scaling (TRS)

import {
  Mesh,
  BoxBufferGeometry,
  MeshBasicMaterial,
  MeshStandardMaterial,
  MathUtils,
} from "three";

const createCube = ({
  geometry: { width, height, depth },
  position,
  scale = null,
  rotation = null,
  ...rest
}) => {
  const objGeometry = new BoxBufferGeometry(width, height, depth, 1, 1, 1);

  // const objMaterial = new MeshBasicMaterial({ ...rest }); // MeshBasicMaterial ignores any lights in the scene
  const objMaterial = new MeshStandardMaterial({ ...rest }); // MeshBasicMaterial ignores any lights in the scene

  const cubeObj = new Mesh(objGeometry, objMaterial);
  // a Vector3 is created automatically and stored in .position
  cubeObj.position.set(position.x, position.y, position.z); // move the cube relative to world space = Move the cube around in the scene.
  rotation &&
    cubeObj.rotation.set(
      MathUtils.degToRad(rotation.x || 0),
      MathUtils.degToRad(rotation.y || 0),
      MathUtils.degToRad(rotation.z || 0)
    ); // The Unit of Rotation is Radians
  scale && cubeObj.scale.set(scale.x, scale.y, scale.z);

  // console.log({ geometry });

  return cubeObj;
};

export default createCube;
