"use strict";
const pickupDate = document.getElementById("pickupInput");
const numOfDaysInput = document.getElementById("numOfDaysInput");
const tolls = document.getElementById("tolls");
const gps = document.getElementById("gps");
const roadsideAssistance = document.getElementById("assistance");

const checkedNo = document.getElementById("noChecked");
const checkedYes = document.getElementById("yesChecked");
const totalCostBtn = document.getElementById("totalCost");

const carRental = document.getElementById("carRentalInput");
const optionsSurcharge = document.getElementById("optionsSurcharge");
const under25Tax = document.getElementById("under25Tax");
const totalDue = document.getElementById("totalDue");

let numOfDays = Number(numOfDaysInput.value);
let baseRatePay = 29.99 * numOfDays;
let optionsTotal = 0;

//options

function estimateCost(){
    if (tolls.checked) {
        optionsTotal = optionsTotal + (tolls.value * numOfDays);
        console.log(optionsTotal)
      }
      
      if (gps.checked) {
          optionsTotal = optionsTotal + (gps.value * numOfDays) ;
          console.log(optionsTotal)
        }
      
        if (roadsideAssistance.checked) {
          optionsTotal = optionsTotal + (roadsideAssistance.value * numOfDays);
          console.log(optionsTotal)
        }




}
//options



// if (tolls.checked) {
//   optionsTotal = optionsTotal + (tolls.value * numOfDays);
//   console.log(optionsTotal)
// }

// if (gps.checked) {
//     optionsTotal = optionsTotal + (gps.value * numOfDays) ;
//     console.log(optionsTotal)
//   }

//   if (roadsideAssistance.checked) {
//     optionsTotal = optionsTotal + (roadsideAssistance.value * numOfDays);
//     console.log(optionsTotal)
//   }