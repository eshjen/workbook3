"use strict";

function parseAndDisplayName(fullName){
    
let space = fullName.indexOf(" ");
let firstName = fullName.substring(0, space);
let lastName = fullName.substring(space+1, 8)
console.log(space);

console.log("Name:", fullName);
console.log("First name: ", firstName);
console.log("Last name: ", lastName)
}
