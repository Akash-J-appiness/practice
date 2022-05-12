// const p1 = document.querySelector('#p1')
// const p2 = document.querySelector('#p2')
// const reset = document.querySelector('#reset')

// p1.addEventListener('click', function () {
//     const x = document.querySelectorAll('span')[0]
//     let y = parseInt(x.innerText)
//     x.innerText = y + 1
// })

// p2.addEventListener('click', function () {
//     const z = document.querySelectorAll('span')[1]
//     let y = parseInt(z.innerText)
//     z.innerText = y + 1
// })

// reset.addEventListener('click', function () {
//     const x = document.querySelectorAll('span')[0]
//     const z = document.querySelectorAll('span')[1]
//     x.innerText = 0
//     x.innerText = 0
// })

const p1Button = document.querySelector('#p1Button')
const p2Button = document.querySelector('#p2Button')
const p1Display = document.querySelector('#p1Display')
const p2Display = document.querySelector('#p2Display')
const reset = document.querySelector('#reset')
const select = document.querySelector('#select')

let p1Score = 0
let p2Score = 0
let winningScore = 3;
let isGameOver = false;

p1Button.addEventListener('click', function () {
    if (!isGameOver) {
        p1Score += 1
        if (p1Score === winningScore) {
            isGameOver = true;
            p1Display.classList.add('winner')
            p2Display.classList.add('loser')
        }
        p1Display.textContent = p1Score;
    }
})
p2Button.addEventListener('click', function () {
    if (!isGameOver) {
        p2Score += 1
        if (p2Score === winningScore) {
            isGameOver = true;
            p2Display.classList.add('winner')
            p1Display.classList.add('loser')
        }
        p2Display.textContent = p2Score;
    }
})

reset.addEventListener('click', reset1)

function reset1() {
    isGameOver = false;
    p1Score = 0
    p2Score = 0
    p1Display.textContent = 0
    p2Display.textContent = 0
    p1Display.classList.remove('winner', 'loser')
    p2Display.classList.remove('winner', 'loser')
}

select.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset1();
})


