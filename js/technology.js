
// START OF TECHNOLOGY SLIDE
const techFirst = document.querySelector(".tech-first");
const techSecond = document.querySelector(".tech-second");
const techThird = document.querySelector(".tech-third");
// TECHONOLGY P--------
const pFirst = document.querySelector(".p-first");
const pSecond = document.querySelector(".p-second")
const pThird = document.querySelector(".p-third")
// --------------------------------------------------

const rightFirstP = document.querySelector('.right-first-p');
const rightSecondP = document.querySelector('.right-second-p');
const rightThirdP = document.querySelector('.right-third-p');
// -----------------------------------
const imageRight = document.querySelector('.right_img');

techFirst.addEventListener('click', function() {
    techFirst.style.backgroundColor = "#fff"
    techSecond.style.backgroundColor = 'hsla(0, 0.1%, 0.1%, 0.1)';
    techThird.style.backgroundColor = 'hsla(0, 0.1%, 0.1%, 0.1)';
    pSecond.style.color = '#fff';
    pFirst.style.color = "#000"
    pThird.style.color = "#fff";
    // ----------------------------------------------------------
    
    rightSecondP.textContent = 'LAUNCH VEHICLE';
    rightThirdP.innerHTML = "A launch vehicle or carrier rocket is a rocket-propelled<br>\ vehicle used to carry a payload from Earth's surface to<br>\ space, usually to Earth orbit or beyond. Our WEB-X<br>\ carrier rocket is the most powerful in operation. Standing<br>\ 150 metres tall, it's quite an awe-inspiring sight on the<br>\ launch pad!"
    imageRight.src = '../starter-code/assets/technology/image-launch-vehicle-portrait.jpg'
});

techSecond.addEventListener('click', function() {
    techSecond.style.backgroundColor = '#fff';
    techFirst.style.backgroundColor = 'hsla(0, 0.1%, 0.1%, 0.1)';
    techThird.style.backgroundColor = 'hsla(0, 0.1%, 0.1%, 0.1)';
    pSecond.style.color = '#000';
    pFirst.style.color = "#fff";
    pThird.style.color = "#fff";

    // ------------------------------------------------------------
    rightSecondP.textContent = 'SPACEPORT';
    rightThirdP.innerHTML = 'A spaceport or cosmodrome is a site for launching (or<br>\ receiving) spacecraft, by analogy to the seaport for ships<br>\ or airport for aircraft. Based in the famous Cape<br>\ Canaveral, our spaceport is ideally situated to take<br>\ advantage of the Earth’s rotation for launch.'
    imageRight.src = '../starter-code/assets/technology/image-spaceport-portrait.jpg'
});

techThird.addEventListener('click', function() {
    techSecond.style.backgroundColor = 'hsla(0, 0.1%, 0.1%, 0.1)';
    techFirst.style.backgroundColor = 'hsla(0, 0.1%, 0.1%, 0.1)';
    techThird.style.backgroundColor = "#fff"
    pSecond.style.color = '#fff';
    pFirst.style.color = "#fff"
    pThird.style.color = "#000";

    // -------------------------------------------------------------
    rightSecondP.textContent = 'SPACE CAPSULE';
    rightThirdP.innerHTML = "A space capsule is an often-crewed spacecraft that uses <br>\ a blunt-body reentry capsule to reenter the Earth's <br>\ atmosphere without wings. Our capsule is where you'll<br>\ spend your time during the flight. It includes a space<br>\ gym, cinema, and plenty of other activities to keep you<br>\ entertained."
    imageRight.src = '../starter-code/assets/technology/image-space-capsule-portrait.jpg'
});