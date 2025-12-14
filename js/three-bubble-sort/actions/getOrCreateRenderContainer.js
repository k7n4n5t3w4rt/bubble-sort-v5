export default () => {
  const bubbleSort = document.getElementById("bubble-sort");
  if (!bubbleSort) return null;

  let container = document.getElementById("ar-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "ar-container";
    bubbleSort.appendChild(container);
  }

  // Ensure visibility and sizing (CSS defaults to display:none).
  container.style.display = "block";
  container.style.position = "absolute";
  container.style.top = "0";
  container.style.left = "0";
  container.style.width = "100%";
  container.style.height = "100%";

  return container;
};

