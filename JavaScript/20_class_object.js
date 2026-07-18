// let obj = {
//     a: 1,
//     b: "Harry"
// }

// console.log(obj)

// let animal = {
//     eats: true
// }

// let rabbit = {
//     jumps:true
// }

// rabbit.__proto__= animal ; //sets rabbit.[[Prototype]] = animal

// console.log(rabbit.eats)

class Animal {
    constructor(name) {
        this.name = name
        console.log("Object is created......")
    }
    eats() {
        console.log("Kha rha hoon ");

    }
    jumps() {
        console.log("Kood rha hun");

    }
}
class Lion extends Animal {
    constructor(name) {
        super(name)
        this.name = name
        console.log("Object is created and he is a lion....");

    }
    eats() { // Method Overiding....
        // super.eats() // this help to avoid Method Overiding..
        console.log("Kha rha hoon roooooooooaaaaar.....");

    }
    jumps() {
        super.jumps() // this help to avoid Method Overiding..
        console.log("Kood rha hun lalalal");

    }
}
let a = new Animal("Bunny");
console.log(a);

let l = new Lion("Shera");
console.log(l);
l.eats()
l.jumps();

class User {
    constructor(name) {
        // invokes the setter
        this.name = name
    }
    get name(){
        return this._name;
    }
    set name (value){
        if (value.length < 4){
            console.log(" Name is too short")
            return;
        }
        this._name = value;
    }
}

let user = new User("John")
console.log(user.name) //John

user = new User(""); // Name is too short.

// l instance of Lion : True
// l instance of Animal : True
// a instance of Animal : True
// a instance of Lion : False