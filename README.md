In this project, I practiced with asynchronous javascript to create the **[node-backend-api](https://github.com/Ubaid45/NodeJS_movie-management)** for an end-to-end **[movie-management application](https://desolate-headland-28492.herokuapp.com/movies)**.

The printString function doesn’t return anything and is independent, all we cared about was the order. 
But what if we wanted to take the output of the first function, do something with it in the second function, and then pass it to the third function?
Instead of printing the string each time, let’s make a function that will concatenate the string and pass it on.
# Callbacks
Here it is in callback style:
```javascript
function addString(previous, current, callback){
  setTimeout(
    () => {
      callback((previous + ' ' + current))
    }, 
    Math.floor(Math.random() * 100) + 1
  )
}
```
And in order to call it:
```javascript
function addAll(){
  addString('', 'A', result => {
    addString(result, 'B', result => {
      addString(result, 'C', result => {
       console.log(result) // Prints out " A B C"
      })
    })
  })
}
addAll()
```

The problem with callbacks is it creates something called **Callback Hell**. 
Basically, we start nesting functions within functions within functions, and it starts to get really hard to read the code.

# Promises
Promises try to fix this nesting problem. 
```javascript
function addString(previous, current){
  return new Promise((resolve, reject) => {
    setTimeout(
      () => {
        resolve(previous + ' ' + current)
      }, 
      Math.floor(Math.random() * 100) + 1
    )
  })
}
```
We can see that it still looks pretty similar. We wrap the whole function in a **Promise**, 
and instead of calling the callback, we call **resolve** (or **reject** if there is an error). 
The function returns this Promise object and in order to call it:
```javascript
function addAll(){  
  addString('', 'A')
  .then(result => {
    return addString(result, 'B')
  })
  .then(result => {
    return addString(result, 'C')
  })
  .then(result => {
    console.log(result) // Prints out " A B C"
  })
}
addAll()
```
This is called a **Promise Chain**. We can see that the code returns the result of the function (which will be a **Promise**),
and this gets sent to the next function in the chain.
The code is no longer nested but it still looks messy!
By using features of arrow functions, we can remove the **wrapper** function. 
The code becomes cleaner, but still has a lot of unnecessary parenthesis. Using arrow functions means we can make the code a little nicer:
```javascript
function addAll(){  
  addString('', 'A')
  .then(result => addString(result, 'B'))
  .then(result => addString(result, 'C'))
  .then(result => {
    console.log(result) // Prints out " A B C"
  })
}
addAll()
```

# Async and await
**Await** is basically syntactic sugar for Promises. It makes our asynchronous code look more like synchronous/procedural code, which is easier for humans to understand.
The printString function doesn’t change at all from the promise version.
In order to call via async and await:
```javascript
async function addAll(){
  let toPrint = await addString('', 'A')
  toPrint = await addString(toPrint, 'B')
  toPrint = await addString(toPrint, 'C')
  console.log(toPrint) // Prints out " A B C"
}
addAll()
```
