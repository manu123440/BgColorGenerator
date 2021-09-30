let resultEl = document.getElementById('result-el');
let clrBtn = document.getElementById('clr-btn');

let array = [0, 1, 2, 3, 4 , 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

clrBtn.addEventListener("click", function() {
	let colors = `#${getRandom()}`;
	document.body.style.background = colors;
	resultEl.innerHTML = colors;
})

function getRandom() {
	let color = "";
	for (let i = 0; i < 6; i++) {
		color += array[Math.floor(Math.random() * array.length)];
	}
	return color;
} 