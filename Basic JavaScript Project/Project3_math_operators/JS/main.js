function addition_Function() {
    var addition = 2 + 2;
    document.getElementById("add") . innerHTML = "2 + 2 =" + addition;
}

function myFunction(p1, p2) {
    return p1 * p2;
}

function subtraction_Function() {
    var subtraction = 5 - 2;
    document.getElementById("subtract").innerHTML = "5 - 2 = " + subtraction;
}

function multiplication() {
    var simple_math = 3 * 4;
    document,getElementById ("mulitply").innerHTML = "3 * 4 = " + simple_math;
}

function division() {
    var simple_math = 48 / 6;
    document.getElementById("divide").innerHTML = " 48 / 6 = " + simple_math;
}

function more_math() {
    var simple_math = (1 + 2) * 10 / 2 -5;
    document.getElementById("mulitple").innerHTML = "1 plus 2. multiplied by 10, divided in half and then subtracted by 5 equals " + simple_math;
}

function modulus_Operator() {
    var simple_Math = 25 % 6;
    document.getElementById("modulus").innerhtml = "when you divide 25 by 6 you have a remainder of: " + simple_Math;
}

function negation_Operator() {
    var x = 10;
    document.getElementById("negitive").innerHTML = -x;
}