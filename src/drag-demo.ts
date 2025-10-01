// Real-world Draggable & Resizable Widget Demo
import "./style.css";

type Draggable = {
  drag: () => void;
};
type Resizable = {
  resize: () => void;
};
type UIWidget = Draggable & Resizable;

export function showDragDemo(container: HTMLElement) {
  container.innerHTML = `
    <h2>Draggable & Resizable Widget Demo</h2>
    <div id="widget" style="width:150px;height:80px;background:#eee;border:1px solid #888;display:flex;align-items:center;justify-content:center;cursor:move;position:absolute;left:120px;top:120px;">
      Drag or resize me!
    </div>
    <p id="log"></p>
  `;
  const widget = document.getElementById("widget") as HTMLDivElement;
  const log = document.getElementById("log") as HTMLParagraphElement;
  // Add resize handle dynamically
  const handle = document.createElement("div");
  handle.id = "resize-handle";
  handle.style.position = "absolute";
  handle.style.right = "0";
  handle.style.bottom = "0";
  handle.style.width = "16px";
  handle.style.height = "16px";
  handle.style.background = "#888";
  handle.style.cursor = "nwse-resize";
  widget.appendChild(handle);
  if (!widget || !log || !handle) return;

  const textBox: UIWidget = {
    drag: () => {
      log.textContent = "Widget dragged!";
      widget.style.background = "#cceeff";
      setTimeout(() => (widget.style.background = "#eee"), 300);
    },
    resize: () => {
      log.textContent = "Widget resized!";
      widget.style.background = "#ffeedd";
      setTimeout(() => (widget.style.background = "#eee"), 300);
    },
  };

  // Drag logic
  let isDragging = false;
  let dragOffsetX = 0;
  let dragOffsetY = 0;
  widget.addEventListener("mousedown", (e) => {
    if (e.target === handle || isResizing) return; // Don't start drag if resizing
    isDragging = true;
    dragOffsetX = e.clientX - widget.offsetLeft;
    dragOffsetY = e.clientY - widget.offsetTop;
    document.body.style.userSelect = "none";
  });
  document.addEventListener("mousemove", (e) => {
    if (isDragging && !isResizing) {
      widget.style.left = `${e.clientX - dragOffsetX}px`;
      widget.style.top = `${e.clientY - dragOffsetY}px`;
    }
  });
  document.addEventListener("mouseup", () => {
    if (isDragging) {
      isDragging = false;
      document.body.style.userSelect = "";
      textBox.drag();
    }
  });

  // Resize logic
  let isResizing = false;
  let startWidth = 0;
  let startHeight = 0;
  let startX = 0;
  let startY = 0;
  handle.addEventListener("mousedown", (e) => {
    e.stopPropagation();
    isResizing = true;
    startWidth = widget.offsetWidth;
    startHeight = widget.offsetHeight;
    startX = e.clientX;
    startY = e.clientY;
    document.body.style.userSelect = "none";
  });
  document.addEventListener("mousemove", (e) => {
    if (isResizing) {
      widget.style.width = `${startWidth + (e.clientX - startX)}px`;
      widget.style.height = `${startHeight + (e.clientY - startY)}px`;
    }
  });
  document.addEventListener("mouseup", () => {
    if (isResizing) {
      isResizing = false;
      document.body.style.userSelect = "";
      textBox.resize();
    }
  });
}
