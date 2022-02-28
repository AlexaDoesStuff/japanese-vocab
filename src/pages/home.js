/* home.js
* homepage after landing 
*/

import { randomCards } from "../components/randomCards";
import { createElementFromString } from "../helpers/createElementFromString";

const homeDiv = document.createElement('div');
homeDiv.classList.add('home');

var skeleton = createElementFromString(`
<div class="home">
  homepage
</div> 
`)

export function home() {
  randomCards();
  homeDiv.innerText = 'homepage'
  return homeDiv;
}