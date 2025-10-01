// Simple client-side router for feature demos

import { showInterfacesDemo } from "./interfaces";
import { showTypesDemo } from "./types";
import { showGenericsDemo } from "./generics";
import { showEnumsDemo } from "./enums";
import { showDragDemo } from "./drag-demo";

export function route() {
  const app = document.getElementById("app");
  if (!app) return;

  const hash = window.location.hash.replace("#/", "");
  switch (hash) {
    case "interfaces":
      showInterfacesDemo(app);
      break;
    case "types":
      showTypesDemo(app);
      break;
    case "generics":
      showGenericsDemo(app);
      break;
    case "enums":
      showEnumsDemo(app);
      break;
    case "drag":
      showDragDemo(app);
      break;
    default:
      app.innerHTML = `<h2>Welcome! Choose a TypeScript feature:</h2>
        <ul>
          <li><a href="#/interfaces">Interfaces</a></li>
          <li><a href="#/types">Types</a></li>
          <li><a href="#/generics">Generics</a></li>
          <li><a href="#/enums">Enums</a></li>
          <li><a href="#/drag">Draggable & Resizable Widget</a></li>
        </ul>`;
  }
}

window.addEventListener("hashchange", route);
