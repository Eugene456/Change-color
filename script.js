'use strict';

const codeColor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'a', 'b', 'c', 'd', 'e', 'f'];


const changeColor = () =>{
	let res = '#';
	for (let i = 1; i <= 6; i++){
	let color = codeColor[Math.floor(Math.random()*16)];
	res += color;
}
	return res;
}

const body = document.querySelector('body'),
	 button = body.querySelector('button'),
	 div = body.querySelector('div');

button.addEventListener('click', () =>{
	body.style.background = changeColor();
	div.textContent = changeColor();
})




