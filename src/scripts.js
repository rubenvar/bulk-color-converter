// formulas from https://css-tricks.com/converting-color-spaces-in-javascript/
const userInput = document.getElementById('hex');
const button = document.getElementById('convert');
const result = document.getElementById('result');
const reset = document.getElementById('reset');

const regex = /^(#)?[a-fA-F0-9]{3}$|^(#)?[a-fA-F0-9]{6}$/;

function calculateHSL(inp) {
  // first check hex format is right, else return
  const isHex = regex.test(inp);
  if (!isHex) return console.log(`${inp} not valid (╯°□°）╯︵ ┻━┻`);
  // strip the #
  const hex = inp.replace('#', '');
  // hex to rgb (add '0x' in front and convert to Int to get decimal from haxdecimals 😉)
  let r;
  let g;
  let b;
  // check if hex is 3 or 6 length
  if (hex.length === 6) {
    r = +`0x${hex[0]}${hex[1]}`;
    g = +`0x${hex[2]}${hex[3]}`;
    b = +`0x${hex[4]}${hex[5]}`;
  } else if (hex.length === 3) {
    r = +`0x${hex[0]}${hex[0]}`;
    g = +`0x${hex[1]}${hex[1]}`;
    b = +`0x${hex[2]}${hex[2]}`;
  } else return console.log(`${inp} not valid (╯°□°）╯︵ ┻━┻`);
  // convert rgb to hsl:
  // 1. divide by 255
  r /= 255;
  g /= 255;
  b /= 255;
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
  // calculate Lightness
  let l = (max + min) / 2;
  // calculate Saturation
  let s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
  // L and S to hundreds (for percent)
  l = +(l * 100).toFixed(0);
  s = +(s * 100).toFixed(0);
  // out hsl formatted for css
  return `hsl(${h}, ${s}%, ${l}%)`;
}

button.addEventListener(
  'click',
  () =>
    (result.value = userInput.value
      // strip commas, spaces, newlines, empty, etc.
      .split(',')
      .map(h => h.replace(/ /g, ''))
      .map(h => h.replace(/\n/g, ''))
      .filter(h => h !== '')
      // get hsl
      .map(h => calculateHSL(h))
      // into string with newlines
      .join('\n'))
);

reset.addEventListener('click', () => {
  userInput.value = '';
  result.value = '';
});
