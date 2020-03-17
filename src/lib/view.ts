import { terminal } from "./terminal.js";

const autoScroll = () => {
  if (!terminal) throw new ReferenceError(`Terminal is null!`);
  terminal.scrollIntoView({ block: "end" });
};

const wipe = () => {
  if (!terminal) throw new ReferenceError(`Terminal is null!`);
  terminal.innerText = ``;
};

const stdout = (text: string) => {
  if (!terminal) throw new ReferenceError(`Terminal is null!`);
  terminal.innerText += `\n${text}`;
};

export { autoScroll, wipe, stdout };
