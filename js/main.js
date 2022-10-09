// const Mars = document.querySelector(".mars");
const First = document.querySelector(".first");
const Second = document.querySelector(".second");
const Third = document.querySelector(".third");
const Fourth = document.querySelector(".fourth");

// START OF CREW
const rightImg = document.querySelector(".right_img");
const slideFirst = document.querySelector(".slide_first");
const slideSecond = document.querySelector(".slide_second");
const slideThird = document.querySelector(".slide_third");

// START OF TECHNOLOGY SLIDE
const techFirst = document.querySelector(".tech-first");
const techSecond = document.querySelector(".tech-second");
const techThird = document.querySelector(".tech-third");
// ----------------------------------------------------------------
// ----------------------------------------------------------------
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
const liEl = document.querySelector(".main-nav-list, .main-nav-link");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

liEl.addEventListener("click", function () {
  headerEl.classList.remove("nav-open");
});
// ------------------------------------------------------------------

//-----------------------------------------------------------
First.addEventListener("click", function () {
  First.style.backgroundColor = "#fff";
  Second.style.backgroundColor = "#333";
  Third.style.backgroundColor = "#333";
  Fourth.style.backgroundColor = "#333";
  // ----------------------------------------------
  slideFirst.textContent = "Commander ";
  slideSecond.textContent = "Douglas Hurley";
  slideThird.innerHTML =
    "Douglas Gerald Hurley is an American engineer, former <br> Marine Corps pilot and former NASA astronaut. He<br> launched into space for the third time as commander of<br> Crew Dragon Demo-2.";

  rightImg.src = "../starter-code/assets/crew/image-douglas-hurley.png";
});

Second.addEventListener("click", function () {
  Second.style.backgroundColor = "#fff";
  First.style.backgroundColor = "#333";
  Third.style.backgroundColor = "#333";
  Fourth.style.backgroundColor = "#333";
  // ----------------------------------------
  slideFirst.textContent = "Mission Specialist";
  slideSecond.textContent = "MARK SHUTTLEWORTH";
  slideThird.innerHTML =
    "Mark Richard Shuttleworth is the founder and CEO of <br> Canonical, the company behind the Linux-based Ubuntu <br> operating system. Shuttleworth became the first South <br> African to travel to space as a space tourist.";
  rightImg.src = "../starter-code/assets/crew/image-mark-shuttleworth.png";
});

Third.addEventListener("click", function () {
  First.style.backgroundColor = "#333";
  Second.style.backgroundColor = "#333";
  Third.style.backgroundColor = "#fff";
  Fourth.style.backgroundColor = "#333";
  // ------------------------------------------
  slideFirst.textContent = "PILOT";
  slideSecond.textContent = "Victor Glover";
  slideThird.innerHTML =
    "Pilot on the first operational flight of the SpaceX Crew<br> Dragon to the International Space Station. Glover is a<br> commander in the U.S. Navy where he pilots an F/A-18.He<br> was a crew member of Expedition 64, and served as a<br> station systems flight engineer. ";
  rightImg.src = "../starter-code/assets/crew/image-victor-glover.png";
});

Fourth.addEventListener("click", function () {
  First.style.backgroundColor = "#333";
  Second.style.backgroundColor = "#333";
  Third.style.backgroundColor = "#333";
  Fourth.style.backgroundColor = "#fff";

  // ------------------------------------------
  slideFirst.textContent = "Flight Engineer";
  slideSecond.textContent = "Anousheh Ansari";
  slideThird.innerHTML =
    "Anousheh Ansari is an Iranian American engineer and<br> co-founder of Prodea Systems. Ansari was the fourth<br> self-funded space tourist, the first self-funded woman to<br> fly to the ISS, and the first Iranian in space. ";
  rightImg.src = "../starter-code/assets/crew/image-anousheh-ansari.png";
});

// // -----------------------------------------
// // ------------START OF TECHNOLOGY SLIDE-------------
// techFirst.addEventListener('click', function() {
//     console.log("LOGG")
// });
