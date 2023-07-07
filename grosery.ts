class Grocery{
    name: String;
    quantity: Number
    
    constructor(name: String, quantity: Number){
        this.name = name
        this.quantity = quantity
    }
}

let groceries: Grocery[] = [
    new Grocery("Milk",3),
    new Grocery("Bread",6),
    new Grocery("Bacon",2),
]

// Convert the groceries array to a JSON string and store it in localStorage
localStorage.setItem('groceries',JSON.stringify(groceries))