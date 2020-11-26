import { PerspectiveCamera } from "three";

const createCamera = ({
  fov = 35,
  //       /**
//        * container’s width divided by its height,
//        * the rectangular base of the frustum can be expanded to fit perfectly into the container.
//        */
  aspectRatio = 1,
  near = 0.1,
  far = 100,
  position = { x: 0, y: 0, z: 0 },
}) => {
  const perspectiveCamera = new PerspectiveCamera(fov, aspectRatio, near, far);

  perspectiveCamera.position.x = position.x;
  perspectiveCamera.position.y = position.y;
  perspectiveCamera.position.z = position.z;

    // update the camera's frustum
    perspectiveCamera.updateProjectionMatrix();

  // console.log({ perspectiveCamera });

  return perspectiveCamera;
};

export default createCamera;
