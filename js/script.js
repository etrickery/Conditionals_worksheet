//Eric Pfister
//February 16th, 2015
//SDI 1502
//Section 01
//Activity: Conditionals Worksheet

//--------------------------------------
//Group 1: Expressions with Conditionals
//Last chance for gas

//Define variables
var mpg = 30;               //Fuel consumption rate for user's vehicle
var left = 100;             //Fuel remaining (percentage)
var capacity = 10;          //Fuel tank capacity (in gallons)
var distance = 200;         //Distance to be travelled (200 miles)
var stopForFuel = true;     //Boolean variable "Should user stop to purchase fuel?"


//Prompt user for fuel economy and set default if no value is chosen.
console.log("You have arrived at the last chance to purchase fuel for the next 200 miles. \nTo ensure your remaining fuel is sufficient to complete the journey, \nenter your vehicle's rate of fuel consumption (in miles per gallon).");
mpg = prompt("Please enter your vehicle's fuel economy (Miles/Gallon)", 0);
if (mpg!==0) {
    console.log("Thank you. The fuel consumption rate will be set to " + mpg + "mpg.");
} else {
    console.log("The fuel consumption rate will be set to default (30mpg)");
    mpg = 30;
}







//--------------------------------------
//Group 2: Multiple Results
//


//--------------------------------------
//Group 3: Multiple Conditions
//





