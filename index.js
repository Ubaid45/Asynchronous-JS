console.log("before");

const user = getUser(1);
console.log(user);

console.log("after");
// Patterns for dealing with async code.
// 1. Callbacks
// 2. Promises
// 3. Async/await
function getUser(id) {
    setTimeout(() => {
        console.log('Reading a user from a database...');
        return ({ id: id, gitHubUsername: 'ubaid' });
    }, 2000);
}