import { tns } from "../../node_modules/tiny-slider/src/tiny-slider";

var slider = tns({
  container: ".my-slider",
  items: 1,
  controls: false,
  loop: true,
  autoplayButtonOutput: false,
  navPosition: "botton",
  lazyload: true,
  lazyloadSelector: ".tns-lazy",
  swipeAngle: false,
  autoplay: true,
});

export { slider };
