/* eslint-disable import/no-unused-modules */
// ------------------------------------------------------------
// TYPES
// ------------------------------------------------------------
/** @typedef {import("./types.js").CubeState} CubeState */

/**
 * Callback run after pivot swap completes; updates quick stack/partition.
 * @param {CubeState} cubeState
 * @param {number} pivotPos
 * @param {number} partLo
 * @param {number} partHi
 * @param {number} partJ
 * @param {number} partPivotIndex
 * @param {number} partPivotValue
 * @param {Array<[number, number]>} stack
 */
const onQuickPivotPlaced = (
  cubeState,
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
};

export default onQuickPivotPlaced;
