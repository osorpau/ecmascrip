let person = {
    name: 'oscar',
    age: 32,
    country: 'MX'
}

console.log(person.name, person.country)

// es6, se puede, concatenar arreglos  de esta forma

let { name, age, country } = person
console.log(name, country)


let team1 = ['paul', 'helen', 'daniel', 'dean']
let team2 = ['brenda', 'eboly', 'cecilia', 'beto']
let education = ['Willy', ...team1, ...team2]
console.log(education)

