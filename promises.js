function greet(name) {
  console.log('hello,', name);
}

greet('Steve');

console.log('start');
fetch('https://anapioficeandfire.com/api/characters/583')
  .then(function (res) {
    console.log(res);
    return res.json();
  })
  .then((data) => {
    console.log('end request');
    console.log(data);
    return data.name;
  })
  .then((theName) => {
    console.log(theName);
    greet(theName);
  })
  .catch((error) => {
    console.error("Can't do that");
    console.error(error);
    alert('something went wrong');
  })
  .finally(() => {
    console.log('promise finished for some reason');
  });

// async function fetchGameOfThronesCharacter(id) {
//   try {
//     const response = await fetch(
//       `https://anapioficeandfire.com/api/characters/${id}`
//     );
//     const data = await response.json();
//     console.log(data);
//     console.log('end request');
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
//console.log('end async await with try catch');

// const promise1 = fetch('https://anapioficeandfire.com/api/characters/2').then(
//   (data) => {
//     return data.json();
//   }
// );

// const id = 35;

// const promise2 = fetch(`https://swapi.dev/api/people/${id}`).then((data) =>
//   data.json()
// );

// const time = 1000;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('done!!!!');
//   }, time);
// });

// Promise.all([promise1, promise2, promise3]).then((data) => console.log(data));
