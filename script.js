var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var secretBtn = document.querySelector(".secret");

function loadingPage() {
	setGradient();
};

function setGradient() {
	body.style.background = 
		"linear-gradient(to right, "
		+ color1.value 
		+ ", " 
		+ color2.value 
		+ ")";
	css.textContent = body.style.background + ";"; //textContent - it adds the text of the content 
}

function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {

		// math.floor - returns the largest integer that is less
		//or equal to the given number
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
  }

function generateRandomColors() {
	color1.value = getRandomColor();
	color2.value = getRandomColor();
	setGradient(); // this line = to make sure that the background changes when the secret butotn is clicked
}

// once page is loaded (this is the trigger for the event) - do this function 
document.addEventListener("DOMContentLoaded", loadingPage)

//any time that the value in the input changes - we can detect that! 

color1.addEventListener("input", setGradient);
color2.addEventListener("input",setGradient);
secretBtn.addEventListener("click", generateRandomColors);
