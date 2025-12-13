// @flow

const shuffleInPlace = (
  arr /*: Array<any> */,
  random /*: () => number */,
) /*: Array<any> */ => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
  return arr;
};

const setCubeGreyscale = (cube /*: any */, v /*: number */) /*: void */ => {
  if (
    cube &&
    cube.material &&
    cube.material.color &&
    typeof cube.material.color.setRGB === "function"
  ) {
    const f = Math.max(0, Math.min(255, v)) / 255;
    cube.material.color.setRGB(f, f, f);
    return;
  }

  if (
    cube &&
    cube.material &&
    cube.material.color &&
    typeof cube.material.color.setStyle === "function"
  ) {
    cube.material.color.setStyle(`rgb(${v},${v},${v})`);
  }
};

/**
 * Randomize bubble values (and color) so the grid is no longer sorted.
 *
 * Designed to be fast-testable by injecting `random`.
 */
const unsort = (
  cubes /*: any */,
  random /*: () => number */ = Math.random,
) /*: any */ => {
  if (!cubes || !Array.isArray(cubes.pixelGrid)) return cubes;

  const values = cubes.pixelGrid.map((c) => c && c.bubble_value);
  shuffleInPlace(values, random);

  for (let i = 0; i < cubes.pixelGrid.length; i++) {
    const cube = cubes.pixelGrid[i];
    const v = values[i];
    if (cube) {
      cube.bubble_value = v;
      setCubeGreyscale(cube, v);
    }
  }

  return cubes;
};

export default unsort;

/**
 * Schedule unsort to run after a delay. Timer functions are injectable for tests.
 */
export const scheduleUnsort = (
  cubes /*: any */,
  {
    delayMs = 10_000,
    setTimeoutFn = setTimeout,
    clearTimeoutFn = clearTimeout,
    unsortFn,
  } /*: any */ = {},
) /*: any */ => {
  if (!cubes) return null;

  if (cubes.unsortTimeoutId != null && typeof clearTimeoutFn === "function") {
    clearTimeoutFn(cubes.unsortTimeoutId);
  }

  // Note: keep scheduling simple; caller can inject setTimeout for tests.
  // $FlowFixMe - setTimeout return types vary across environments
  cubes.unsortTimeoutId = setTimeoutFn(() => {
    if (typeof unsortFn === "function") {
      unsortFn(cubes);
    } else {
      unsort(cubes);
    }
  }, delayMs);

  return cubes.unsortTimeoutId;
};

