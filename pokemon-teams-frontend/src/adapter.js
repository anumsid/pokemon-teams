const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`
const Adapter = {

 getAll: function getAll() {
 return fetch(TRAINERS_URL)
 .then(response => response.json())
 },

 createOne: function createOne(data) {
 return fetch(POKEMONS_URL, {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(data),
 })
 .then(response => response.json())
 },

 deleteOne: function deleteOne(id) {
   return fetch(`${POKEMONS_URL}/${id}`, {
     method: 'DELETE'
   })
   .then(response => response.json())

}







}
