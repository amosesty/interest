

////////////////////////////
// Variables
///////////////////////////
let age;
let savings;
let rate;
let userageNumber;
let savingsNumber;
let rateNumber;
let total;
let message = '';
let button = document.getElementById('submitButton');
let resetButton = document.getElementById('resetButton');
let eraseButton = document.getElementById('eraseButton');

// add click event to the calculate button
button.addEventListener('click', calculateInterest);	

// add click event to the reset button
resetButton.addEventListener('click', resetForm);		

// add click event to the erase previous entries button
eraseButton.addEventListener('click', eraseMessages);

////////////////////////////
// Functions
///////////////////////////


// function that calculates compound interest
function calculateInterest() {
	// get number of years user will earn interest and convert to decimal
	age = document.getElementById('age').value;
	userageNumber = parseFloat(age);

	// get current savings and convert to decimal
	savings = document.getElementById('savings').value;
	savingsNumber = parseFloat(savings);
	
	// get interest rate, convert to number, and then convert to percentage
	rate = document.getElementById('rate').value;
	rateNumber = parseFloat(rate);
	ratePercentage = rateNumber / 100;

	total = savingsNumber;

	// for each year money will earn interest, add the total plus the interest
	for (i=0; i<userageNumber; i++) {
		total += total * ratePercentage;
	}

	// Limit the total to two decimal places
	total = total.toFixed(2);

	// Check that all the numbers are actually numbers
	// If not, show an alert
	// If so, display the total
	if ( isNaN(total) || isNaN(userageNumber) ) {
		alert('Please fill out all the fields with numbers only.');
	} else {
		// Display the message stating how much the total will be
		// To add commas to separate thousands, I used function outlined here: https://blog.abelotech.com/posts/number-currency-formatting-javascript/
		message += `<p>At ${rate}% interest, after ${userageNumber} years, you will have $${addCommas(total)} in savings.</p>`;
		document.getElementById('answer').innerHTML = message;
		answer.style.display = 'block';
		answer.style.marginTop = '2em';
		answer.style.marginBottom = '20px';

		// Show the reset button and erase button
		resetButton.style.display = 'block';
		eraseButton.style.display = 'block';


		// Hide the form so is it replaced with the results and reset button
		form.style.display = 'none';
		}

	}


// Function to make the reset button hide the message and show the form again
function resetForm() {
	resetButton.style.display = 'none';
	eraseButton.style.display = 'none';
	answer.style.display = 'none';
	form.style.display = 'block';
	form.reset();
	// add focus to the age field (this is not working and I don't know why)
	document.querySelector('.ageField').setAttribute('autofocus', 'true');
}	

// Function to clear previous entries
function eraseMessages() {
	answer.innerHTML = '';
	eraseButton.style.display = 'none';
}


// Function to add commas to separate thousands, which is used in the message displaying total amount of investment
function addCommas(x) {
  return x.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}


// Function to make hitting the 'return/enter' key trigger the button
var input = document.getElementById('form');
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("submitButton").click();
  }
});
