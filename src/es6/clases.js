import hello from "./module";

class calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }

    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const cal = new calculator()
console.log(cal.sum(2, 4))



//generators

function* helloWorld() {
    if (true) {
        yield 'Hello, '

    }
    if (true) {
        yield 'World '
    }

    if (true) {
        yield 'bye '
    }

}  

const generatorHello =  helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);