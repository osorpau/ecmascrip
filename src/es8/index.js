//Object.entries --> claves y valores de una matriz, arreglo , trainlling comma
const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana'
}
console.log(data)
const entries = Object.entries(data)
console.log(entries)
console.log(entries.length)
//Object.values --> los valor lo convierte a un arrelo  - object to array
const values = Object.values(data)
console.log(values)
console.log(values.length)


//pad 

const string = 'hello'
console.log(string.padStart(7, 'hi'))
console.log(string.padEnd(12, '-'))

