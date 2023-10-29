// Task 1
function changeBgColor() {
	let R = Math.floor(Math.random() * 255);
	let G = Math.floor(Math.random() * 255);
	let B = Math.floor(Math.random() * 255);

	document.body.style.backgroundColor = 'rgb(' + R + ',' + G + ',' + B + ')';
}


setInterval(() => {
	changeBgColor()
}, 5000);
// End of Task 1



// Task 2
let btn = document.getElementById('btn');
let div = document.getElementById('div');


btn.onclick = function(){
	let width = div.offsetWidth;

	if ( width !== 0 ) {
		wth = width - 50;
		div.style.width = '' + wth + 'px';
	}
	else {
		console.log('No width');
	}
}
// End of Task 2


// Task 3
let str = 'mn201';

function changePlace(string) {
	let strArray = [];
	if ( typeof string === 'string') {
		let firstLetterOfString = string.slice(0,1);

		for (var i = 0; i <= string.length - 1; i++) {
			strArray.push(string[i]);
		}

		strArray.shift();
		strArray.push(firstLetterOfString);

		let arrayToString = strArray.toString();
		let changedStr = arrayToString.replaceAll(',','');

		console.log(changedStr);
	}
	else {
		console.log('It`s not a string');
	}
}


changePlace(str);
// End of Task 3