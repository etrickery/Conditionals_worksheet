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


//Inform user of intent of this application. Prompt user for fuel economy and set default if no value is chosen.
console.log("You have arrived at the last chance to purchase fuel for the next 200 miles. \nTo ensure your remaining fuel is sufficient to complete the journey, \nenter your vehicle's rate of fuel consumption (in miles per gallon).");

//Request user to input mpg (mpg)
mpg = prompt("Please enter your vehicle's fuel economy (Miles/Gallon):", 0);

//Created conditional statement to determine if value of mpg is a valid value, and if not, then set to default
if (mpg!=="0") {
    console.log("The fuel consumption rate will be set to " + mpg + "mpg.");

} else {
    console.log("The fuel consumption rate will be set to default (30mpg)");
    mpg = 30;
}

//Request user to input remaining fuel in percentage (left)
left = prompt("Please enter the remaining fuel (Percentage):", 0);

//Created conditional statement to determine if value of left is a valid value, and if not, then set to default
if (left!=="0") {
    console.log("The fuel tank has " + left + "% remaining.");

} else {
    console.log("The fuel remaining percentage has been set to default (100%).");
    left = 100;
}

//Request user to input fuel capacity in gallons (capacity)
capacity = prompt("Please enter your vehicle fuel capacity (in gallons):", 0);

//Created conditional statement to determine if value of capacity is a valid value, and if not, then set to default
if (capacity!=="0") {
    console.log("The fuel tank will hold " + capacity + " gallons of fuel.");

} else {
    console.log("The fuel tank capacity has been set to the default value (10gal).");
    capacity = 10;
}





//--------------------------------------
//Group 2: Multiple Results
//


//--------------------------------------
//Group 3: Multiple Conditions
//





