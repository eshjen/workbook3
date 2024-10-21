"use strict";
// // the company
// // the part
// // optional size
// // we're looking for the colon and the dash
// let ACME = "ACME:123-L";
// function getSuplier(code) {
//   // that returns all characters before the :
//   let colon = code.indexOf(":");
//   let supplier = code.substring(0, colon);
//   console.log(supplier);
// }

// function productNumber(code) {
//   // that returns all characters between the : and -
// }

// function getSize(code) {
//   // that returns all characters after the -
// }

const code1 = "ACME:123-L";
const code2 = "DI:12345-M";
const code3 = "ACE:1-12";

function getSupplier(code) {
  let positionOfCOlon = code.indexOf(":");
  let supplier = code.substring(0, positionOfCOlon);
}
let supplier = getSupplier(code3);
console.log(supplier);

function getProductNumber(code) {
  let positionOfCOlon = code.indexOf(":");
  let positionOfHyphen = code.indexOf("-");
  let productNumber = code.substring(positionOfCOlon + 1, positionOfHyphen);
  return productNumber;
}
let productNumber = getProductNumber(code3);
console.log(productNumber);

function getSize(code) {
  let positionOfHyphen = code.lastIndexOf("-");
  let size = code.substring(positionOfHyphen + 1);
  return size;
}
