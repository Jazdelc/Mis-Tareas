function verdadero() {
    return true
}
console.log(verdadero())


async function asincrono() {
    return setTimeout(() => console.log("Hola soy una promesa"), 5000)
}
console.log(asincrono())


function* indicesPares() {
    let indice = 0
    while(true) {
        yield indice += 2
    }
}

const gen = indicesPares();

console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)








