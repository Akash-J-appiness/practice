// for (let i = 0; i < 100; i++) {
//     const button = document.createElement('button');
//     button.innerText = 'new';
//     const div = document.querySelectorAll('div')
//     div[1].appendChild(button)
// } 
const container = document.querySelector('#container');
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

const h1 = document.createElement('h1')
h1.append('MY POKEMON....!!!!')
const div = document.querySelector('div')
div.insertAdjacentElement("beforebegin", h1)

for (let i = 1; i <= 151; i++) {
    const pokemon = document.createElement('div');
    pokemon.classList.add('pokemon');
    const label = document.createElement('span');
    label.innerText = `#${i}`;
    const newImg = document.createElement('img');
    newImg.src = `${baseURL}${i}.png`


    pokemon.appendChild(newImg);
    pokemon.appendChild(label);
    container.appendChild(pokemon)
}
