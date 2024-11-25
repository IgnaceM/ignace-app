const menuBtn = document.querySelector(".menuBtn");
const deleteBtn = document.querySelector(".deleteBtn");

function openMenu() {
	const menu = document.querySelector(".menu");
	const ombre = document.querySelector(".ombre");
	menu.style.transform = "translateX(0px)";
	ombre.style.display = "block";
}

function clauseMenu() {
	const menu = document.querySelector(".menu");
	const ombre = document.querySelector(".ombre");
	menu.style.transform = "translateX(850px)";
	ombre.style.display = "none";
}

window.addEventListener("load", () => {
	const theme = window.localStorage.getItem("theme");
	if (theme) {
		applyTheme(theme);
	}
});

function applyTheme(theme) {
	window.localStorage.setItem("theme", theme);

	switch (theme) {
		case "theme1":
			theme1();
			break;
		case "theme2":
			theme2();
			break;
		case "theme3":
			theme3();
			break;
		case "theme4":
			theme4();
			break;
		case "theme5":
			theme5();
			break;
		default:
			theme1();
	}
}

function theme1() {
	const body = document.querySelector("body");
	const header = document.querySelector("header");
	const container = document.querySelector(".container");
	const footer = document.querySelector("footer");
	const livreContent = document.querySelector(".livreContent");
	const menu = document.querySelector(".menu");

	body.classList.add("body");
	header.classList.add("body");
	container.classList.add("container");
	livreContent.classList.add("livreContent");
	footer.classList.add("footer");
	menu.classList.add("menu");
}

function theme2() {
	const body = document.querySelector("body");
	const header = document.querySelector("header");
	const container = document.querySelector(".container");
	const livreContent = document.querySelector(".livreContent");
	const menu = document.querySelector(".menu");
	const p = document.querySelectorAll("p");
	const h5 = document.querySelectorAll("h5");
	const footer = document.querySelector("footer");

	body.classList.add("white");
	header.classList.add("dark");
	container.style.background = "#fbf6fd";
	container.style.color = "black";
	body.style.background = "#fbf6fd";
	footer.classList.add("white");
	livreContent.classList.add("content");
	menu.classList.add("white");
}

function theme3() {
	const body = document.querySelector("body");
	const header = document.querySelector("header");
	const menu = document.querySelector(".menu");
	const container = document.querySelector(".container");
	const livreContent = document.querySelector(".livreContent");
	const p = document.querySelectorAll("p");
	const h3 = document.querySelectorAll("h3");
	const footer = document.querySelector("footer");

	body.classList.add("green");
	header.classList.add("green");
	container.classList.add("green");
	container.style.color = "white";
	body.style.background = "green";
	footer.classList.add("green");
	menu.classList.add("green");
}

function theme4() {
	const body = document.querySelector("body");
	const header = document.querySelector("header");
	const menu = document.querySelector(".menu");
	const container = document.querySelector(".container");
	const livreContent = document.querySelector(".livreContent");
	const p = document.querySelectorAll("p");
	const h3 = document.querySelectorAll("h3");
	const footer = document.querySelector("footer");

	body.classList.add("teal");
	header.classList.add("teal");
	container.classList.add("teal");
	container.style.color = "white";
	body.style.background = "green";
	footer.classList.add("teal");
	menu.classList.add("teal");
}

function theme5() {
	const body = document.querySelector("body");
	const header = document.querySelector("header");
	const menu = document.querySelector(".menu");
	const container = document.querySelector(".container");
	const livreContent = document.querySelector(".livreContent");
	const p = document.querySelectorAll("p");
	const h3 = document.querySelectorAll("h3");
	const footer = document.querySelector("footer");

	body.classList.add("black");
	header.classList.add("black");
	container.classList.add("black");
	container.style.color = "white";
	body.style.background = "black";
	footer.classList.add("black");
	menu.classList.add("black");
}
