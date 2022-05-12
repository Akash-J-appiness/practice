// function Fruits(name, cost, availability) {
//     this.name = name;
//     this.cost = cost;
//     this.availability = availability;
// }

// var add = new Fruits('apple', 200, 'yes')
// var sub = new Fruits('orange', 100, 'yes')
// console.log(add.name)
// console.log(sub.name)
// console.log(add.cost)
// console.log(add.availability)

class User {
    constructor(id, name) {
        this.id = id
        this.name = name

    }
}

class userone extends User {
    constructor(name, age, phnnum = 12344) {
        super(name, age)
        this.phnnum = phnnum
    }
}

class usertwo extends User {

}

const monty = new userone('monty', 6, 12334455689)
console.log(monty)
