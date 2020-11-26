import { Color, Scene } from "three";

const createScene = ({ color = "#424242" }) => {
  const scene = new Scene();
  const sceneBgColor = new Color(color);
  scene.background = sceneBgColor;
  return scene;
};

export default createScene;
