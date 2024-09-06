const listapokemon = document.querySelector("#pokemon-lista");
let URL = "https://pokeapi.co/api/v2/pokemon/";

for (let i = 1; i <= 151; i++) {
    fetch(URL + i)
        .then((response) => response.json())
        .then(data => mostrarPokemon(data));
}

function mostrarPokemon(poke) {
    let tipos = poke.types.map((type) => `<p class=" ${type.type.name} tipo">${type.type.name}</p>`);
    tipos = tipos.join('');
console.log(poke);
    
let habilidades = poke.abilities.map((ability) => ability.ability.name);
habilidades = habilidades.join(' ');

let Movimientos = poke.moves.map((move) => move.move.name).slice(0, 4);
Movimientos = Movimientos.join(' ');

    const div = document.createElement("div");
    div.classList.add("col-4", "mb-4");  // Usamos col-4 para tener 3 columnas por fila y mb-4 para margen inferior
    div.innerHTML = `
        <div class="card">
            <img src="${poke.sprites.other["official-artwork"].front_default}" class="card-img-top" alt="${poke.name}">
            <div class="card-body">
                <h5 class="card-title">${poke.name}</h5>
                <p class="id-pokemon"><strong>#${poke.id}</strong></p>
                <p class="card-text"><strong>Tipos:</strong> ${tipos}</p>
                  <p class="card-text"><strong>Habilidad:</strong> ${habilidades}</p>
                <p class="card-text"><strong>Movimientos:</strong>${Movimientos}</p>
            </div>
        </div>
    `;
    listapokemon.append(div);
}
