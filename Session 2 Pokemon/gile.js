"use strict";

import Team from './team';

let list = [];
let pokemon = [];

function getData() {
    //get the list
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(response => {
            //console.log(response);
            return response.json();
        }).then(data => {
            //List of pokemon only by name and url
            list = data.results;
            //loop over each poke and fetch its data using the url
            for (let element of list)(
                fetch(element.url)
                .then(response => {
                    return response.json();
                }).then(data => {
                    //each loop, data is filled with the object of 1 poke
                    //Add it to the list
                    pokemon.push(data);
                    console.log(pokemon);
                })
            )

        })

}

window.onload = function () {
    getData();

    setTimeout(buildList, 3000);

    function buildList(){
        let html = '';
        for () {
            `<div class="pokemon">
            <img class="img" src="https://pokeapi.co/api/v2/pokemon/2/" alt="">
            <p class="nr"></p>
            <h1 class="naam">ivysaur</h1>
            <div><p></p> <p></p></div>
            </div>` 
          }
    }
}