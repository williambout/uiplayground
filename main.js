import { animate, stagger } from "@juliangarnierorg/anime-beta";

animate(".square", {
  translateX: 100,
  rotate: { from: -180 },
  duration: 1250,
  delay: stagger(65, { from: "center" }),
  ease: "inOutQuint",
  loop: true,
  alternate: true,
});
