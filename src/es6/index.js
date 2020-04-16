function newFunction(name, age, country) {
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'PE';
    console.log(name, age, country);

}

// es6
function newFunction2(name = 'paul', age = 36, country = 'PE') {
    console.log(name, age, country);

}

newFunction()
newFunction('Helen', 36, 'PE')

// template literal

let hello = "Hello"
let world = "World"
let epic = world + ' ' + hello
console.log(epic);
epic = `${hello} ${world}`;
console.log(epic);

//var let const
{
    var global = "Global Var";
}
{
    let globalLet = "Global Let";
    console.log(globalLet);
}
{
    const globalConst = "Global Const";
    globalConst = "No puedo editar"
    console.log(globalConst);
}
console.log(global)

console.log(globalConst)
console.log(globalLet)




//Asignaciones
let name = 'Paul';
let age = 36;
obj = { name: name, age: age }

//es6
obj2 = { name, age }
console.log(obj)
console.log(obj2)



import Saludo from './module';
Saludo()