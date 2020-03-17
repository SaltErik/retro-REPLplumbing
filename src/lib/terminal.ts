const terminal = document.querySelector(`code`);
if (!terminal) throw new ReferenceError(`Could not query selector "code"!`);

export { terminal };
