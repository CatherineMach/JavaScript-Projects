function my_Dictionary() {
    var Animal = { 
        Species:"Cat",
        Color:"Black",
        Breed:"Persian",
        Age:4,
        Sound:"Meow!"
    };
    delete Animal.Sound;
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}

document.write(typeof "Word");
document.write(typeof 3);
document.write ("10" + 5);