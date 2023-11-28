import { animate } from "@juliangarnierorg/anime-beta";
import { pane } from "./internal/base.js";

var border_depth1 = animate(".border.depth1", {
  opacity: [0, 1],
  autoplay: false,
});
var border_depth2 = animate(".border.depth2", {
  opacity: [-3, 1],
  autoplay: false,
});

var shadow_depth1 = animate(".shadow.depth1", {
  opacity: [0, 1],
  autoplay: false,
});
var shadow_depth2 = animate(".shadow.depth2", {
  opacity: [-3, 1],
  autoplay: false,
});

var bg_depth1 = animate(".background.depth1", {
  opacity: [0, 1],
  autoplay: false,
});
var bg_depth2 = animate(".background.depth2", {
  opacity: [-3, 1],
  autoplay: false,
});

var embossed_depth2 = animate(".embossed.depth2", {
  opacity: [-3, 1],
  autoplay: false,
});

pane
  .addBlade({
    view: "slider",
    label: "depth",
    min: 0,
    max: 1,
    value: 0,
  })
  .on("change", (event) => {
    border_depth1.seek(bg_depth1.duration * event.value);
    border_depth2.seek(bg_depth1.duration * event.value);
    bg_depth1.seek(bg_depth1.duration * event.value);
    bg_depth2.seek(bg_depth1.duration * event.value);
    shadow_depth1.seek(bg_depth1.duration * event.value);
    shadow_depth2.seek(bg_depth1.duration * event.value);
    embossed_depth2.seek(bg_depth1.duration * event.value);
  });
