console.log("before");

// Patterns for dealing with async code.

// 1. Callbacks

getUser(1, user => {
    getRepositories(user.gitHubUsername, repos => {
        getCommits(repos[0], (commits) => {
            console.log(commits);
        })
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

function getCommits(repo, callback) {
    setTimeout(() => {
        console.log('Calling GitHub API...');
        callback(['commit']);
    }, 2000);
};