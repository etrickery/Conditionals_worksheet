//Eric Pfister
//February 16th, 2015
//SDI 1502
//Section 01
//Activity: Conditionals Worksheet

//--------------------------------------
//Group 1: Expressions with Conditionals
//Last chance for gas
/*
//Define variables
var mpg = 30;               //Fuel consumption rate for user's vehicle
var left = 100;             //Fuel remaining (percentage)
var capacity = 10;          //Fuel tank capacity (in gallons)
var distance = 200;         //Distance to be travelled (200 miles)
var stopForFuel = true;     //Boolean variable "Should user stop to purchase fuel?"


//Inform user of intent of this application. Prompt user for fuel economy and set default if no value is chosen.
console.log("You have arrived at the last chance to purchase fuel for the next 200 miles. \nTo ensure your remaining fuel is sufficient to complete the journey, \nenter your vehicle's rate of fuel consumption (in miles per gallon).");



//When prompting users to input variable values, the alert box will carry a default value. If the user does not change the
//value of the variable, it will be set to a default value. This value is determined by the following conditional
//statements. Each conditional statement will check the value of the variable, then set to default if the user has not
//input a different value. The conditional statement will display the results accordingly.



//Request user to input mpg (mpg)
mpg = prompt("Please enter your vehicle's fuel economy (Miles/Gallon):", 0);        //var mpg

//Created conditional statement to determine if value of mpg is a valid value, and if not, then set to default
if (mpg!=="0") {
    console.log("The fuel consumption rate will be set to " + mpg + "mpg.");        //if user input mpg, then display it

} else {
    console.log("The fuel consumption rate will be set to default (30mpg).");       //else set to default and display it
    mpg = 30;
}


//Request user to input remaining fuel in percentage (left)
left = prompt("Please enter the remaining fuel (Percentage):", 0);                  //var left

//Created conditional statement to determine if value of left is a valid value, and if not, then set to default
if (left!=="0") {
    console.log("The fuel tank has " + left + "% remaining.");                      //if user input left, display it

} else {
    console.log("The fuel remaining percentage has been set to default (100%).");   //else set to default, display it
    left = 100;
}


//Request user to input fuel capacity in gallons (capacity)
capacity = prompt("Please enter your vehicle fuel capacity (in gallons):", 0);      //var capacity

//Created conditional statement to determine if value of capacity is a valid value, and if not, then set to default
if (capacity!=="0") {
    console.log("The fuel tank will hold " + capacity + " gallons of fuel.");       //if user input capacity, display it

} else {
    console.log("The fuel tank capacity has been set to the default value (10gal).");  //else set to default and display it
    capacity = 10;
}

//Display inputs in a concatenated statement
console.log("A vehicle gets " + mpg + " miles per gallon. The vehicle holds " + capacity + " gallons and is " + left + "% full.");


//calculations
if ((((left / 100) * capacity) * mpg) >= distance) {
    //calculate distance to empty, if greater than or equal to 200, then yes you can make it
    console.log("Yes, you can make it without stopping for fuel!");

} else {
    //else better stop now
    console.log("You only have " + (capacity * left) + " gallons of gas in your tank, better get gas now while you can!");

}











//--------------------------------------
//Group 2: Multiple Results
//Check the login


var userName;       //Correct username
var password;       //Correct password
var inputUserName;  //Username entered by user
var inputPassword;  //Password entered by user

userName = "Mr.Jones";                                          //Default login
password = "MyPass01";                                          //Default password

inputUserName = prompt("Please enter your username:");          //Request login from user
inputPassword = prompt("Please enter your password:");          //Request password from user

if (inputUserName !== userName) {                               //If username doesn't match, display error
    console.log("User not found. Try again.");
} else {                                                        //Else, if username does match, continue
    if (inputPassword !== password) {                           //If password doesn't match, display error
        console.log("Password does not match our records.");
    } else {                                                    //Else, if both match, display welcome message
        console.log("Welcome, " + inputUserName + "!");
    }
}







*/



//--------------------------------------
//Group 3: Multiple Conditions
//Tire Pressure

var tirePressure = [0, 1, 2, 3];            //Current tire pressure, to be input by user
var tirePresSpec = [0, 1, 2, 3];

tirePresSpec[0] = 60;
tirePresSpec[1] = 60;
tirePresSpec[2] = 80;
tirePresSpec[3] = 80;


