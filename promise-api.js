// Settled Promises

// Promise.reolve(1);
// Promise.reject(new Error(''));


const p1 = new Promise((resolve) => {
    setTimeout(() => {
        console.log('Async operation 1...');
        resolve(1);
    }, 2000);
});

const p2 = new Promise((resolve) => {
    setTimeout(() => {
        console.log('Async operation 2...');
        resolve(2);
    }, 2000);
});

// Wait for all the parallel promises to complete
/* Promise.all([p1, p2])
    .then(result => console.log(result))
    .catch(err => console.log('Error', err.message));
*/
// Wait for any of the parallel promise to complete
Promise.race([p1, p2])
    .then(result => console.log(result))
    .catch(err => console.log('Error', err.message));