document.write(typeof "Word");
document.write(typeof 3);
document.write("10" + 5);

document.write(2E310);
document.write(-3E310);
document.write(10 > 2);
document.write(10 < 2);
console.log(2 + 2);
console.log(10 < 2);
document.write(10==10);
document.write(3==11);


X = 10;
Y = 10;
document.write(X === Y);

M = 14;
J = 4;
document.write(M === J);

B = 82;
C = "82";
document.write(B === C);

G = "Magnus";
H = "Magnus";
document.write (G === H);

//Logical Operators//

document.write(5 > 2 && 10 > 4);
document.write(5 > 10 && 10 > 4);
document.write(5 > 10 || 10 > 4);
document.write(5 > 10 || 10 > 20);

//End Logical Operators//

function not_Function() {
    document.getElementById("Not") .innerHTML = !(20 > 10);
}

function not_Function() {
    document.getElementById("Not2") .innerHTML = !(5 > 10);
}