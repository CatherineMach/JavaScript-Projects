function my_Dictionary() {
    var Amimal = { 
        Species:"Cat",
        Color:"Black",
        Breed:"Persian",
        Age:4,
        Sound:"Meow!"
    };
    delete Animal.Sound;
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}