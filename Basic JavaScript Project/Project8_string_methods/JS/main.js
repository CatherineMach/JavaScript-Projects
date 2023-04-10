//Slice() Method//
function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice") .innerHTML = Section;
}
//End Slice() Method//

//UpperCase Method//
let text1 = "Hello World!";
let result1 = text1.toUpperCase();
document.getElementById("UpperCase").innerHTML =result;
//End UpperCase Method//

//Search() Method//
let text2 = "Mr. Blue has a blue house"
let position = text2.search("Blue");
document.getElementById("Search").innerHTMl = position;
//End Search() Method//

//Number Method//
function string_Method() {
    var X =182;
    document.getElementById("Numbers_to_string") .innerHTML = X.toString();
}
//End Number Method//

//ToPrecision Method//
function precision_Method() {
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}
//End ToPrecision Method//

//tofixed method//
let num = 5.56789;
let n = num.toFixed();
document.getElementById("Fixed").innerHTML = n;
//End tofixed method//

//valueOf() method//
let text3 = "Hello World!";
let result2 = text.valueOf();
document.getElementById("value").innerHTML = result;
//end valueOF() method//