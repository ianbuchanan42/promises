//***************************************************
//  WELCOME TO THE PROMISED LAND
// Check out common & advanced mistakes when using promises in the linked article
// https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html

function greet(name) {
  console.log('hello,', name);
}

greet('Steve');

//////// Promise chaining using then, catch, finally

// console.log('start');
// fetch('https://anapioficeandfire.com/api/characters/583')
//   .then(function (result) {
//     console.log(result);
//     return result.json();
//   })
//   .then((data) => {
//     console.log('end request');
//     console.log(data);
//     return data.name;
//   })
//   .then((theName) => {
//     console.log(theName);
//     greet(theName);
//   })
//   .catch((error) => {
//     console.error("Can't do that");
//     console.error(error);
//     alert('something went wrong');
//   })
//   .finally(() => {
//     console.log('promise finished for some reason');
//   })
//   .then(() => {
//     console.log('?');
//   });

// console.log('end');

/////////// Promise create via async await using try catch

// async function fetchGameOfThronesCharacter(id) {
//   try {
//     const result = await fetch(
//       `https://anapioficeandfire.com/api/characters/${id}`
//     );
//     const data = await result.json();
//     console.log(data);
//     console.log('end request');
//     for (const value in data) {
//       console.log(value);
//     }
//     const name = data.name;
//     greet(name);
//   } catch (error) {
//     console.error("Can't do that");
//     console.error(error);
//     alert('something went wrong');
//   }
//   console.log('promise finished for some reason');
// }

// const charId = 583;
// console.log('start async await with try catch');
// fetchGameOfThronesCharacter(charId);
// console.log('end async await with try catch');

////////////////////// Promise All with then and catch

const promise1 = fetch('https://anapioficeandfire.com/api/characters/2').then(
  (data) => {
    return data.json();
  }
);

const id = 35;

const promise2 = fetch(`https://swapi.dev/api/people/${id}`).then((data) =>
  data.json()
);

const time = 4000;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('done!!!!');
  }, time);
});

// switch error to true to see what happens with reject
const error = false;

const promise4 = new Promise((resolve, reject) => {
  if (error) {
    resolve('success');
  }
  reject('angry promise');
});

Promise.all([promise1, promise2, promise3, promise4])
  .then((data) => console.log(data))
  .catch((e) => console.log(e));

//   Advanced mistake #5: promises fall through
// Finally, this is the mistake I alluded to when I introduced the promise puzzle above. This is a very esoteric use case, and it may never come up in your code, but it certainly surprised me.

// What do you think this code prints out?

// Promise.resolve('foo').then(Promise.resolve('bar')).then(function (result) {
//   console.log(result);
// });
// If you think it prints out bar, you're mistaken. It actually prints out foo!

// The reason this happens is because when you pass then() a non-function (such as a promise), it actually interprets it as then(null), which causes the previous promise's result to fall through. You can test this yourself:

// Promise.resolve('foo').then(null).then(function (result) {
//   console.log(result);
// });
// Add as many then(null)s as you want; it will still print foo.

// This actually circles back to the previous point I made about promises vs promise factories. In short, you can pass a promise directly into a then() method, but it won't do what you think it's doing. then() is supposed to take a function, so most likely you meant to do:

// Promise.resolve('foo').then(function () {
//   return Promise.resolve('bar');
// }).then(function (result) {
//   console.log(result);
// });
// This will print bar, as we expected.

// So just remind yourself: always pass a function into then()!

// CACHED promise values

// export type PFunc = (url: string) => Promise<unknown>;

// export const cachePromiseFunction = (get: PFunc): PFunc => {
//   const cache = {};
//   return (url: string) => {
//     if (cache[url]) {
//       return Promise.resolve(cache[url]);
//     }
//     cache[url] = new Promise((resolve) => {
//       const result = get(url);
//       resolve(result);
//     });
//     return cache[url];
//   };
// };
