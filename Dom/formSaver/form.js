const form = document.querySelector('#shelter');
const input = document.querySelector('#hi')
const list = document.querySelector('#hey')

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = input.value;
    const NewLI = document.createElement('li')
    NewLI.innerText = name;
    list.append(NewLI);
    input.value = " "
})