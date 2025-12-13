//------------------------------------------------------------------
// IMPORT: TESTY
//------------------------------------------------------------------
import { test, should } from "../server/testy.js";
//------------------------------------------------------------------
// IMPORT: THREE + FUNCTION UNDER TEST
//------------------------------------------------------------------
import * as THREE from "three";
import pixelGrid from "../js/three-bubble-sort/actions/pixelGrid.js";

test("pixelGrid() starts already sorted by bubble_value (ascending)", () => {
  const cols = 6;
  const rows = 4;
  const scaleX = 10;
  const scaleY = 10;
  const scaleZ = 10;
  const scene = new THREE.Scene();

  const { pixelGridCubes } = pixelGrid(
    cols,
    rows,
    scaleX,
    scaleY,
    scaleZ,
    scene,
    {},
  );

  should(pixelGridCubes.length).be.exactly(rows * cols);

  for (let i = 0; i < pixelGridCubes.length - 1; i++) {
    const a = pixelGridCubes[i].bubble_value;
    const b = pixelGridCubes[i + 1].bubble_value;
    should(a).be.belowOrEqual(b);
  }
});


