var foodMenu = new XMLHttpRequest();
var selectTypeOfFood =  document.getElementById('typeOfFood');
var myMenuResult =  document.getElementById('getMyMenu');
myValue = selectTypeOfFood.value;


function loadFood() {
	foodMenu.open('GET', 'recipes.json', true);
	foodMenu.responseType = 'text';
	foodMenu.send();
}

loadFood();

foodMenu.onload = function() {
	if (foodMenu.status === 200) {
		food = JSON.parse(foodMenu.responseText);
		console.log(food);
		for (var i = 0; i < food.comida["0"][356].length; i++) {
			document.getElementById('menuResult').innerHTML += food.comida["0"][356][i];
		}
		// myMenuResult.onclick = function() {
		// 	drawResults();
		// };
	}
};

selectTypeOfFood.onchange = function() {
	myValue = selectTypeOfFood.value;
};

function drawResults() {
	document.getElementById('menuResut').innerHTML = food.myValue[1];
}
