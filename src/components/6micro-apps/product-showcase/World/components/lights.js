// PBR - Lighting and materials - involves calculating, in a physically correct manner, how light reacts with surfaces.
// Physically correct lighting means calculating how light fades with distance from a light source (attenuation) using real-world physics equations.
// Well crafted physically based materials look great in all lighting conditions.

// Direct lighting
// InDirect lighting - mostly Ambient lights - faking indirect lighting - indirect lighting is much harder to simulate since doing so
// requires calculating an infinite number of light rays bouncing forever from all the surfaces in the scene.
// calculating a few thousand light rays, each making just a couple of bounces (raytracing), it still generally takes too long to calculate in real-time.

/*
DirectionalLight => Sunlight
PointLight => Light Bulbs
RectAreaLight => Strip lighting or bright windows
SpotLight => Spotlights
 */

//Shadows are Disabled By Default

// DirectionalLight don’t fade with distance
// DirectionalLight shines from light.position, to light.target.position

import { DirectionalLight } from "three";

const createDLight = ({ color, intensity, position: { x, y, z } }) => {
  const dLight = new DirectionalLight(color, intensity);
  dLight.position.x = x;
  dLight.position.y = y;
  dLight.position.z = z;

  //   console.log({ color, intensity });
  return dLight;
};

export { createDLight };
