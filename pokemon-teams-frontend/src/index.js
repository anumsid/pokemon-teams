document.addEventListener("DOMContentLoaded", function () {
 const main = document.querySelector('main');
 // const addButton = document.querySelectorAll('.addButton');

 renderCards();
});




function renderCards() {
 Adapter.getAll()
 .then((cards) => cards.forEach(renderCard));
}

function renderCard(card) {

   card.addEventListener('click', handleClick)

   main.innerHTML +=

 `<div class="card" data-id="${card.id}"><p>${card.name}</p>
   <button class="addButton" data-trainer-id="${card.id}">Add Pokemon</button>
   <ul>
      ${renderCardPokemons(card)}
   </ul>
 </div>`;
 //addButton = document.querySelectorAll('.addButton');
}



function renderCardPokemons(card) {
 let ul = ''

 card.pokemons.forEach((pokemon) => {
   ul += `<li>${pokemon.species} (${pokemon.nickname})<button class="release" data-pokemon-id="${pokemon.id}">Release</button></li>`
 });
 return ul;
}

function handleClick(e) {
  if(e.target.className === "addButton") {
    Adapter.createOne(data)
  }
  if(e.target.className === "release"){
    Adapter.deleteOne(e.target.parentElement.dataset.pokemon-id).then(e.target.parentElement.dataset.pokemon-id.remove())
  }
}
