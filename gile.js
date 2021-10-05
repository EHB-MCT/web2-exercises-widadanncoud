"use strict";

const list = [];

function getData() {
    //get the list
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(response => {
            //console.log(response);
            return response.json();
        }).then(data => {
            list = data.results;
            for (let element of list)(
                fetch(element).then(response => {
                    return response.json();
                }).then(data => {
                    pokemon.push(data);
                    console.log(pokemon);
                })
            )

        })

}

window.onload = function () {
    getData();

    setTimeout(buildlist)
}