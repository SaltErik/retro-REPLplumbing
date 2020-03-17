function init() {
  const canvas = document.querySelector(`canvas`);
  if (!canvas) throw new ReferenceError(`Could not query selector "canvas"!`);

  const context = canvas.getContext('2d');
  if (!context) throw new ReferenceError(`Could not get 2D context!`)

  canvas.width = window.innerWidth;
  canvas.height = 500;
}

init();
