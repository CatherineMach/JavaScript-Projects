function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Age").value;
    Can_ride = (Height < 18) ? "You aren't 18 or older to vote":"You are able to vote";
    document.getElementById("Ride").innerHTML = Can_ride + " this year.";
}

function Dog (Breed, Color, Age, Weight) {
    this.Dog_Breed = Breed;
    this.Dog_Color = Color;
    this.Dog_Age = Age;
    this.Dog_Weight = Weight;
}
var Jax = new Dog("Yorkie", "Tan", 2, "10 lbs");
var Potter = new Dog("Poodle Mix", "Black", 4, "13 lbs");
var Luna = new Dog("Husky", "Grey/White", 6, "40 lbs");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Jax is a " + Jax.Dog_Color + "-colored " + Jax.Dog_Breed +
    " that is " + Jax.Dog_Age;
}

function Nested_Function() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}