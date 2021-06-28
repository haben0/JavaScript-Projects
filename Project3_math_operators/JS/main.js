function addition_Function() { //Defining a function and naming it 
    var addition = 2 + 2;      //Defining a variable and give it a value
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition;  //Putting the value
                            //of result into HTML element with "Math" id
}

function subtraction_Function() {//Defining a function and naming it 
    var Subtraction = 5 - 2;     //Defining a variable and give it a value
    document.getElementById("Mathsub") .innerHTML = "5 - 2 = " + Subtraction;//Putting the value
                                 //of result into HTML element with "Mathsub" id    
}

function multiplication() { //Defining a function and naming it 
    var simple_math = 6 * 8;//Defining a variable and give it a value
    document.getElementById("Mathmulti") .innerHTML = "6 * 8 = " + simple_math;  //Putting the value
                            //of result into HTML element with "Mathmulti" id      
}

function division() {       //Defining a function and naming it 
    var simple_div = 48 / 6;//Defining a variable and give it a value
    document.getElementById("Mathdiv").innerHTML = "48 / 6 = " + simple_div; //Putting the value
                            //of result into HTML element with "Mathdiv" id
}

function more_Math() {                             //Defining a function and naming it
    var simple_Calculation = (1 + 2) * 10 / 2 -5;  //Defining a variable and give it a value
    document.getElementById("Mathcal").innerHTML ="1 plus 2 muliplied by 10, divided in half then substracted by 5 equals " + simple_Calculation;//Putting the value
                                                //of result into HTML element with "Mathcal" id 
}

function modulus_Operato() {//Defining a function and naming it
    var  simple_cal= 25 / 6;//Defining a variable and give it a value
    document.getElementById("Mathdivsion").innerHTML ="When you divide 25 by 6 you have a remainder of: " + simple_cal;//Putting the value
                            //of result into HTML element with "Mathdivsion" id 
}

function negation_Operator() { //Defining a function and naming it
    var x = 10;                //Defining a variable and give it a value
    document.getElementById("Mathno").innerHTML = -x;//Putting the value
                               //of result into HTML element with "Mathno" id 
}

var X = 5.25;//Defining a variable and give it a value
X--;//X to decrement  
document.write (X);// writing the result

window.alert(Math.round());// creating roundm alert

