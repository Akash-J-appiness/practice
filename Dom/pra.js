const button = document.querySelector('button')
const h1 = document.querySelector('h1')
button.addEventListener('click', function () {
    const newcolor = makerandomColor();
    document.body.style.backgroundColor = newcolor
    h1.innerText = newcolor;
})
const makerandomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}
function colorize() {
    this.style.backgroundColor = makerandomColor();
    this.style.color = makerandomColor();
}
const buttons = document.querySelectorAll('button')
for (let button of buttons) {
    button.addEventListener('click', colorize)
}