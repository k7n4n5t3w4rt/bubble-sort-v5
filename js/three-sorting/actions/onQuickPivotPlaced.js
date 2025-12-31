/** @typedef {import("./types.js").CubeState} CubeState */

/**
 * Callback run after pivot swap completes; updates quick stack/partition.
 * @param {CubeState} cubes
 * @param {number} pivotPos
 * @param {number} partLo
 * @param {number} partHi
 * @param {number} partJ
 * @param {number} partPivotIndex
 * @param {number} partPivotValue
 * @param {Array<[number, number]>} stack
 */
const onQuickPivotPlaced = (
  cubes,
  pivotPos,
  partLo,
  partHi,
  partJ,
  partPivotIndex,
  partPivotValue,
  stack,
) => {
  if (pivotPos - 1 > partLo) stack.push([partLo, pivotPos - 1]);
  if (pivotPos + 1 < partHi) stack.push([pivotPos + 1, partHi]);
  cubes.quickPartition = {
    lo: partLo,
    hi: partHi,
    i: pivotPos,
    j: partJ,
    pivotIndex: partPivotIndex,
    pivotValue: partPivotValue,
    done: true,
  };
  cubes.quickStack = stack;
};

export default onQuickPivotPlaced;

