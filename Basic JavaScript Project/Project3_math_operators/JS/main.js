function addition_Function() { //Adding//
    var addition = 2 + 2;
    document.getElementById("add") . innerHTML = "2 + 2 =" + addition;
}

function myFunction(p1, p2) {
    return p1 * p2;
}

function subtraction_Function() { //subtracting//
    var subtraction = 5 - 2;
    document.getElementById("subtract").innerHTML = "5 - 2 = " + subtraction;
}

function multiplication() { //mulitply//
    var simple_math = 3 * 4;
    document,getElementById ("mulitply").innerHTML = "3 * 4 = " + simple_math;
}

function division() { //divide//
    var simple_math = 48 / 6;
    document.getElementById("divide").innerHTML = " 48 / 6 = " + simple_math;
}

function more_math() { //mulitple math//
    var simple_math = (1 + 2) * 10 / 2 -5;
    document.getElementById("mulitple").innerHTML = "1 plus 2. multiplied by 10, divided in half and then subtracted by 5 equals " + simple_math;
}

function modulus_Operator() {
    var simple_Math = 25 % 6;
    document.getElementById("modulus").innerHTML = "when you divide 25 by 6 you have a remainder of: " + simple_Math;
}

function negation_Operator() { //negitive//
    var x = 10; 
    document.getElementById("negitive").innerHTML = -x;
}

var X = 5;
X++;
document.write(X);

var X = 5.25;
X--;
document.write(X);

window.alert(Math.random()); //random number//

document.getElementById("Pi").innerHTML = Math.PI;