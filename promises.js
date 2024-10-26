//***************************************************
//  WELCOME TO THE PROMISED LAND
// Check out common & advanced mistakes when using promises in the linked article
// https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html

function greet(name) {
  console.log('hello,', name);
}

greet('Steve');

////////// Promise chaining using then, catch, finally

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
const error = true;

const promise4 = new Promise((resolve, reject) => {
  if (error) {
    resolve('success');
  }
  reject('angry promise');
});

Promise.all([promise1, promise2, promise3, promise4])
  .then((data) => console.log(data))
  .catch((error) => {
    console.log(error);
  });
