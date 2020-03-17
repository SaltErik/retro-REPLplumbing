import { processInput } from './lib/input.js';
import { autoScroll } from './lib/view.js';

window.addEventListener(`keydown`, (event) => {
  event.preventDefault();
  processInput(event.key);
  autoScroll();
});

window.addEventListener(`keyup`, () => {
  event.preventDefault();
  autoScroll();
});
