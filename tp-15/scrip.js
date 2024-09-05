const listapokemon = document.querySelector("#pokemon-lista");
let URL = "https://pokeapi.co/api/v2/pokemon/";

for(let i = 1; i <=151;i++){
    fetch(URL + i)
        .then((response) => response.json())
        .then(data => mostrarPokemon(data))
}
function mostrarPokemon(poke){

    let tipos= poke.types.map((type) => ` <p class=" ${type.type.name} tipo">${type.type.name}</p> `);
    tipos = tipos.join('');
    console.log(tipos);
    const div = document.createElement("div");
    div.classList.add("pokemon");
    div.innerHTML = `
    <div class="row">
        <div class="col-3">
    <div class="card">
    <div class="card-body-sm">
                <img src="${poke.sprites.other["official-artwork"].front_default}" class="card-img-top card-img-" with alt="${poke.name}">
                    <h5 class="card-title">${poke.name}</h5>
                    <p class="id-pokemon"><strong>#${poke.id}</p>
                    <p class="card-text"><strong>Tipos:${tipos}</strong></p>
                    <p class="card-text"><strong>Habilidad:</strong> si</p>
                    <p class="card-text"><strong>Movimientos:</strong> no</p>
                </div>
            </div>
        </div>
    `;
    listapokemon.append(div);
}
