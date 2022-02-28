/* navigator.js
* If on landing, display Let's Go! button
* If on either home, deck or cards button, 
*/

import { rootEl } from '../helpers/global.js';

import { escapeString } from '../helpers/escapeString.js';
import { createElementFromString } from '../helpers/createElementFromString.js';

// import { clearAllFromRoot } from '../../helpers/clearAllFromRoot.js';

const landingSingle = createElementFromString(`
  <div>
    <button class="navigator" id="goto">
      Let's Go!
    </button>
  </div>
`)

const threeGroup = createElementFromString(`
  <div>
    <button class="navigator" id="home">
      Home
    </button>
    <button class="navigator" id="decks">
      Decks
    </button>
    <button class="navigator" id="cards">
      Cards
    </button> 
  </div>
`)

export function navigatorButtons(curPage) {
  var buttonGroup = document.createElement('div');
  buttonGroup.classList.add('navigator-row');

  var allButtons;
  
  if(curPage == 'landing') {
    allButtons = landingSingle;
  } else if (curPage != 'landing') {
    allButtons = threeGroup;
  }

  buttonGroup.appendChild(allButtons);
  
  return buttonGroup;
}


