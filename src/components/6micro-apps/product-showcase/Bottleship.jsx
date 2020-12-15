import React, { useEffect, useRef } from "react";

import {
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
  DirectionalLight,
} from "three";

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const BottleShip = (_) => {
  const canvasMount = useRef(null);

  useEffect((_) => {
    (async (_) => {
      try {
        let directionLight = new DirectionalLight(0xffffff, 3);
        // SCENE
        let scene = new Scene();
        // CAMERA
        let camera = new PerspectiveCamera(
          15, // AKA Field of View
          window.innerWidth / window.innerHeight,
          0.1, // the near clipping plane
          3000 // the far clipping plane
        );
        //RENDERER
        const renderer = new WebGLRenderer({
          antialias: true,
          alpha: true,
        });
        // LOADER - GLTF
        const gltfLoader = new GLTFLoader();
        // MOUSE CONTROLS
        const controls = new OrbitControls(camera, renderer.domElement);
        canvasMount.current.appendChild(renderer.domElement);

        camera.position.set(-8, 3, 1900);

        renderer.setSize(1000, 450);
        renderer.setPixelRatio(window.devicePixelRatio);

        directionLight && directionLight.position.set(10, 10, 100);
        scene.add(directionLight);

        const animate = (_) => {
          requestAnimationFrame(animate);
          if (
            canvasMount &&
            canvasMount.current &&
            canvasMount.current.bottleShip
          ) {
            canvasMount.current.bottleShip.rotation.z += 0.0025;
          }
          renderer.render(scene, camera);
        };

        const loadedData = await gltfLoader.loadAsync(
          "assets/ship_in_a_bottle/scene.gltf"
        );

        scene.add(loadedData.scene); // Add the Mesh to the Scene
        // if (
        //   canvasMount &&
        //   canvasMount.current &&
        //   canvasMount.current.bottleShip
        // ) {
        canvasMount.current.bottleShip = loadedData.scene.children[0];
        // }
        animate();

        const render = (_) => {
          renderer.render(scene, camera);
        };

        controls.addEventListener("change", render); // use if there is no animation loop
        controls.minDistance = 700;
        controls.maxDistance = 1900;
        controls.target.set(0, 0, -0.2);
        controls.update();

        controls.current = { render };
        return (_) => {
          console.log("renderer disposed");
          renderer.dispose();
        };
      } catch (err) {
        console.log("product-showcase", err);
      }
    })();
  }, []);

  return (
    <>
      <div key={"3d"} ref={canvasMount} />
      <h2><strong>3D objects takes a little more time to load... </strong></h2>
    </>
  );
};

export default BottleShip;
