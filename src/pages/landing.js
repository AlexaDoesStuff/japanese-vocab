/* landing.js
* Landing page on first launch
*/

import { rootEl } from '../helpers/global.js';

import { escapeString } from '../helpers/escapeString.js';
import { createElementFromString } from '../helpers/createElementFromString.js';

import { Cherry } from './cherry-308.png';

export function landing() {
  const landing = document.createElement('div');
  landing.classList.add('landing');

  const landingblock = createElementFromString(`
    <div>
      <div class="getin-block">
        <p class="getin-text"> Get In Loser, We're Learning Japanese!</p>
      </div>
      <img class="cherry" src="./cherry-308.png"}>
    </div>
  `)

  landing.appendChild(landingblock);

  return landing;
}



