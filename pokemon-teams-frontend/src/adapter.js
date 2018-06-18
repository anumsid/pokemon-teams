// const BASE_URL = "http://localhost:3000"
// const TRAINERS_URL = `${BASE_URL}/trainers`
// const POKEMONS_URL = `${BASE_URL}/pokemons`
//
// const Adapter = {
//
//  getAll: function getAll() {
//    return fetch(TRAINERS_URL)
//    .then((resp) => resp.json())
//  },
//
//  createOne: function createOne(data) {
//    return fetch(POKEMONS_URL, {
//      method: 'POST'.
//      headers: {
//        'Content-Type': 'application/json'
//      },
//      body: JSON.stringify(data)
//    }).then((resp) => resp.json())
//  },
//
//
//  deleteOne: function deleteOne(id) {
//    return fetch(`${POKEMONS_URL}/${id}`, {
//      method: 'DELETE'
//    }).then((resp) => resp.json())
//  }
// }
const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

const Adapter = {

 getAll: function getAll() {
 return fetch(TRAINERS_URL)
 .then ((response) => response.json())
 },

 createOne: function createOne(data) {
 return fetch(POKEMONS_URL, {
   body: JSON.stringify(data),
   headers: {
     'content-type': 'application/json'
   },
   method: 'POST'
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
