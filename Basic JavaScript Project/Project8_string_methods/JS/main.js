//Slice() Method//
function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice") .innerHTML = Section;
}
//End Slice() Method//

//UpperCase Method//
let text = "Hello World!";
let result = text.toUpperCase();
document.getElementById("UpperCase").innerHTML = result;
//End UpperCase Method//

//Search() Method//
let text = "Mr. Blue has a blue house"
let position = text.search("Blue");
document.getElementById("Search").innerHTMl = position;