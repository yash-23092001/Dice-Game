var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImage1 = "images/dice" + randomNumber1 + ".png";
var randomImage2 = "images/dice" + randomNumber2 + ".png";

document.getElementsByClassName("img1")[0].setAttribute("src", randomImage1);
document.getElementsByClassName("img2")[0].setAttribute("src", randomImage2);

var result = document.querySelector(".container h1")
if (randomNumber1 > randomNumber2) {
    result.innerHTML = "Player 1 Wins !";
} else if (randomNumber1 < randomNumber2) {
    result.innerHTML = "Player 2 Wins !";
} else {
    result.innerHTML = "Draw !";
}