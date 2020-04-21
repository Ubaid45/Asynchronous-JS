console.log("before");

// Patterns for dealing with async code.

// 1. Callbacks

getUser(1, getRepositories);

console.log("after");

function getRepositories(user) {
    getCommits(user.gitHubUsername, getCommits);
}

function getCommits(repos) {
    getCommits(repos, displayCommits)
}

function displayCommits(commits) {
    console.log(commits);
}

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


function getCommits(repo, callback) {
    setTimeout(() => {
        console.log('Calling GitHub API...');
        callback(['commit']);
    }, 2000);
};