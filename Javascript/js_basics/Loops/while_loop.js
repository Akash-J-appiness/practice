// let num = 2;
// while (num <= 20) {
//     console.log(num)
//     num += 2;
// }

const secret = "Sonu@123";
let guess = prompt('Enter the secret code');
while (guess !== secret) {
    guess = prompt("Enter the correct secret")
}
console.log('Congrats u got it..')