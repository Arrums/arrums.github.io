// Navbar color change

const navBar = document.querySelector(".navbar");
const sectionOne = document.querySelector(".landing-page");

const sectionOneOptions = {
	rootMargin: " -200px 0px 0px 0px",
};

const sectionOneObserver = new IntersectionObserver(function (
	entries,
	sectionOneObserver,
) {
	entries.forEach((entry) => {
		if (!entry.isIntersecting) {
			navBar.classList.add("nav-scrolled");
		} else {
			navBar.classList.remove("nav-scrolled");
		}
	});
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);

// Hamburger menu

// const navBtn = document.querySelector(".nav-btn");
// const navList = document.querySelector(".nav-list");

// navBtn.addEventListener("click", () => {
// 	navBtn.classList.toggle("active");
// 	navList.classList.toggle("active");
// });

// document.querySelectorAll(".list-item__link").forEach((n) =>
// 	n.addEventListener("click", () => {
// 		navBtn.classList.remove("active");
// 		navList.classList.toggle("active");
// 	}),
// );

//Updating year

updateYear = () => {
	let year = new Date().getFullYear();

	document.getElementById("currentYear").innerHTML = year;
};

updateYear();
