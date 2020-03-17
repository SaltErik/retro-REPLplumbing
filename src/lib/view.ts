import { terminal } from './terminal.js';

const autoScroll = () => {
  terminal.scrollIntoView({ block: "end" });
};

const wipe = () => {
  terminal.innerText = ``;
};

const stdout = (text) => {
  terminal.innerText += `\n${text}`;
};

export {
  autoScroll,
  wipe,
  stdout,
}
