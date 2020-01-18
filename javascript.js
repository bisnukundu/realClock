let second = document.querySelector(".second")
let hour = document.querySelector(".hours")
let minute = document.querySelector(".minutes")


setInterval(function() {
	let date = new Date();
	let seconds = date.getSeconds()/60;
	let minutes = date.getMinutes()/60;
	let hours = date.getHours()/12;
	second.style= `transform:rotate(${seconds*360}deg)`
	minute.style = `transform:rotate(${minutes*360}deg)`
	hour.style = `transform:rotate(${hours*360}deg)`
}, 1000)