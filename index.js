console.log("before");

// Patterns for dealing with async code.

// 1. Callbacks

getUser(1, user => {
    console.log('User', user);
    getRepositories(user.gitHubUsername, repos => {
        console.log('Repos', repos);
    });
});

function getUser(id, callback) {
    setTimeout(() => {
        console.log('Reading a user from a database...');
        callback({ id: id, gitHubUsername: 'ubaid' });
    }, 2000);
}

function getRepositories(username, callback) {
    setTimeout(() => {
        console.log('Calling GitHub API...');
        callback(['repo1', 'repo2', 'repo3']);
    }, 2000);
}

// 2. Promises
// 3. Async/await

console.log("after");