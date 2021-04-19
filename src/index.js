import { slider } from "./scripts/slider";
import { fetchResource } from "./scripts/resource";
import "./styles/main.scss";

window.addEventListener("DOMContentLoaded", () => {
  fetchResource();
});

//no-cors returns Response type: "opaque" with empty body
