let ganhadores =["Carla", "Sandra", "Felipe", "Carter", "Alice"]
console.log(ganhadores)

ganhadores.unshift("Cleo");
console.log(ganhadores)

ganhadores.splice(5);
console.log(ganhadores)

ganhadores.push("Júlio","Vanessa");
console.log(ganhadores)

ganhadores.shift();
console.log(ganhadores)

let numbers = [7,5,6,3,8,9,2,1,4]
let numbersAsc = numbers.sort(function(a, b) {
    return a - b;
});
console.log(numbersAsc);