import React, { useEffect, useRef, useState } from "react";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

// import { RoughnessMipmapper } from "three/examples/jsm/utils/RoughnessMipmapper.js";

const BottleShip = (_) => {
  const canvasMount = useRef(null);
  // OBJECT / MODEL
  let bottleShip; // Well, not a real battleShip!
  let ambientLight = new THREE.AmbientLight(0x404040, 3);
  let directionLight = new THREE.DirectionalLight(0xffffff, 3);
  let pointLight = new THREE.PointLight(0x404040, 3);
  // SCENE
  let scene = new THREE.Scene();
  // CAMERA
  let camera = new THREE.PerspectiveCamera(
    15,
    window.innerWidth / window.innerHeight,
    0.1,
    3000
  );
  //RENDERER
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
  });
  // LOADER - GLTF
  const gltfLoader = new GLTFLoader();
  // MOUSE CONTROLS
  const controls = new OrbitControls(camera, renderer.domElement);

  const [light, setLight] = useState("");

  const handleLightSwitch = (event) => {
    //LIGHTS
    let eventTargetValue = event.target.value;
    setLight(eventTargetValue);
  };

  useEffect(_ => {
    // use ref as a mount point of the Three.js scene instead of the document.body
    canvasMount.current.appendChild(renderer.domElement);

    camera.position.set(-8, 3, 1900);

    renderer.setSize(1000, 450);
    renderer.setPixelRatio(window.devicePixelRatio);

    // switch (eventTargetValue) {
    //   case "a":
    ambientLight && ambientLight.position.set(10, 10, 100);
    scene.add(ambientLight);
    //   break;
    // case "d":
    directionLight && directionLight.position.set(10, 10, 100);
    scene.add(directionLight);
    //   break;
    // case "p":
    pointLight && pointLight.position.set(50, 50, 50);
    scene.add(pointLight);
    //     break;
    //   default:
    //     break;
    // }

    gltfLoader.load("assets/ship_in_a_bottle/scene.gltf", (gltf) => {
      scene.add(gltf.scene);
      canvasMount.current.bottleShip = gltf.scene.children[0];
      animate();
    });

    const render = (_) => {
      renderer.render(scene, camera);
    };

    const onWindowResize = (_) => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      if (window.innerWidth > 900) render();
    };

    controls.addEventListener("change", render); // use if there is no animation loop
    controls.minDistance = 800;
    controls.maxDistance = 1900;
    controls.target.set(0, 0, -0.2);
    controls.update();

    window.addEventListener("resize", onWindowResize, false);

    const animate = (_) => {
      requestAnimationFrame(animate);
      canvasMount.current.bottleShip.rotation.z += 0.0025;
      renderer.render(scene, camera);
    };

    render();

    console.log("UE", { scene });

    return (_) => {
      renderer.dispose();
    };
  }, []);

  return (
    <>
      <div ref={canvasMount} />
      <FormControl>
        <InputLabel id="demo-simple-select-label">Lights</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={light}
          onChange={handleLightSwitch}
        >
          <MenuItem value={"a"}>Ambient Light</MenuItem>
          <MenuItem value={"d"}>Directional Light</MenuItem>
          <MenuItem value={"p"}>Point Light</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

export default BottleShip;
