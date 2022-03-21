document.querySelector('#search').addEventListener('click', getPokemon);


function lowerCaseName(string) {
  return string.toLowerCase();
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function getPokemon(e) {
  const name = document.querySelector('#pokemonName').value;
  const pokemonName = lowerCaseName(name);

  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
  .then((response) => response.json())
  .then((data) => {
    document.querySelector('.pokemonBox').innerHTML = `<div>
         <img src="${data.sprites.other['official-artwork'].front_default}" alt="${capitalizeFirstLetter(data.name)}">
       </div>
       <div class="pokemonInfo">
         <h1>${capitalizeFirstLetter(data.name)}</h1>
         <p>Weight: ${data.weight}</p>
       </div>`;
  })
  .catch((err) => {
    console.log('Pokemon not found', err);
  });
  e.preventDefault();
}

// Add ability to press enter to search.
// Is it better practice to forgo using innerHTML and instead give that section a display:none and add eventlistener to toggle it on or off?

function sumMix(x){
  let sum = 0;
  function toNumbers(x) {
  return x.map(Number);
}
  for (i = 0; i <= x.legnth - 1; i++) {
    sum = +x[i] + sum
  }
  return sum;
}


x = [9, 3, '7', '3'];

function sumMix(x){
  let sum = 0;
  let numArr = x.map(Number);
  for (i = 0; i < numArr.legnth; i++) {
   sum += numArr[i];
  }
  return sum;
}
