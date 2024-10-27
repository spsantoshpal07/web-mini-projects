var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("body");
var currentBackground = document.querySelector(".current");
var initialColor1Value = color1.value;
var initialColor2Value = color2.value;

var changeBackground = function(){
    body.setAttribute("style","background:linear-gradient(to right,"+color1.value+","+color2.value);
    currentBackground.textContent = body.style.background;
}

var onButtonClick = function(){
    body.setAttribute("style","background:linear-gradient(to right,"+initialColor1Value+","+initialColor2Value);
    currentBackground.textContent = body.style.background;
}

color1.addEventListener("input", changeBackground);
color2.addEventListener("input", changeBackground);

var resetButton = document.createElement("button");
body.appendChild(resetButton);
resetButton.appendChild(document.createTextNode("Reset"));
resetButton.addEventListener("click", onButtonClick);