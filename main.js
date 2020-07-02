// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.
console.log(users)

// Append the katas to this element:
const main = document.querySelector('main')

function printKata (kataNumber, object) {
    // For the usage of the DETAILS and SUMMARY tags
    // in HTML, see: http://mdn.io/details-element
    const detailsElement = document.createElement('details')
    main.append(detailsElement)
    //
    const summaryElement = document.createElement('summary')
    summaryElement.append("KATA " + kataNumber)
    detailsElement.append(summaryElement)
    //
    // http://mdn.io/json.stringify
    const stringifiedObject = JSON.stringify(object)
    detailsElement.append(stringifiedObject)
}

const greenEyes1 = users.filter(user => user.eyeColor === "green")
printKata(0, greenEyes1)   // If you don't have this function already, see the "Set up" section above.

// Kata 1: Use the .filter() method

let isActive = users.filter(user => user.isActive === true)
printKata(1, isActive)

// Kata 2: Use the .map() method

let userEmail = users.map(user => user.email)
printKata(2, userEmail)

//Kata 3: Use the .some() method

let companyPropertyOvation = users.some(user => user.company === "OVATION")
printKata(3, companyPropertyOvation)

//Kata 4: Use the .find() method

let userOverAge38 = users.find(user => user.age > 38)
printKata(4, userOverAge38)

//Kata 5: Use the .filter() and .find() methods

let activeUserOver38 = users.filter(user => user.isActive === true).find(user => user.age > 38)
printKata(5, activeUserOver38)

//Kata 6: Use the .filter() and .map() methods

let userBalanceFromZenco = users.filter(user => user.company === "ZENCO").map(user => user.balance)
printKata(6, userBalanceFromZenco)

//Kata 7: Use the .filter() method with .includes() and the .map() method

let userAgeFugiat = users.filter(user => user.tags.includes("fugiat")).map(user => user.age)
printKata(7, userAgeFugiat)