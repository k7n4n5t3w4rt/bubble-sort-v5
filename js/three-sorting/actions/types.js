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
 * @property {number} [diffuseTargetRatio]
 * @property {number} [diffuseMinMaxMs]
 * @property {number} [diffuseSwapsPerTick]
 * @property {number} [diffuseNeighborRadius]
 * @property {ReturnType<typeof setTimeout>} [unsortTimeoutId]
 * @property {Function} [logFn]
 * @property {Function} [setTimeoutFn]
 * @property {Function} [clearTimeoutFn]
 * @property {Function} [setIntervalFn]
 * @property {Function} [clearIntervalFn]
 * @property {Function} [randomFn]
 * @property {Function} [nowFn]
 * @property {(cubes: any, delayMs?: number, unsortFn?: Function) => any} [scheduleUnsort]
 * @property {any[]} [quickStack]
 * @property {QuickPartition | null} [quickPartition]
 * @property {boolean} [quickInit]
 * @property {number} [gridCols]
 * @property {number} [gridRows]
 * @property {{ baseX: number, baseY: number, baseZ: number, stepY: number, stepZ: number, cols: number }} [_gridSnapMetaStatic]
 * @property {{ baseX: number, baseY: number, baseZ: number, stepY: number, stepZ: number, cols: number } | null} [_gridSnapMeta]
 */

export { };

