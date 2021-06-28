function my_Function() { //Defining a function and naming it
    document.getElementById("Test").innerHTML = 0/0;//Putting the value
                            //of result into HTML element with "Test"id        
}

function true_Function() {  //Defining a function and naming it
    document.getElementById("Test1").innerHTML = isNaN('This is a string');//Putting the value
                            //of result into HTML element with "Test1"id    
}

function false_Function() { //Defining a function and naming it
    document.getElementById("Test2").innerHTML = isNaN('007');//Putting the value
                            //of result into HTML element with "Test2"id    
}

