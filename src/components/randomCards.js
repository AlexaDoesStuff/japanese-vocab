/* randomCards.js
* generate random cards on the home page from jisho.org api 
* bypassing cors https://robwu.nl/cors-anywhere.html
* https://cors-anywhere.herokuapp.com/
*/
import { createElementFromString } from "../helpers/createElementFromString";

var url = 'http://localhost:4000/flashcard/1'

const setRandomData = () => {
  fetch(url)
  .then(response => response.json())
  .then(data => console.log(data));
  return;
}

export async function randomCards() {
  setRandomData();
}