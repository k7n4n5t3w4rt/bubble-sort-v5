// --------------------------------------------------
// HELPERS
// --------------------------------------------------
import render from "./render.js";

const animate = (
  sceneData ,
  speed ,
  scaleX ,
  scaleY ,
  scaleZ ,
  cols ,
  rows ,
  algorithm ,
)  => {
  const { stats, scene, camera, renderer, reticleStuff, cubes } = sceneData;
  // const { stats, scene, camera, renderer, reticleStuff } = sceneData;

  sceneData.renderer.setAnimationLoop(
    render(sceneData, speed, scaleX, scaleY, scaleZ, cols, rows, algorithm),
  );
  return { stats, scene, camera, renderer, reticleStuff, cubes };
};

export default animate;
