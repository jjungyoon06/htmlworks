// navbar_toggleBtn 항목을 toggleBtn에 입력

const toggleBtn = document.querySelector('.navbar_toggleBtn');
const menu = document.querySelector('.navbar_menu');
const icons = document.querySelector('.navbar_icons');

// toggleBtn이 클릭될 때마다 지정 함수를 호출하기
toggleBtn.addEventListener('click',() => {
    // menu와 icons의 classList중에 active class를 toggle하기
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});