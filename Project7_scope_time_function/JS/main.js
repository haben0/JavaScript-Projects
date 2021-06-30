//A Global variable
var X = 10;                 // Naming the varible X to value of 10 outside of the function
function Add_number_1() {   //Defining the first function and naming it
    document.write(20 +  X + "<br>") // Write the result of the calculation
}
function Add_number_2() {   //Defining the second function and naming it
    document.write(X + 100 + "<br>"); // Write the result of the calculation
}
Add_number_1(); //Display Function Add_number_1()
Add_number_2(); //Display Function Add_number_2()

// Local variable - debug it within the console 
function Add_number_3() {   //Defining the function and naming it
    var Y = 10              // Naming the varible Y to value of 10 inside the function
    document.write(20 +  Y + "<br>")// Write the result of the calculation
}
function Add_number_4() {   //Defining the function and naming it
    document.write(Y + 100 + "<br>");// Write the result of the calculation
}
Add_number_3();//Display Function Add_number_1()
Add_number_4();//Display Function Add_number_2() 

//If Statement
function get_Full_Year() {
    if (new Date() .getFullYear = 2021) { 
        document.getElementById("Year").innerHTML = "The year is 2021";
    }
}