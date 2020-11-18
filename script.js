// JavaScript Document

var hourHand = document.getElementById('hourHand'); // hourHand - target id for hour hand in the img
var minuteHand = document.getElementById('minuteHand'); // minuteHand - target id for minute hand in the img
var secondHand = document.getElementById('secondHand'); // secondHand - target id for second hand in the img

 //display time
function drawClock(){
	var date = new Date();
	console.log(date); // shows on console-inspect webpage
	var hour = date.getHours() % 12;
	var minute = date.getMinutes();
	var second = date.getSeconds();
	
	console.log("Hours:" + hour + "Minute:" + minute + "Second:" + second);

var hourDeg = (hour * 30) + (0.5 * minute); //places the hour hand on correct time
var minuteDeg = (minute * 6)  + (0.1 * second); //places the minute hand on correct time
var secondDeg = second * 6; //places the second hand on correct time

//calculate angle
hourHand.style.transform = 'rotate(' + hourDeg + 'deg)';
minuteHand.style.transform = 'rotate(' + minuteDeg + 'deg)';
secondHand.style.transform = 'rotate(' + secondDeg + 'deg)';

setInterval(drawClock, 1000); //run the drawClock function every second.
}

drawClock(); //clock