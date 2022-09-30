import 'normalize.css';

// formulas from https://css-tricks.com/converting-color-spaces-in-javascript/
const userInput = document.getElementById('hex');
const convert = document.getElementById('convert');
const result = document.getElementById('result');
const reset = document.getElementById('reset');

const regex = /^(#)?[a-fA-F0-9]{3}$|^(#)?[a-fA-F0-9]{4}$|^(#)?[a-fA-F0-9]{6}$|^(#)?[a-fA-F0-9]{8}$/;

function calculateHSL(inp) {
  // first check hex format is right, else return
  const isHex = regex.test(inp);
  if (!isHex) throw new Error(`${inp} not valid (╯°□°）╯︵ ┻━┻`);
  // strip the #
  const hex = inp.replace('#', '');
  // get input length
  const hexLength = hex.length;

  // check if it has alpha channel
  const hasAlpha = hexLength === 4 || hexLength === 8;

  // hex to rgb (add '0x' in front and convert to Int to get decimal from haxdecimals 😉)
  let r;
  let g;
  let b;
  let a;

  // check which length
  if (hexLength === 6 || hexLength === 8) {
    r = +`0x${hex[0]}${hex[1]}`;
    g = +`0x${hex[2]}${hex[3]}`;
    b = +`0x${hex[4]}${hex[5]}`;
    if (hasAlpha) a = +`0x${hex[6]}${hex[7]}`;
  } else if (hexLength === 3 || hexLength === 4) {
    r = +`0x${hex[0]}${hex[0]}`;
    g = +`0x${hex[1]}${hex[1]}`;
    b = +`0x${hex[2]}${hex[2]}`;
    if (hasAlpha) a = +`0x${hex[3]}${hex[3]}`;
  } else throw new Error(`${inp} not valid (╯°□°）╯︵ ┻━┻`);

  // convert rgb to hsl:
  // 1. divide by 255
  r /= 255;
  g /= 255;
  b /= 255;
  if (hasAlpha) a = (a / 255).toFixed(2);

  // 2. get max, min, and difference between max and min
  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);
  const delta = max - min;

  // 3. calculate Hue
  let h;
  // no difference between channels
  if (delta === 0) h = 0;
  // formulas for each channel
  else if (max === r) h = ((g - b) / delta) % 6;
  else if (max === g) h = (b - r) / delta + 2;
  else if (max === b) h = (r - g) / delta + 4;
  // get degrees
  h = Math.round(h * 60);
  // only positives under 360
  if (h < 0) h += 360;

  // 4. calculate Lightness
  let l = (max + min) / 2;

  // 5. calculate Saturation
  let s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

  // L and S to hundreds (for percent)
  l = +(l * 100).toFixed(0);
  s = +(s * 100).toFixed(0);

  // 🚀 out hsl (or hsla) formatted for css
  if (hasAlpha) return `hsla(${h}, ${s}%, ${l}%, ${a})`;
  return `hsl(${h}, ${s}%, ${l}%)`;
}

convert.addEventListener('click', () => {
  const output = userInput.value
    // strip commas, spaces, newlines, empty, etc.
    .split(',')
    .map((h) => h.replace(/ /g, ''))
    .map((h) => h.replace(/\n/g, ''))
    .filter((h) => h !== '')
    // get hsl
    .map((h) => calculateHSL(h))
    // into string with newlines
    .join('\n');

  result.value = output;
  result.style.borderColor = output;
});

reset.addEventListener('click', () => {
  userInput.value = '';
  result.value = '';
});
