// setTimeout(() => {
//     document.body.style.backgroundColor = 'red'
//     setTimeout(() => {
//         document.body.style.backgroundColor = 'orange'
//         setTimeout(() => {
//             document.body.style.backgroundColor = 'yellow'
//             setTimeout(() => {
//                 document.body.style.backgroundColor = 'green'
//                 setTimeout(() => {
//                     document.body.style.backgroundColor = 'blue'
//                     setTimeout(() => {
//                         document.body.style.backgroundColor = 'purple'
//                     }, 1000)
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)

// const fakeRequestCallback = (url, success, failure) => {
//     const delay = Math.floor(Math.random() * 4500) + 500;
//     setTimeout(() => {
//         if (delay > 4000) {
//             failure('connection Timeout :')
//         } else {
//             success(`here is your fake data from ${url}`)
//         }
//     }, delay)
// }

// fakeRequestCallback('book.com/page1', function (response) {
//     console.log("Its Working !!")
//     console.log(response)
//     fakeRequestCallback('book.com/page2', function (response) {
//         console.log("2nd Req Working !!")
//         console.log(response),
//             function (err) {
//                 console.log('2st req Error !!!', err)
//             }
//     }, function (err) {
//         console.log('1st req Error !!!', err)
//     })
// })
