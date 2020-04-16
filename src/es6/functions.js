const names = [
    { name: 'Paul', age: 35 },
    { name: 'Helen', age: 35 }
]
//funcion anonima
let listOfNames = names.map(function (item) {
    console.log(item)
})
console.log('-----------')
//funcion flecha
let listOfNames2 = names.map(item => console.log(item))

console.log('-----------')

/*
const listOfNames3 = (name,age,country) =>{
    ...
}
*/
//callbacks --> es una funcion que tiene como argumento otra funcion

function Saludar(nombre) {
    console.log(`Hola "Saludar" ${nombre}`)
}

function procesarEntradaUsuario(callbacks) {
    let nombre = 'Helen '
    callbacks(nombre)
}

procesarEntradaUsuario(Saludar)
//promesas

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve('Hey!')
        }else{
            reject('error!!!!!')
        }
    })
}

helloPromise()
.then(resp => console.log(resp))

.catch(error => console.log(error))
