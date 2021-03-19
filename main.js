// function sum () {
//     console.log(1234)
// }

// function wyswietl (wartość) {
//     console.log(wartość)
// }

// const btn1 = document.getElementsByClassName("grid-item")
// const tablicabtn = Array.from(btn1)
// console.log(tablicabtn)

// function getValue (wartość) {
//     console.log(wartość)
// }

// const wynik = document.getElementById('wynik')
// function getNumber(num) {
//     wynik += num
// }

function getValue(num) {
    let inp = document.getElementsByClassName('inp')[0].value
    inp += num
    document.getElementsByClassName('inp')[0].value = inp
}

function getSum() {
    let inp = document.getElementsByClassName('inp')[0].value
    document.getElementsByClassName('inp')[0].value = eval(inp)
}