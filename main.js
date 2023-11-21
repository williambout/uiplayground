import {
  animate,
  createTimeline,
  utils,
  stagger,
  svg,
  spring,
} from "@juliangarnierorg/anime-beta";
import { inspect } from "@juliangarnierorg/anime-beta/lib/gui";

const staggerVisualizerEl = document.querySelector(".stagger-visualizer");
const fragment = document.createDocumentFragment();
const grid = [24, 24];
const col = grid[0];
const row = grid[1];
const numberOfElements = col * row;

for (let i = 0; i < numberOfElements; i++) {
  fragment.appendChild(document.createElement("div"));
}

staggerVisualizerEl.appendChild(fragment);

const staggersAnimation = createTimeline({
  defaults: {
    ease: "inOutSine",
    delay: stagger(50),
  },
  loop: true,
})
  .add(".stagger-visualizer div", {
    translateX: [
      { to: stagger("-.1rem", { grid, from: "center", axis: "x" }) },
      { to: stagger(".1rem", { grid, from: "center", axis: "x" }) },
    ],
    translateY: [
      { to: stagger("-.1rem", { grid, from: "center", axis: "y" }) },
      { to: stagger(".1rem", { grid, from: "center", axis: "y" }) },
    ],
    backgroundColor: { from: "teal" },
    duration: 1000,
    scale: 0.5,
    delay: stagger(100, { grid, from: "center" }),
  })
  .add(".stagger-visualizer div", {
    translateX: () => utils.random(-10, 10),
    translateY: () => utils.random(-10, 10),
    delay: stagger(8, { from: "last" }),
  })
  .add(".stagger-visualizer div", {
    translateX: stagger(".25rem", { grid, from: "center", axis: "x" }),
    translateY: stagger(".25rem", { grid, from: "center", axis: "y" }),
    rotate: 0,
    scaleX: 4,
    scaleY: 0.25,
    delay: stagger(4, { from: "center" }),
  })
  .add(".stagger-visualizer div", {
    rotate: stagger([180, 0], { grid, from: "center" }),
    delay: stagger(50, { grid, from: "center" }),
  })
  .add(".stagger-visualizer div", {
    backgroundColor: "teal",
    translateX: 0,
    translateY: 0,
    scale: 0.5,
    scaleX: 1,
    rotate: 0,
    duration: 1000,
    delay: stagger(100, { grid, from: "center" }),
  })
  .add(".stagger-visualizer div", {
    scaleY: 1,
    scale: 1,
    delay: stagger(20, { grid, from: "center" }),
  })
  .init();
// inspect(staggersAnimation);
