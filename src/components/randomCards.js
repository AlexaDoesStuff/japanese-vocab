/* randomCards.js
* generate random cards on the home page from jisho.org api 
* bypassing cors https://robwu.nl/cors-anywhere.html
* https://cors-anywhere.herokuapp.com/
*/
import { createElementFromString } from "../helpers/createElementFromString";

var url = 'http://localhost:4000/flashcard/'

const setRandomData = async () => {
  return new Promise((resolve, reject) => {
    fetch(url)
    .then(response => response.json())
    .then(data => 
      resolve(data)
    )
    .catch((reject) => {throw new Error(reject)});
  });
}

export async function randomCards() {
  var cardBlock = document.createElement('div');
  cardBlock.classList.add('card-holder');
  let words = await setRandomData();

  for(var i = 0; i < words.length; i++) {
    let createCard = createElementFromString(`
      <div class="card">
        ${words[i].jap} <br/>
        ${words[i].yomi} <br />
        ${words[i].eng} <br />
        ${words[i].sentences}
      </div>
    `)
    cardBlock.appendChild(createCard);
  }

  return cardBlock;
}