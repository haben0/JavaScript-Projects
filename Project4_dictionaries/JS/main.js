function my_Dictionary() {  //Defining a function and naming it 
    var Animal = {          //Defining the variables and give them a value
        species: "Dog",
        Color: "Black",
        Breed: "Labrador",
        Age: 5,
        Sound: "Bark!"
    };
    delete Animal.Sound     //Deleting the output code
    document.getElementById("Dictionary").innerHTML = Animal.Sound;//Putting the value
                            //of result into HTML element with "Dictionary" id 
}

