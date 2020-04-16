

const helloWorld = () => {

    return new Promise((resolve, reject) => {
        (false)
            ? setTimeout(() => resolve('Hello world'), 3000)
            : reject('Test Error')
    })
}

const helloAsync = async () => {
    console.log('------- inicio');
    const hello = await helloWorld();
    console.log('------- medio');
    console.log(`async  ${hello}`);
    console.log('------- fin');
}
helloWorld()
    .then(resp => console.log(resp))
    .catch(error => console.log(error))
helloAsync();


const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello)
    } catch (error) {
        console.log('xxxxx')
        console.log(error)
        console.log('xxxxx')
    }
}
anotherFunction()