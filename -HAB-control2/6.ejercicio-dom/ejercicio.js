import { underline } from './helpers/helpers.js';

const getP = document.getElementsByTagName('p');

for (const par of getP) {
  underline(par);
}
