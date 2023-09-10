const inputEl = document.querySelector('.header-search');
const line = 'search query ...';
const speed = 200;
let i = 0;

export function ticker() {
  if (i < line.length) {
    i += 1;
    inputEl.placeholder = line.substring(0, i);
  } else {
    inputEl.placeholder = ' ';
    i = 0;
  }
  setTimeout(ticker, speed);
}
