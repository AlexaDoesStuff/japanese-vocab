/**
 * Clears the entire dom plus event handlers when navigating between pages.
 * @return {Event}
 */

import { rootEl } from '../helpers/global.js';

import { clearAllFromRoot } from '../helpers/clearAllFromRoot.js';
import { home } from '../pages/home.js';
import { decks } from '../pages/decks.js';
import { cards } from '../pages/cards.js';
import { landing } from '../pages/landing.js';

const determineContents = (navi) => {
  if(navi == 'home' || navi == 'goto') {
    return home();
  } else if(navi == 'decks') {
    return decks();
  } else if(navi == 'cards') {
    return cards();
  } else {
    return landing();
  }
}

export function applyNavigation() {
  document.querySelectorAll('.navigator').forEach(function(navigator) {
    navigator.addEventListener('click', function() {
      localStorage.setItem('hasVisited', navigator.id);
      clearAllFromRoot(rootEl);
      rootEl.appendChild(determineContents(navigator.id));
    })
  })
}
