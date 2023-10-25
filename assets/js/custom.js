let date = new Date();

let h = date.getHours();
	h = h.toString();

let i = date.getMinutes();
	i = i.toString();
	
let s = date.getSeconds();
	s = s.toString();


if ( h.substring(0,1) === 0 ) h = h.substring(1,2);
if ( i.substring(0,1) === 0 ) i = i.substring(1,2);
if ( s.substring(0,1) === 0 ) s = s.substring(1,2);



if ( ( h >= 6 && h <= 12 ) && i <= 59 && s <= 59)  {
	alert('Sabahiniz xeyir.');
	document.body.style.background = '#ffa700';
}
else if ( ( h > 12 && h <= 18 ) && i <= 59 && s <= 59) {
	alert('Her vaxtiniz xeyir.');
	document.body.style.background = '#ff6700';
}
else if ( ( h > 18 && h <= 23 ) && i <= 59 && s <= 59) {
	alert('Axsaminiz xeyir.');
	document.body.style.background = '#938e8e';	
}
else{
	alert('Geceniz xeyire qarsi.');
	document.body.style.background = '#000';
	document.querySelector('p').style.color = '#fff';		
}