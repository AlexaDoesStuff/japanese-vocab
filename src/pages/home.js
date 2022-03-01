/* home.js
* homepage after landing 
*/

import { randomCards } from "../components/randomCards";
import { createElementFromString } from "../helpers/createElementFromString";

const homeDiv = document.createElement('div');
homeDiv.classList.add('home');

const randomCardBlock = () => {
  randomCardBlock.called = true;
  randomCards().then(x => {
    homeDiv.append(x);
  })
}

export function home() {
  if(!randomCardBlock.called) {
    randomCardBlock();
  }
  return homeDiv;
}