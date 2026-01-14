/* eslint-disable import/no-unused-modules */
/**
 * Shared typedefs for sorting visuals.
 */

/**
 * @typedef {Object} Cube
 * @property {number} value
 * @property {number} bubble_value
 * @property {number} selection_value
 * @property {{ x: number, y: number, z: number }} position
 * @property {{ color?: { setRGB?: Function, setStyle?: Function } }} [material]
 * @property {number} gridCols
 */

/**
 * @typedef {Object} QuickPartition
 * @property {number} lo
 * @property {number} hi
 * @property {number} i
 * @property {number} j
 * @property {number} pivotIndex
 * @property {number} pivotValue
 * @property {boolean} done
 */

/**
 * Runtime state for the sorting visualizations.
 * Many fields are optional and set lazily by different algorithms or phases.
 *
 * @typedef {Object} CubeState
 * @property {Cube[]} pixelGrid
 * @property {boolean} active
 * @property {boolean} moving
 * @property {boolean} [diffusing]
 * @property {number} [currentIndex]
 * @property {number} [sortRunId]
 * @property {number} [sortStartMs]
 * @property {number} [sortEndMs]
 * @property {number} [unsortPauseMs]
 * @property {number} [diffuseSwapsPerTick]
 * @property {number} [diffuseNeighborRadius]
 * @property {(ReturnType<typeof setTimeout>|null)} [unsortTimeoutId]
 * @property {number} [gridCols]
 * @property {number} [gridRows]
 *
 * // Bubble-sort specific optional state
 * @property {boolean} [passHadSwap]
 * @property {number} [passEndIndex]
 * @property {number} [lastSwapIndex]
 * @property {number} [swapCount]
 *
 * // Unsort/diffusion internals
 * @property {number} [diffuseRunToken]
 * @property {Uint16Array} [diffuseValuesBuffer]
 * @property {{ bit: Uint32Array }} [diffuseInversionScratch]
 */

/**
 * @callback AnimeRunner
 * A function that starts an animation and returns an animation instance.
 * Compatible with anime.js and test stubs.
 * @param {any} opts
 * @returns {{ finished?: PromiseLike<unknown> } | any}
 */

export {};
