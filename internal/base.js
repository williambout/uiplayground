import { Pane } from "tweakpane";
import * as EssentialsPlugin from "@tweakpane/plugin-essentials";

const options = {
  viewport: "desktop",
};

const viewport = document.querySelector("._viewport");
viewport.className = `_viewport ${options.viewport}`;

const pane = new Pane();
pane.registerPlugin(EssentialsPlugin);
pane
  .addBinding(options, "viewport", {
    options: {
      mobile: "mobile",
      desktop: "desktop",
    },
  })
  .on("change", (event) => {
    viewport.className = `_viewport ${event.value}`;
  });

const fpsGraph = pane.addBlade({
  view: "fpsgraph",
  label: "fps",
  rows: 2,
});

function render() {
  fpsGraph.begin();
  fpsGraph.end();
  requestAnimationFrame(render);
}

render();
export { pane };
