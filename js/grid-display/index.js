
// $FlowFixMe
import { fromEvent } from "rxjs";

/* eslint-env browser */



export function gridDisplay()  {
  function displayGrid(
    a ,
    cols ,
    rows ,
    containerId ,
    showWorking ,
  )  {
    const BubbleSort = getGridContainer(containerId);
    while (BubbleSort.firstChild) {
      BubbleSort.removeChild(BubbleSort.firstChild);
    }
    const cellWidth = BubbleSort.clientWidth / cols;
    const cellHeight = BubbleSort.clientHeight / rows;
    const matrix = this.getMatrix(a, cols);
    const matrixXY = this.getMatrixXYValues(matrix, cellWidth, cellHeight);
    // Make the basic grid container
    const grid = document.createElement("ul");
    BubbleSort.appendChild(grid);
    matrixXY.forEach((row) => {
      row.forEach((cell) => {
        const listItem = document.createElement("li");
        listItem.id = containerId + cell.id;
        const cellElement = grid.appendChild(listItem);
        const cellColour = 255 - Math.ceil(255 * cell.value);
        cellElement.style.background = `rgb(${cellColour},${cellColour},${cellColour})`;
        cellElement.style.width = cellWidth.toString() + "px";
        cellElement.style.height = cellHeight.toString() + "px";
        cellElement.style.top = cell.y + "px";
        cellElement.style.left = cell.x + "px";
      });
    });
    // Make the controls
    makeControlsDisplay(BubbleSort, showWorking);
  }

  function makeControlsDisplay(
    BubbleSort ,
    showWorking ,
  )  {
    const controls = document.createElement("div");
    controls.className = "hidden";
    controls.id = "controls";
    // makeSpeedControls(controls)
    makeShowWorkingToggleControl(controls, showWorking);
    BubbleSort.appendChild(controls);
    fromEvent(BubbleSort, "click") // eslint-disable-line no-undef
      .subscribe((event) => {
        window.requestAnimationFrame(() => {
          if (controls.className === "hidden") {
            controls.className = "active";
          } else if (controls.className === "active") {
            controls.className = "hidden";
          }
        });
      });
  }

  function makeShowWorkingToggleControl(
    controls ,
    showWorking ,
  )  {
    const showWorkingToggle = document.createElement("i");
    // controls.className = 'hidden'
    showWorkingToggle.classList.add("fa");
    if (showWorking) {
      showWorkingToggle.classList.add("fa-eye");
    } else {
      showWorkingToggle.classList.add("fa-eye-slash");
    }
    showWorkingToggle.id = "show-working-toggle";
    controls.appendChild(showWorkingToggle);
  }

  function enableShowWorkingToggleControl(config) {
    const showWorkingToggle = document.getElementById("show-working-toggle");

    fromEvent(/** @type {any} */ (showWorkingToggle), "click") // eslint-disable-line no-undef
      .subscribe((event) => {
        event.stopPropagation();
        toggleShowWorking(config);
        const target = /** @type {HTMLElement|null} */ (event.target instanceof HTMLElement ? event.target : null);
        if (config.SHOW_WORKING) {
          window.requestAnimationFrame(() => {
            target?.classList.remove("fa-eye-slash");
            target?.classList.add("fa-eye");
          });
        } else {
          window.requestAnimationFrame(() => {
            target?.classList.remove("fa-eye");
            target?.classList.add("fa-eye-slash");
          });
        }
      });
    // body
  }

  function toggleShowWorking(config )  {
    config.SHOW_WORKING = !config.SHOW_WORKING;
    config.CLICK = getClick(
      config.SHOW_WORKING,
      config.FPS,
      config.ACCELLERATION,
    );
    clearShowWorkingCellsDisplay(config.COLS, config.ROWS, config.CONTAINER_ID);
  }

  function setCurrentCellDisplayToActive(
    i ,
    containerId ,
    showWorking ,
  )  {
    if (!showWorking) {
      return;
    }
    this.setCellDisplay(i, "add", "active", containerId);
  }

  function clearActiveCellsDisplay(
    _1 ,
    _2 ,
    containerId ,
    showWorking ,
  )  {
    if (!showWorking) {
      return;
    }
    setCellDisplay(_1, "remove", "active", containerId, showWorking);
    setCellDisplay(_2, "remove", "active-min", containerId, showWorking);
    setCellDisplay(_2, "remove", "active", containerId, showWorking);
    setCellDisplay(_1, "remove", "active-min", containerId, showWorking);
  }

  function swapActiveCellsDisplay(
    _1 ,
    _2 ,
    containerId ,
    showWorking ,
  )  {
    if (!showWorking) {
      return;
    }
    setCellDisplay(_1, "remove", "active", containerId, showWorking);
    setCellDisplay(_2, "remove", "active-min", containerId, showWorking);
    setCellDisplay(_2, "add", "active", containerId, showWorking);
    setCellDisplay(_1, "add", "active-min", containerId, showWorking);
  }

  function setNewCellColour(
    movingCell ,
    newValue ,
  )  {
    // movingCell.style.opacity = newValue / 100
    // movingCell.style.background = `rgba(0,0,0,${newValue})`
    const newColour = 255 - Math.ceil(255 * newValue);
    movingCell.style.background = `rgb(${newColour},${newColour},${newColour})`;
    return movingCell;
  }

  function getMatrix(
    a ,
    cols ,
  )  {
    return a.reduce(
      (grid, currentValue, currentIndex) => {
        const lastIndex = grid.length - 1;
        grid[lastIndex].push(currentValue);
        if (!((currentIndex + 1) % cols)) {
          grid.push([]);
        }
        return grid;
      },
      [[]],
    );
  }

  function getMatrixXYValues(
    matrix ,
    cellWidth ,
    cellHeight ,
  ) {
    return matrix.map((row, currentIndex) => {
      const y = currentIndex * cellHeight;
      return row.map((cell, currentIndex) => {
        const x = currentIndex * cellWidth;
        cell.y = y;
        cell.x = x;
        return cell;
      });
    });
  }

  function setCellDisplay(
    i ,
    action ,
    className ,
    containerId ,
    showWorking ,
  )  {
    if (!showWorking) {
      return;
    }
    const currentCell = getElementById(containerId + "_" + i);
    window.requestAnimationFrame(() => {
      if (action === "add") {
        currentCell.classList.add(className);
      } else if (action === "remove") {
        currentCell.classList.remove(className);
      }
    });
  }

  function clearCellDisplay(
    i ,
    className ,
    containerId ,
  )  {
    const currentCell = getElementById(containerId + "_" + i);
    if (!currentCell) {
      throw new Error("Element " + containerId + "_ " + i + " does not exist.");
    }
    currentCell.classList.remove(className);
  }

  function random(max ) {
    const min = 0;
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function swapCells(
    a ,
    _2 ,
    _1 ,
    containerId ,
    constantTransitionSpeed ,
    maxSecondsTransitionInterval ,
    cols ,
    rows ,
  )  {
    const _1CellData = a[_1];
    const _2CellData = a[_2];
    const _1Cell = /** @type {HTMLElement|null} */ (getElementById(containerId + _1CellData.id));
    const _2Cell = /** @type {HTMLElement|null} */ (getElementById(containerId + _2CellData.id));
    if (!_1Cell || !_2Cell) {
      console.error(
        "There was a problem getting the DOM elements we want to swap...",
      );
      return Promise.resolve([]);
    }
    const transitionSpeed = this.getTransitionSpeed(
      _1CellData.x,
      _1CellData.y,
      _2CellData.x,
      _2CellData.y,
      containerId,
      constantTransitionSpeed,
      maxSecondsTransitionInterval,
      cols,
      rows,
    );
    return Promise.all([
      this.moveCell(_1Cell, _2CellData.x, _2CellData.y, transitionSpeed).then(
        (_1Cell) => {
          this.moveCellBackQuickly(_1Cell, _1CellData.x, _1CellData.y);
          this.setNewCellColour(_1Cell, _2CellData.value);
        },
      ),
      this.moveCell(_2Cell, _1CellData.x, _1CellData.y, transitionSpeed).then(
        (_2Cell) => {
          this.moveCellBackQuickly(_2Cell, _2CellData.x, _2CellData.y);
          this.setNewCellColour(_2Cell, _1CellData.value);
        },
      ),
    ]).then(() => a);
  }

  function moveCell(
    movingCell ,
    newX ,
    newY ,
    transitionSpeed ,
  )  {
    if (!movingCell.id) {
      throw new Error("movingCell() called without an element to move");
    }
    return new Promise((resolve) => {
      movingCell.addEventListener(
        "transitionend",
        function (e ) {
          // eslint-disable-line no-unused-vars
          movingCell.style.zIndex = "1";
          movingCell.removeEventListener("transitionend", resolve);
          return resolve(movingCell);
        },
        false,
      );
      requestAnimationFrame(() => {
        movingCell.style.transition = `left ${transitionSpeed}s linear, top ${transitionSpeed}s linear`;
        movingCell.style.top = `${newY}px`;
        movingCell.style.left = `${newX}px`;
        movingCell.style.zIndex = "2";
      });
    });
  }

  function getTransitionSpeed(
    currentX ,
    currentY ,
    newX ,
    newY ,
    containerId ,
    constantTransitionSpeed ,
    maxSecondsTransitionInterval ,
    cols ,
    rows ,
  )  {
    if (constantTransitionSpeed) {
      return maxSecondsTransitionInterval;
    }
    const BubbleSort = getGridContainer(containerId);
    const cellWidth = Math.ceil(BubbleSort.clientWidth / cols);
    const cellHeight = Math.ceil(BubbleSort.clientHeight / rows);
    const x = newX - currentX;
    const y = newY - currentY;
    const distance = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    const maxX = cols * cellWidth;
    const maxY = rows * cellHeight;
    const maxDistance = Math.sqrt(Math.pow(maxX, 2) + Math.pow(maxY, 2));
    const distanceFraction = distance / maxDistance;

    return maxSecondsTransitionInterval * distanceFraction;
  }

  function moveCellBackQuickly(
    movingCell ,
    oldX ,
    oldY ,
  )  {
    movingCell.style.transition = "";
    movingCell.style.top = oldY + "px";
    movingCell.style.left = oldX + "px";
    return movingCell;
  }

  function getClick(
    SHOW_WORKING ,
    FPS ,
    ACCELLERATION ,
  )  {
    if (!SHOW_WORKING) {
      return 0;
    }
    return 1000 / 2 / ACCELLERATION;
  }

  function clearShowWorkingCellsDisplay(
    COLS ,
    ROWS ,
    containerId ,
  )  {
    for (let i = 0; i < COLS * ROWS; ++i) {
      clearCellDisplay(i, "active", containerId);
      clearCellDisplay(i, "active-min", containerId);
      clearCellDisplay(i, "actively-looking", containerId);
      clearCellDisplay(i, "min", containerId);
    }
  }

  return {
    displayGrid,
    setCurrentCellDisplayToActive,
    clearActiveCellsDisplay,
    swapActiveCellsDisplay,
    setNewCellColour,
    getMatrix,
    getMatrixXYValues,
    setCellDisplay,
    random,
    swapCells,
    moveCell,
    getTransitionSpeed,
    moveCellBackQuickly,
    getClick,
    clearShowWorkingCellsDisplay,
    toggleShowWorking,
    enableShowWorkingToggleControl,
  };

  // --------------------------------- //
  // HELPERS
  // --------------------------------- //
  function getGridContainer(id )  {
    if (id) {
      try {
        return getElementById(id);
      } catch (e) {
        console.error(e);
      }
    }
    return documentBody();
  }

  function documentBody() {
    const body = document.body;
    if (!body) {
      throw new Error(`There is no document.body`);
    }
    return body;
  }
  function getElementById(id )  {
    const element = document.getElementById(id);
    if (!element) {
      throw new Error(`The element with id ${id} is not present in the DOM`);
    }
    return element;
  }
}
