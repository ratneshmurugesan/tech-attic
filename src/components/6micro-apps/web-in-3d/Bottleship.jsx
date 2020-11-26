import React, {
  useEffect,
  useRef,
  //  useState
} from "react";

// import InputLabel from "@material-ui/core/InputLabel";
// import MenuItem from "@material-ui/core/MenuItem";
// import FormControl from "@material-ui/core/FormControl";
// import Select from "@material-ui/core/Select";

import {
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
  // AmbientLight,
  DirectionalLight,
  // PointLight,
  // GLTFLoader,
} from "three";

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

// import { RoughnessMipmapper } from "three/examples/jsm/utils/RoughnessMipmapper.js";

const BottleShip = (_) => {
  const canvasMount = useRef(null);
  // const controls = useRef(null);

  // const [light, setLight] = useState("");

  // const handleLightSwitch = (event) => {
  //   let eventTargetValue = event.target.value;

  //   let selectedLight;

  //   //LIGHTS
  //   switch (eventTargetValue) {
  //     case "a":
  //       let ambientLight = new AmbientLight(0x404040, 3);
  //       ambientLight.position.set(10, 10, 100);
  //       selectedLight = ambientLight;
  //       break;
  //     case "d":
  //       let directionLight = new DirectionalLight(0xffffff, 3);
  //       directionLight && directionLight.position.set(10, 10, 100);
  //       selectedLight = directionLight;
  //       break;
  //     case "p":
  //       let pointLight = new PointLight(0x404040, 30);
  //       pointLight && pointLight.position.set(50, 50, 50);
  //       selectedLight = pointLight;
  //       break;
  //     default:
  //       break;
  //   }
  //   controls && controls.current && controls.current.render();
  //   setLight(selectedLight);
  // };

  // useEffect(
  //   (_) => {
  // // OBJECT / MODEL
  // let ambientLight = new AmbientLight(0x404040, 3);
  // let directionLight = new DirectionalLight(0xffffff, 3);
  // let pointLight = new PointLight(0x404040, 30);
  // switch (light) {
  //   case "a":
  //     ambientLight && ambientLight.position.set(10, 10, 100);
  //     scene.add(ambientLight);
  //     break;
  //   case "d":
  //     directionLight && directionLight.position.set(10, 10, 100);
  //     scene.add(directionLight);
  //     break;
  //   case "p":
  //     pointLight && pointLight.position.set(50, 50, 50);
  //     scene.add(pointLight);
  //     break;
  //   default:
  //     break;
  // }
  //   },
  //   [ambientLight, directionLight, pointLight, light, scene]
  // );

  useEffect(
    (_) => {
      (async (_) => {
        // // OBJECT / MODEL
        // let ambientLight = new AmbientLight(0x404040, 3);
        let directionLight = new DirectionalLight(0xffffff, 3);
        // let pointLight = new PointLight(0x404040, 30);
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

        // scene.add(light);

        const animate = (_) => {
          requestAnimationFrame(animate);
          canvasMount.current.bottleShip.rotation.z += 0.0025;
          renderer.render(scene, camera);
        };

        const loadedData = await gltfLoader.loadAsync(
          "assets/ship_in_a_bottle/scene.gltf"
        );

        console.log("loadedData", loadedData);
        scene.add(loadedData.scene); // Add the Mesh to the Scene
        canvasMount.current.bottleShip = loadedData.scene.children[0];
        animate();

        const render = (_) => {
          renderer.render(scene, camera);
        };

        // const onWindowResize = (_) => {
        //   camera.aspect = window.innerWidth / window.innerHeight;
        //   camera.updateProjectionMatrix();
        //   renderer.setSize(window.innerWidth, window.innerHeight);
        //   render();
        // };

        controls.addEventListener("change", render); // use if there is no animation loop
        controls.minDistance = 700;
        controls.maxDistance = 1900;
        controls.target.set(0, 0, -0.2);
        controls.update();

        // window.addEventListener("resize", onWindowResize, false);
        controls.current = { render };

        console.log("UE", { rDom: renderer.domElement });
      })();

      // return (_) => {
      //   renderer.dispose();
      // };
    },
    [
      // camera,
      // controls,
      // gltfLoader,
      // renderer,
      // scene,
      // light,
    ]
  );

  return (
    <>
      {/* three.js will create a canvas for us */}
      <div key={"3d"} ref={canvasMount} />
      {/* <FormControl>
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
      </FormControl> */}
    </>
  );
};

export default BottleShip;
