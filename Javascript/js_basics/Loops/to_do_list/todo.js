let input = prompt("What would you like to do?")
const todos = ['cars', 'bikes']
while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log('**************')
        for (let i = 0; i <= todos.length - 1; i++) {
            console.log(`${i}: ${todos[i]} `)
        }
        console.log('**************')
    } else if (input === 'new') {
        const newtodo = prompt("ok, what is the new todo")
        todos.push(newtodo)
        console.log(`${newtodo}: added to the list`)
    }
    else if (input === 'delete') {
        const index = parseInt(prompt('Which index you want to delete ?'));
        if (!Number.isNaN(index)) {
            let deleted = todos.splice(index, 1)
            console.log(`ok deleted ${deleted}`)
        } else
            console.log("Unknokwn Index")
    }
    input = prompt("What would you like to do?")
}
console.log("Ok you Quit !!")