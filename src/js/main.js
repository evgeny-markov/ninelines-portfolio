import './vendor';

// Checkbox for arrow

let checkbox = document.querySelectorAll('.checkbox');

for(let i = 0; i < checkbox.length; i++) {
	checkbox[i].onclick = arrowScale;
};

arrowScale();

function arrowScale() {
	let checkboxChecked = document.querySelectorAll('.checkbox:checked');
	let arrow = document.querySelector('.javascript__arrow');

	for(let i = 0; i < checkboxChecked.length; i++) {
		let check = 0;
		check = checkboxChecked.length * 15 ;
		arrow.style.transform = 'rotate(' + check + 'deg)';
	};
};

// Timer for js skill

let number = document.querySelector('.javascript__number h3');

window.onload = function() {
	let numberTimer = setInterval(function() {
		let numberData = number.getAttribute('data-number');

		if(numberData < 70) {
			number.setAttribute('data-number', parseInt(numberData) + 1);
		} else {
			clearInterval(numberTimer);
		};

		number.innerHTML = numberData;
		console.log(numberData)
	}, 50);
};
