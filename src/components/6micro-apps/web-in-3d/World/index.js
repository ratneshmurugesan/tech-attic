// // BASICS
// // mesh = geometry + material
// // webgl-renderer [dpr, size] = scene + camera [fov, aspect, near, far]
// // container = ( webgl-renderer )

// 1 unit=1 meter

import React, { useEffect, useRef } from "react";
import createCamera from "./components/camera";
import createCube from "./components/cube";
import createScene from "./components/scene";
import { createDLight } from "./components/lights";

import createRenderer from "./systems/renderer";
// import Resizer from "./systems/resizer";

import "./index.scss";

const World = (_) => {
  const threedview = useRef(null);

  useEffect(
    (_) => {
      const container = threedview && threedview.current; // need css width and height

      const cameraProps = {
        fov: 51,
        aspectRatio: container.clientWidth / container.clientHeight,
        near: 0.2, //  objects closer to the camera lesser than 20 centimeters will not be visible.
        far: 2001, // can see for a distance of two thosand and one meters.
        position: {
          x: 0,
          y: 0,
          z: 10,
        },
      };

      const cubeYellowProps = {
        geometry: {
          width: 1, // one meter long width
          height: 1, // one meter long height
          depth: 1, // one meter long depth
        },
        position: {
          x: 0,
          y: 0,
          z: 0,
        },
        rotation: null,
        color: "yellow",
        wireframe: false,
        wireframeLinewidth: 5,
      };

      const cubeRedProps = {
        geometry: {
          width: 1,
          height: 1,
          depth: 1,
        },
        position: {
          x: -1,
          y: -1,
          z: 0,
        },
        rotation: null,
        color: "red",
        wireframe: false,
        wireframeLinewidth: 1,
      };

      const cubePurpleProps = {
        geometry: {
          width: 1,
          height: 1,
          depth: 1,
        },
        position: {
          x: 0,
          y: 1,
          z: 0,
        },
        scale: {
          x: 1.25,
          y: 1.25,
          z: 1.25,
        },
        rotation: {
          x: -60,
          y: -45,
          z: 60,
        },
        color: "purple",
        wireframe: false,
        wireframeLinewidth: 1,
      };

      const cubeGreenProps = {
        geometry: {
          width: 1,
          height: 1,
          depth: 1,
        },
        position: {
          x: 1,
          y: -1,
          z: 0,
        },
        rotation: null,
        color: "green",
        wireframe: false,
        wireframeLinewidth: 1,
      };

      const sceneProps = {
        color: "blue",
      };

      const dLightProps = {
        color: "white",
        intensity: 4,
        position: {
          x: 0,
          y: 10,
          z: 10,
        },
      };

      const camera = createCamera(cameraProps);
      const yellowCube = createCube(cubeYellowProps);
      const redCube = createCube(cubeRedProps);
      const greenCube = createCube(cubeGreenProps);
      const purpleCube = createCube(cubePurpleProps);

      const scene = createScene(sceneProps);
      const renderer = createRenderer(container);
      const dLight = createDLight(dLightProps);

      yellowCube.add(purpleCube);
      scene.add(dLight, yellowCube, redCube, greenCube);

      renderer.render(scene, camera);

      container.append(renderer.domElement);

      // const resizer = new Resizer(container, camera, renderer);

      // console.log({
      // camera,
      // scene,
      // renderer,
      // threedview,
      // container,
      // resizer
      // });
    },
    [threedview]
  );

  return <div ref={threedview} id={"threedview"}></div>;
};

export default World;
