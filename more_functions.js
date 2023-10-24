// display Mailing Label
function displayMailingLabel(firstName, address, city, state, zip) {
   console.log(firstName);
   console.log(address);
   console.log(city + state + zip);
}


// adding two numbers together.
function main() {
    const number1 = 7;
    const number2 = 3;

    const answer = addNumbers(number1, number2);
    
    // string interpolation
    const message = `${number1} + ${number2} = ${answer}`;
    console.log(message);
}

function addNumbers(first, second) {
    // const answer = first + second;
    // console.log(first + " + " + second + " = " + answer);
  
   

    const answer = first + second;

    return answer;
}

main();


// Display receipt
function displayReceipt(totalDue, amountPaid) {

    console.log("Total Due: $ " + totalDue);
    console.log("Amount Paid: $ " + amountPaid);

    let changeDue = amountPaid - totalDue;

    console.log("\nChange Due: $ " + changeDue);

}


displayMailingLabel("Martin ", "123 Main St. ", "Phoenix ", "Arizona ", "85008");
displayMailingLabel("Joey ", "321 Southern Ave ", "Miami ", "Florida ", "98765 ");
displayReceipt(183, 200);
displayReceipt(298,300);