// Solve the questions below:

// #1) Create a promise that resolves in 4 seconds and returns "success" string

const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve ('Success!');
  } else {
    reject ('Error, it broke...')
  }
})

const promise2 = new Promise ((resolve, reject) => {
  setTimeout(resolve, 4000, 'It worked!')
})
 
Promise.all([promise, promise2])
  .then(result => {
    Promise.reject('failed')
  console.log(result);
})
  .catch(() => console.log('Ooops something went wrong'))



// #2) Run the above promise and make it console.log "success"


// #3) Read about Promise.resolve() and Promise.reject(). How can you make
// the above promise shorter with Promise.resolve() and console loggin "success"


// #4) Catch this error and console log 'Ooops something went wrong'
Promise.reject('failed')

// #5) Use Promise.all to fetch all of these people from Star Wars (SWAPI) at the same time.
// Console.log the output and make sure it has a catch block as well.
const urls = [
  'http://swapi.dev/api/people/1',
  'http://swapi.dev/api/people/2',
  'http://swapi.dev/api/people/3',
  'http://swapi.dev/api/people/4'
]

Promise.all(urls.map(url => {
  return fetch(url).then(Response=> Response.json())
})).then(results => {
  console.log(results[0])
  console.log(results[1])
  console.log(results[2])
})

.catch(() => console.log('error bobo'))
// #6) Change one of your urls above to make it incorrect and fail the promise
// does your catch block handle it?