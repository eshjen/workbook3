"use script";
function displayMailingLabel(name, address, city, state) {
  console.log(name, address, city, state);
}

displayMailingLabel("Eshei Jenkins", "5 Cherry Street", "Stamford", "CT", "06410");

function addNumbers(num1, num2) {
  console.log(num1 + "+" + num2 + "=" + (num1 + num2));
}
addNumbers(2, 2);

function displayReceipt(totalDue, amountPaid) {
  console.log("Total Due: " + totalDue + " Amount Paid: " + amountPaid + " Change Due: " + (amountPaid - totalDue));
}
displayReceipt(65,80)