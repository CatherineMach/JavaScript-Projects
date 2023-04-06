function my_Dictionary() {
    var Animal = { 
        Species:"Dog",
        Color:"Black",
        Breed:"Lab",
        Age:4,
        Sound:"Woof!"
    };
document.getElementById("Dictionary").innerHTML = Animal.Sound;
}