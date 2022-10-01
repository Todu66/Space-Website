// const Mars = document.querySelector(".mars");
const First = document.querySelector('.first');
const Second = document.querySelector('.second');
const Third = document.querySelector('.third');
const Fourth = document.querySelector('.fourth');

First.addEventListener('click', function() {
    First.style.backgroundColor = '#fff'
    Second.style.backgroundColor = '#333';
    Third.style.backgroundColor = '#333';
    Fourth.style.backgroundColor = '#333';
})

Second.addEventListener('click', function() {
    Second.style.backgroundColor = '#fff';
    First.style.backgroundColor = '#333';
    Third.style.backgroundColor = '#333';
    Fourth.style.backgroundColor = '#333';
})

Third.addEventListener('click', function() {
    First.style.backgroundColor = '#333';
    Second.style.backgroundColor = '#333';
    Third.style.backgroundColor = '#fff';
    Fourth.style.backgroundColor = '#333';
})

Fourth.addEventListener('click', function() {
    First.style.backgroundColor = '#333';
    Second.style.backgroundColor = '#333';
    Third.style.backgroundColor = '#333';
    Fourth.style.backgroundColor = '#fff';
})

