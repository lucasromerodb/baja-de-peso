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
		drawResults();
	}
};

// selectTypeOfFood.onchange = function() {
// 	myValue = selectTypeOfFood.value;
// };

selectTypeOfFood.addEventListener('change', typeOfFood);

function typeOfFood() {
	const foodValue = selectTypeOfFood.options[selectTypeOfFood.selectedIndex].value;
	return foodValue;
}

function drawResults() {
	const menuResult = document.getElementById('menuResult');
	const type =Math.round(Math.random());
	console.log('type', type);
	const item = food[type];
	console.log('type length', food[type].length);
	menuResult.innerHTML = item
	console.log(item);
	// for (var i = 0; i < food.comida[type][356].length; i++) {
	// 	menuResult.innerHTML += food.comida[type][356][i];
	// }
}

myMenuResult.addEventListener('click', drawResults);
