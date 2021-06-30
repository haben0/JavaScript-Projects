function full_Sentence() {      //Defining the function and naming it
    var part_1 = "I have ";     //Defining a variable and give it a string value
    var part_2 = "made this ";  
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate") .innerHTML = whole_sentence;//Putting the value of result into HTML element with "Concatenate"id
}

function slice_Method() {       //Defining the function and naming it
    var Sentence = "All work and no play makes Johnny a dull boy.";//Defining a variable and give it a string value
    var Section = Sentence.slice(27,33); 
    document.getElementById("Slice").innerHTML = Section; //Putting the value of result into HTML element with "Slice"id
}

function string_Method() {  //Defining the function and naming it
    var X =182;             //Defining a variable and give it a number value
    document.getElementById("Numbers_to_string").innerHTML = X.toString();//Putting the value of result into HTML element with "Numbers_to_string"id
}

function precision_Method() {   //Defining the function and naming it
    var X = 12938.3012987376112; //Defining a variable X and give it a string value
    document.getElementById("Precision").innerHTML = X.toPrecision(10);//Putting the value of result into HTML element with "Precision"id
}
