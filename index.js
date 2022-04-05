const receivesAFunction = (cb, name) => {
    console.log('This receives a function')
    cb(name)
}
const returnsANamedFunction = () => greeting

const returnsAnAnonymousFunction = () => function() {
    console.log('Anonymous')
}

function greeting(name) {
    console.log('Hello ' + name);
}

receivesAFunction(greeting);
returnsANamedFunction();

