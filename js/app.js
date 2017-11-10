do {
	var cardNumber = prompt("Ingresa el numero de tu tarjeta")
} while (cardNumber === '');

var arrayCardNumber =  Array.from(cardNumber);
console.log(arrayCardNumber);

