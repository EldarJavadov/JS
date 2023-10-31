// Task 1
let btn = document.getElementById('check');
let number = 100;
let counter = 0;
let randomNumber = Math.floor(Math.random() * number);



btn.onclick = function () {

	let inputValue = parseInt(document.getElementById('input').value);

	if ( randomNumber > inputValue ) {
		alert('Daha böyük rəqəm yazın');
		counter++;
	}
	if ( randomNumber < inputValue ) {
		alert('Daha kiçik rəqəm yazın');
		counter++;
	} 
	if ( randomNumber === inputValue ) {
		if ( counter === 0 ) {
			alert('Təbriklər siz ilk cəhdə düzgün tapdınız');
		} else {
			alert(`Təbriklər siz ${counter} cəhdə düzgün tapdınız`);
		}
		counter = 0;
		randomNumber = Math.floor(Math.random() * number);
		document.getElementById('input').value = '';
	}
	console.log(randomNumber);
}
//End of Task 1



// Task 2

// --------Variant 1
function checkString(str){

	let reversedStr = str.split('').reverse().join('');

	if ( str === reversedStr ) {
		console.log('true');
		return true;
	}else{
		console.log('false');
		return false;
	}
}
// -------- End of Variant 1


// --------Variant 2
function checkString2(str){

	let reversedStr = '';

	for (var i = str.length - 1; i >= 0; i--) {
		reversedStr += str[i];
	}


	if ( str === reversedStr ) {
		console.log('true');
		return true;
	}else{
		console.log('false');
		return false;
	}
}
// -------- End of Variant 2

//End of task 2