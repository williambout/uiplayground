import { Pane } from "tweakpane";
import * as EssentialsPlugin from "@tweakpane/plugin-essentials";

const options = {
  viewport: "mobile",
};

const pane = new Pane();
pane.registerPlugin(EssentialsPlugin);
pane.addBinding(options, "viewport", {
  options: {
    mobile: "mobile",
  },
});

const fpsGraph = pane.addBlade({
  view: "fpsgraph",

  label: "fps",
  rows: 1,
});

function render() {
  fpsGraph.begin();
  fpsGraph.end();
  requestAnimationFrame(render);
}

render();
