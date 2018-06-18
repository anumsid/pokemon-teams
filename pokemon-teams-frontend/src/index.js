document.addEventListener('DOMContentLoaded', function() {
  const main = document.getElementById("main");
  main.addEventListener('click', (e) => {
    if (e.target.className === 'addButton'){
      const trainerId = e.target.dataset.trainerId;
      Adapter.createOne({trainer_id: trainerId})
      .then(function(){
        main.innerHTML = '';
        renderCards()
      });
    };
    if (e.target.className === 'release'){
      const pokemonId = e.target.dataset.pokemonId
      Adapter.deleteOne(pokemonId)
      .then(function(){
        main.innerHTML = '';
        renderCards()
      });
    };
  });
  renderCards()
});


function renderCards(){
  Adapter.getAll().then((cards) => cards.forEach(renderCard));
}

function renderCard(card) {
  main.innerHTML +=
  `<div class="card" data-id="${card.id}"<p>${card.name}</p>
  <button class="addButton" data-trainer-id=${card.id}>Add Pokemon</button>
  <ul>
    ${renderCardPokemons(card)}
  </ul>

  </div>`
}

function renderCardPokemons(card){
  let ul = ''
  card.pokemons.forEach((pokemon) => {
    ul += `<li>${pokemon.species} (${pokemon.nickname}) <button class="release" data-pokemon-id="${pokemon.id}">Release</button></li>`
  })
  return ul;
}
