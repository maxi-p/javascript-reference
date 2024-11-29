"use strict";

/* -------------------------------------- */
/* WITHOUT PROMISES (AND CALLBACKS) */
/* -------------------------------------- */

// Without promises or callbacks, this code just returns undefined for getUsers1()
function getUsers1() {
  let users = [];

  // delay 1 second (1000ms)
  setTimeout(() => {
    users = [
      { username: "john", email: "john@test.com" },
      { username: "jane", email: "jane@test.com" },
    ];
  }, 1000);

  return users;
}

function findUser(username) {
  const users = getUsers1(); // A
  const user = users.find((user) => user.username === username); // B
  return user;
}

console.log(findUser("john"));

/* -------------------------------------- */
/* PROMISES */
/* -------------------------------------- */

// Promise is an object that encapsulates the result of an asynchronous operation
// 3 Possible states:
//    1. Pending (executing)
//    2. Fullfilled (with a value)
//    3. Rejected (for a reason)

const executor = (resolve, reject) => {
  setTimeout(() => {
    const success = Math.round(Math.random());
    const users = [
      { username: "john", email: "john@test.com" },
      { username: "jane", email: "jane@test.com" },
    ];

    if (success === 0) {
      reject("Failed to fetch user list");
    }

    resolve(users);
  }, 2000);
};

function getUsers() {
  return new Promise(executor);
}

const resolve = (result) => {
  console.log(result);
};

const reject = (error) => {
  console.log(error);
};

const myUsers = getUsers().then(resolve, reject);

// .catch also catches any error in the resolve.
const myUsers2 = getUsers()
  .then(resolve)
  .catch(reject)
  .finally(() => console.log("Done"));

/* -------------------------------------- */
/* PROMISE CHAINING */
/* -------------------------------------- */

// the .then() method returns a promise that resolves to a value returned in that method.
// this means that it's possible to again call .then() method on the result of .then() method

function return10After1Second() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(10);
    }, 1000);
  });
}

function multiplyBy3after1Second(num) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(num * 3);
    }, 1000);
  });
}

const num = return10After1Second()
  .then((res) => multiplyBy3after1Second(res))
  .then((res) => res * 5)
  .then((res) => console.log(res));

// Example 2

function getUser(userId) {
  return new Promise((resolve, reject) => {
    console.log("Get the user from the database.");
    setTimeout(() => {
      resolve({
        userId: userId,
        username: "admin",
      });
    }, 1000);
  });
}

function getServices(user) {
  return new Promise((resolve, reject) => {
    console.log(`Get the services of ${user.username} from the API.`);
    setTimeout(() => {
      resolve(["Email", "VPN", "CDN"]);
    }, 3 * 1000);
  });
}

function getServiceCost(services) {
  return new Promise((resolve, reject) => {
    console.log(`Calculate the service cost of ${services}.`);
    setTimeout(() => {
      resolve(services.length * 100);
    }, 2 * 1000);
  });
}

getUser(100)
  .then(getServices)
  .then(getServiceCost)
  .then((res) => console.log(res));

/* -------------------------------------- */
/* MULTIPLE THEN METHODS ON SINGLE PROMISE */
/* -------------------------------------- */

// multiple then() methods that are not chained
// all execute independently from each other
const p = return10After1Second();
p.then((res) => {
  console.log(res);
  return res * 2;
});

p.then((res) => {
  console.log(res);
  return res * 3;
});

p.then((res) => {
  console.log(res);
  return res * 4;
});

/* -------------------------------------- */
/* PROMISE ALL */
/* -------------------------------------- */

// Promise.all(iterable<Promises>) takes iterable of promises
// Returns an array of resolved results from that iterable whan all of them resolve
// If at least one rejects, then the Promise.all rejects at that exact time
// But all promises that make up the iterable will still resolve or reject

function get10() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("Resolving the get10()");
      res(10);
    }, 1000);
  });
}

function get20() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("Resolving the get20()");
      res(20);
    }, 2000);
  });
}

function get30() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("Resolving the get30()");
      res(30);
    }, 3000);
  });
}

let pr1 = get10(),
  pr2 = get20(),
  pr3 = get30();
Promise.all([pr1, pr2, pr3])
  .then((res) => {
    let sum = 0;
    for (const element of res) {
      sum += element;
    }
    return sum;
  })
  .then((res) => console.log(`Sum is: ${res}`));

function get20Fail() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("Resolving the get20()");
      rej("Failed");
    }, 2000);
  });
}

// Starts after 5 seconds to clearly separate from previous Promise.all
setTimeout(() => {
  pr1 = get10();
  pr2 = get20Fail();
  pr3 = get30();
  Promise.all([pr1, pr2, pr3])
    .then((res) => {
      let sum = 0;
      for (const element of res) {
        sum += element;
      }
      return sum;
    }) // Will never execute
    .then((res) => console.log(`Sum is: ${res}`)) // Will never execute
    .catch((res) => console.log(`Error: ${res}`));
}, 5000);

// Promise.race and Promise.any are close.
// Promise.race resolves to the first resolved Promise in the iterable
// If the first resolved Promise rejects, then Promise.race rejects

// Promise.any also resolves to the first resolved Promise in the iterable
// Promise.any will ignore the first Promises that rejected
// It will resolve to the first Promise that resolved (first un-rejected Promise)
