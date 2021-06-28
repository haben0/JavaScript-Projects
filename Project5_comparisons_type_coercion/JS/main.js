document.write(typeof "Word"); // output “string”
document.write("<br>")

document.write(typeof 3); //output “number” 
document.write("<br>")

document.write(2E310); //display positve “infinity” 
document.write("<br>")

document.write(-2E310);//display negetive “infinity”  
document.write("<br>")

document.write(10>2);   //output would be “true” because 10 is larger than 2.
document.write("<br>")

document.write(10<2);   // output “false” becasue 10 is not less that 2
document.write("<br>")

console.log (2+2);  // display output only in the console

document.write("10"+ 5);
document.write("<br>")

console.log (5<1)   // display output only in the console

document.write (10 == 10);// checking whether the data on the left side is equal to the data on the right side
document.write("<br>")

document.write (3 == 11);// checking whether the data on the left side is equal to the data on the right side
document.write("<br>")

X = 10; //Putting the value
Y = 10; //Putting the value
document.write (X === Y);   //checking whether the data on the left side is equal to the data on the right side
document.write("<br>")

A = 82; //Putting the value
B = "82"//Putting the value    
document.write(A ===B); //checking whether the data on the left side is equal to the data on the right side
document.write("<br>")

x = "Magnus";//Putting the value
y = "Magnus";//Putting the value
document.write(x === y) //checking whether the data on the left side is equal to the data on the right side
document.write("<br>")

document.write(5 > 2 && 10 > 4); // And && this would returns “true” because five is greater than two, and ten is greater than four
document.write("<br>")

document.write(5 > 10 && 10 > 4);// This will be false
document.write("<br>")

document.write (5 > 10 || 10 > 4);//or ||  This would return “true” because, while 5 is not greater than 10, 10 is greater than 4
document.write("<br>")

document.write (5 > 10 || 10 > 20);// This will be false
document.write("<br>")

function not_Function() { //Defining a function and naming it
    document.getElementById("Not").innerHTML = !(5>10);//Putting the value in to operator
                            //of result into HTML element with "Not"id      
}

function not_Function1() { //Defining a function and naming it
    document.getElementById("Not1").innerHTML = !(20>10);//Putting the value value in to operator
                                //of result into HTML element with "Not1"id      
}
