import { WebGL1Renderer } from "three";

const createRenderer = ({clientWidth, clientHeight}) => {
  const renderer = new WebGL1Renderer();
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(clientWidth, clientHeight);
  // turn on the physically correct lighting model
  renderer.physicallyCorrectLights = true; // attenuation related
  return renderer;
};

export default createRenderer;
