import { terminal } from './terminal.js';
import { stdout, wipe } from './view.js';
import { conan, reuben } from './dudes.js';  // They may, in fact, be used by the eval

const parse = (string) => {
  if (string.trim() === `cls` || string === `clear`) {
    wipe();
  }
  try {
    eval(string);
  } catch (error) {
    stdout(error);
  }
};

const enter = () => {
  const index = terminal.innerText.lastIndexOf('\n');

  if (index === -1) { // No newline found
    console.dir(`Would have ran: ${terminal.innerText}`);
    parse(terminal.innerText);
  } else { // Newline found!
    const command = terminal.innerText.substring(index);
    console.dir(`Would have ran: ${command}`);
    parse(command);
  }

  terminal.innerText += `\n`;
};

const backspace = () => {
  if (!terminal.innerText.endsWith(`\n`)) {
    terminal.innerText = terminal.innerText.slice(0, -1);
  }
};

const processInput = (key) => {
  switch (key) {
    case `Enter`:
      return enter();
    case `Backspace`:
      return backspace();
    case `Alt`:
      return;
    case `Shift`:
      return;
    default:
      return terminal.innerText += `${key}`;
  }
};

export {
  processInput,
}
