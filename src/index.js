/* App.js
* Main entry point to this practice repo... not sure what I'm going to make but I'd
* like to practice coding 
*/
import { rootEl } from './helpers/global.js';
import { navEl } from './helpers/global.js';

import { landing } from './pages/landing.js';
import { home } from './pages/home.js';
import { cards } from './pages/cards.js';
import { decks } from './pages/decks.js';

import { navigatorButtons } from './navigators/navigatorButtons.js';
import { applyNavigation } from './navigators/applyNavigation.js';

import './styles/styles.scss';

var curPage = 'landing';

const initPage = () => {
  if(localStorage.hasOwnProperty('hasVisited')) {
    const localPage = localStorage.getItem('hasVisited');
    if(localPage == 'home') {
      rootEl.appendChild(home());
    } else if (localPage == 'cards') {
      rootEl.appendChild(cards());
    } else if (localPage == 'decks') {
      rootEl.appendChild(decks());
    } else if (localPage == 'landing') {
      rootEl.appendChild(landing());
    }
    curPage = localPage;
  } else {
    localStorage.setItem('hasVisited', 'landing')
    rootEl.appendChild(landing());
  }
} 

initPage();

const navigation = navigatorButtons(curPage);

navEl.appendChild(navigation);

applyNavigation();
