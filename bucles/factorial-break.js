let n = 1
let fact = 10

while (true) {
    n *= fact
    fact--
    if (fact === 1) break
}

console.log(n)