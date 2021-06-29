//Nested Functions
function count_Function() { //Defining a function and naming it
    document.getElementById("Counting").innerHTML = Count () ;//Putting the value of result into HTML element with "Counting"id 
    function Count() {
        var Staring_point = 9; 
        function Plus_one() {Staring_point += 1;}//Nested Functions
        Plus_one() ;// outcome pluse one which would be “10”
        return Staring_point;
    }
}