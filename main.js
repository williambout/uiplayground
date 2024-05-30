import anime from "animejs/lib/anime.es.js";
import { pane } from "./internal/base.js";

/*
 _   _ ___________ _                                             _ 
| | | |_   _| ___ \ |                                           | |
| | | | | | | |_/ / | __ _ _   _  __ _ _ __ ___  _   _ _ __   __| |
| | | | | | |  __/| |/ _` | | | |/ _` | '__/ _ \| | | | '_ \ / _` |
| |_| |_| |_| |   | | (_| | |_| | (_| | | | (_) | |_| | | | | (_| |
 \___/ \___/\_|   |_|\__,_|\__, |\__, |_|  \___/ \__,_|_| |_|\__,_|
                            __/ | __/ |                            
                           |___/ |___/                             
*/
// Made by William Bout • @williambout

// Tweakpane
// https://cocopon.github.io/tweakpane/

// Anime
// https://animejs.com/

const border_depth1 = anime({
  targets: ".border.depth1",
  opacity: [0, 1],
  autoplay: false,
});

const border_depth2 = anime({
  targets: ".border.depth2",
  opacity: [0, 1],
  autoplay: false,
});

const shadow_depth1 = anime({
  targets: ".shadow.depth1",
  opacity: [0, 1],
  autoplay: false,
});

const shadow_depth2 = anime({
  targets: ".shadow.depth2",
  opacity: [0, 1],
  autoplay: false,
});

const bg_depth1 = anime({
  targets: ".background.depth1",
  opacity: [0, 1],
  autoplay: false,
});

const bg_depth2 = anime({
  targets: ".background.depth2",
  opacity: [0, 1],
  autoplay: false,
});

const embossed_depth2 = anime({
  targets: ".embossed.depth2",
  opacity: [0, 1],
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
    border_depth1.seek((bg_depth1.duration * event.value) / 8);
    border_depth2.seek((bg_depth1.duration * event.value) / 8);
    bg_depth1.seek((bg_depth1.duration * event.value) / 8);
    bg_depth2.seek((bg_depth1.duration * event.value) / 8);
    shadow_depth1.seek((bg_depth1.duration * event.value) / 8);
    shadow_depth2.seek((bg_depth1.duration * event.value) / 8);
    embossed_depth2.seek((bg_depth1.duration * event.value) / 8);
  });
