// --------------------------------------------------
// THREE.js
// --------------------------------------------------
import * as THREE from "three";
// --------------------------------------------------
// HELPERS
// --------------------------------------------------

export default (
  cols ,
  rows ,
  scaleXm ,
  scaleYm ,
  scaleZm ,
  scene ,
  reticleStuff ,
)  => {
  const scaleX  = scaleXm / 100;
  const scaleY  = scaleYm / 100;
  const scaleZ  = scaleZm / 100;
  //create a group and add the two cubes
  //These cubes can now be rotated / scaled etc as a group
  const pixelGridGroup = new THREE.Group();

  // Pre-generate and sort values so the grid starts "already sorted"
  // according to the comparison rule used in `actions/bubbleSort.js`:
  // swap when left > right => sorted is ascending (non-decreasing) in array order.
  const totalCells  = rows * cols;
  const sortedValues  = Array.from(
    { length: totalCells },
    () => 255 - Math.ceil(255 * Math.random()),
  ).sort((a, b) => a - b);

  const pixelGridCubes  = [];
  let valueIndex  = 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const cellColour = sortedValues[valueIndex++];
      const geometry = new THREE.BoxGeometry(scaleX, scaleY, scaleZ);

      const material = new THREE.MeshBasicMaterial({
        color: `rgb(${cellColour},${cellColour},${cellColour})`,
      });
      const cube = new THREE.Mesh(geometry, material);

      cube.position.z = j * scaleZ;
      cube.position.y = i * scaleY;
      cube.value = cellColour;
      cube.bubble_value = cellColour;
      cube.selection_value = cellColour;
      cube.castShadow = true;
      pixelGridGroup.add(cube);
      pixelGridCubes.push(cube);
    }
  }
  scene.add(pixelGridGroup);
  return { pixelGridGroup, pixelGridCubes };
};
