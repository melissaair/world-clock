function updateTime() {
	// Los Angeles

	let losAngelesElement = document.querySelector("#los-angeles");
	let losAngelesDateElement = losAngelesElement.querySelector(".date");
	let losAngelesTimeElement = losAngelesElement.querySelector(".time");
	let losAngelesTime = moment().tz("America/Los_Angeles");

	losAngelesDateElement.innerHTML = losAngelesTime.format("dddd MMMM Do, YYYY");
	losAngelesTimeElement.innerHTML = losAngelesTime.format(
		"h:mm:ss [<small>]A[</small>]"
	);

	// Paris

	let aucklandElement = document.querySelector("#auckland");
	let aucklandDateElement = aucklandElement.querySelector(".date");
	let aucklandTimeElement = aucklandElement.querySelector(".time");
	let aucklandTime = moment().tz("Pacific/Auckland");

	aucklandDateElement.innerHTML = aucklandTime.format("dddd MMMM Do, YYYY");
	aucklandTimeElement.innerHTML = aucklandTime.format(
		"h:mm:ss [<small>]A[</small>]"
	);

	// New York

	let newYorkElement = document.querySelector("#new-york");
	let newYorkDateElement = newYorkElement.querySelector(".date");
	let newYorkTimeElement = newYorkElement.querySelector(".time");
	let newYorkTime = moment().tz("America/New_York");

	newYorkDateElement.innerHTML = newYorkTime.format("dddd MMMM Do, YYYY");
	newYorkTimeElement.innerHTML = newYorkTime.format(
		"h:mm:ss [<small>]A[</small>]"
	);
}

updateTime();
setInterval(updateTime, 1000);
