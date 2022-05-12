console.log('first')
const form = document.querySelector('form')
const input = document.querySelector('#product')
const list = document.querySelector('#list')
const input1 = document.querySelector('#qty')

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = input.value
    const num = input1.value

    const newLi = document.createElement('li')
    newLi.innerText = `${num} ${name}`
    list.append(newLi)
    input.value = " "
    input1.value = " "
})

