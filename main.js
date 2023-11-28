import { animate } from "@juliangarnierorg/anime-beta";

var border_depth1 = animate(".border.depth1", {
  opacity: [0, 1],
});
var border_depth2 = animate(".border.depth2", {
  opacity: [-3, 1],
});

var shadow_depth1 = animate(".shadow.depth1", {
  opacity: [0, 1],
});
var shadow_depth2 = animate(".shadow.depth2", {
  opacity: [-3, 1],
});

var bg_depth1 = animate(".background.depth1", {
  opacity: [0, 1],
});
var bg_depth2 = animate(".background.depth2", {
  opacity: [-3, 1],
});

var embossed_depth2 = animate(".embossed.depth2", {
  opacity: [-3, 1],
});

const depthRangeEl = document.querySelector(".depthRange");
depthRangeEl.oninput = () => {
  border_depth1.seek(bg_depth1.duration * (depthRangeEl.value / 100));
  border_depth2.seek(bg_depth1.duration * (depthRangeEl.value / 100));
  bg_depth1.seek(bg_depth1.duration * (depthRangeEl.value / 100));
  bg_depth2.seek(bg_depth1.duration * (depthRangeEl.value / 100));
  shadow_depth1.seek(bg_depth1.duration * (depthRangeEl.value / 100));
  shadow_depth2.seek(bg_depth1.duration * (depthRangeEl.value / 100));
  embossed_depth2.seek(bg_depth1.duration * (depthRangeEl.value / 100));
};
