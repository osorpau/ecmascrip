// Operador de reposo puede extraer las propiedades de un objeto que aún no se ha construido. ...all
// Si quito el argumento name, me trae todo menos el nombre.
const obj = {
    name: 'Paul',
    age: 36,
    country: 'PE'
}

let { country, ...all } = obj;
console.log(all)
// Utilizando propiedades de propagación se pueden añadir multiples objetos a otros objetos mediante ...nombre_objeto

const obj2 = {
    name: 'Paul',
    age: 36

}
const obj3 = {
    ...obj2,
    country: 'PE'
}
console.log(obj3)



//Promise.finally podemos saber cuando ha terminado el llamado para realizar una lógica.

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? resolve('helloWorld')
            : reject(newError('Test Error'))
    });
}

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('finalizo'))


//regex
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
let match = regexData.exec('2018-04-20');
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day)

