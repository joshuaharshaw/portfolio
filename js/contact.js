function makeHappy () {

	var textBox = document.getElementById("userText");

	var userText = textBox.value;

	var newText =userText.replace(/\./g, "!!");

	textBox.value = newText;
}

document.getElementById("happyButton").addEventListener('click', makeHappy);

