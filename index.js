console.log("before");
//Async code: will be executed later
setTimeout(() => {
    console.log('Reading a user from a database...');
}, 2000);

console.log("after");