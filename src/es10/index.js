let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]]
console.log(array)
console.log(''.padEnd(100, '-'))
console.log(array.flat())
console.log(''.padEnd(100, '-'))
console.log(array.flat(0))
console.log(''.padEnd(100, '-'))
console.log(array.flat(1))
console.log(''.padEnd(100, '-'))
console.log(array.flat(2))
console.log(''.padEnd(100, '-'))
console.log(array.flat(3))


//flatmap
let array2 = [1, 2, 3, 4, 5];
console.log(array2.flatMap(value => [value, value * 2]));

//trimStar trimEnd
let hello = '                      hello world';
console.log(hello);
console.log(hello.trimStart()); // inicio

let hello = 'hello world                  ';
console.log(hello);
console.log(hello.trimEnd()); // final

//-------------optional catch biding-------------/

try {

} catch/*(error) ya no es necesario colocarlo*/ {
    error
}


//-------------fromEntries----------------------/
// array to object
let entries = [["name", "oscar"], ["age", 32]];
console.log(Object.fromEntries(entries))

//-------------symbol object--------------------/
let mySymbol = 'My Symbol';
let symbol = Symbol(mySymbol);
console.log(symbol.description);

//links
//https://tc39.es/
