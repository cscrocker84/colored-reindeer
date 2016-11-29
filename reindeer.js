var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];


var hohohoElement = document.getElementById("coloredReindeer");
var arraySize = reindeer.length;


for (var i = 0; i < arraySize; i++) {
  var p = document.createElement("p");
  p.innerHTML = colors.shift() + " " + reindeer.shift();
  hohohoElement.appendChild(p);
}