import { processInput } from "./lib/input.js";
import { autoScroll } from "./lib/view.js";

window.addEventListener(`keydown`, (event: KeyboardEvent) => {
  event.preventDefault();
  processInput(event.key);
  autoScroll();
});

window.addEventListener(`keyup`, (event: KeyboardEvent) => {
  event.preventDefault();
  autoScroll();
});
