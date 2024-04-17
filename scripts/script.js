let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

document.querySelector('#search-icon').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.remove('active');
}


var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
    delay: 4500,
    disableOnInteraction: false,
    },
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    loop:true,
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
    delay: 7500,
    disableOnInteraction: false,
    },
    loop:true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});





function goToNewPage() {
    // Переход на новую страницу при клике на элемент с классом box
    window.location.href = '/i1/index1.html';
}

function goToNewPage1() {
    // Переход на новую страницу при клике на элемент с классом box
    window.location.href = '/i2/index2.html';
}

function goToNewPage2() {
    // Переход на новую страницу при клике на элемент с классом box
    window.location.href = '/i3/index3.html';
}

function goToNewPage3() {
    // Переход на новую страницу при клике на элемент с классом box
    window.location.href = '/i4/index4.html';
}

function goToNewPage4() {
    // Переход на новую страницу при клике на элемент с классом box
    window.location.href = '/ib5/index5.html';
}

function goToNewPageB() {
    // Переход на новую страницу при клике на элемент с классом box
    window.location.href = 'Буфет.html';
}


function goToNewPageMain() {
    // Переход на новую страницу при клике на элемент с классом box
    window.location.href = '../index.html';
}

function goToNewPageMainB() {
    // Переход на новую страницу при клике на элемент с классом box
    window.location.href = 'index.html';
}




function DirectoryN1B1() {
    // Переход на новую страницу при клике на элемент с классом box
    window.location.href = 'ПервыеБ.html';
}

function DirectoryN1B2() {
    // Переход на новую страницу при клике на элемент с классом box
    window.location.href = 'ВторыеБ.html';
}

function DirectoryN1B3() {
    // Переход на новую страницу при клике на элемент с классом box
    window.location.href = 'Десерты.html';
}

function DirectoryN1B4() {
    // Переход на новую страницу при клике на элемент с классом box
    window.location.href = 'Напитки.html';
}

function DirectoryN1B5() {
    // Переход на новую страницу при клике на элемент с классом box
    window.location.href = 'Закуски.html';
}

function DirectoryN1B6() {
    // Переход на новую страницу при клике на элемент с классом box
    window.location.href = 'Буфет.html';
}

function DirectoryN1B1Main() {
    // Переход на новую страницу при клике на элемент с классом box
    window.location.href = 'index1.html';
}





function DirectoryN2B1() {
    // Переход на новую страницу при клике на элемент с классом box
    window.location.href = 'ПервыеБ.html';
}

function DirectoryN2B2() {
    // Переход на новую страницу при клике на элемент с классом box
    window.location.href = 'ВторыеБ.html';
}

function DirectoryN2B3() {
    // Переход на новую страницу при клике на элемент с классом box
    window.location.href = 'Десерты.html';
}

function DirectoryN2B4() {
    // Переход на новую страницу при клике на элемент с классом box
    window.location.href = 'Напитки.html';
}

function DirectoryN2B5() {
    // Переход на новую страницу при клике на элемент с классом box
    window.location.href = 'Закуски.html';
}

function DirectoryN2B6() {
    // Переход на новую страницу при клике на элемент с классом box
    window.location.href = 'Буфет.html';
}

function DirectoryN2B1Main() {
    // Переход на новую страницу при клике на элемент с классом box
    window.location.href = 'index2.html';
}



function DirectoryN3B1() {
    // Переход на новую страницу при клике на элемент с классом box
    window.location.href = 'ПервыеБ.html';
}

function DirectoryN3B2() {
    // Переход на новую страницу при клике на элемент с классом box
    window.location.href = 'ВторыеБ.html';
}

function DirectoryN3B3() {
    // Переход на новую страницу при клике на элемент с классом box
    window.location.href = 'Десерты.html';
}

function DirectoryN3B4() {
    // Переход на новую страницу при клике на элемент с классом box
    window.location.href = 'Напитки.html';
}

function DirectoryN3B5() {
    // Переход на новую страницу при клике на элемент с классом box
    window.location.href = 'Закуски.html';
}

function DirectoryN3B6() {
    // Переход на новую страницу при клике на элемент с классом box
    window.location.href = 'Буфет.html';
}

function DirectoryN3B1Main() {
    // Переход на новую страницу при клике на элемент с классом box
    window.location.href = 'index3.html';
}




function DirectoryN4B1() {
    // Переход на новую страницу при клике на элемент с классом box
    window.location.href = 'ПервыеБ.html';
}

function DirectoryN4B2() {
    // Переход на новую страницу при клике на элемент с классом box
    window.location.href = 'ВторыеБ.html';
}

function DirectoryN4B3() {
    // Переход на новую страницу при клике на элемент с классом box
    window.location.href = 'Десерты.html';
}

function DirectoryN4B4() {
    // Переход на новую страницу при клике на элемент с классом box
    window.location.href = 'Напитки.html';
}

function DirectoryN4B5() {
    // Переход на новую страницу при клике на элемент с классом box
    window.location.href = 'Закуски.html';
}

function DirectoryN4B6() {
    // Переход на новую страницу при клике на элемент с классом box
    window.location.href = 'Буфет.html';
}

function DirectoryN4B1Main() {
    // Переход на новую страницу при клике на элемент с классом box
    window.location.href = 'index4.html';
}



function DirectoryN5B1() {
    // Переход на новую страницу при клике на элемент с классом box
    window.location.href = 'ПервыеБ.html';
}

function DirectoryN5B2() {
    // Переход на новую страницу при клике на элемент с классом box
    window.location.href = 'ВторыеБ.html';
}

function DirectoryN5B3() {
    // Переход на новую страницу при клике на элемент с классом box
    window.location.href = 'Десерты.html';
}

function DirectoryN5B4() {
    // Переход на новую страницу при клике на элемент с классом box
    window.location.href = 'Напитки.html';
}

function DirectoryN5B5() {
    // Переход на новую страницу при клике на элемент с классом box
    window.location.href = 'Закуски.html';
}

function DirectoryN5B6() {
    // Переход на новую страницу при клике на элемент с классом box
    window.location.href = 'Буфет.html';
}

function DirectoryN5B1Main() {
    // Переход на новую страницу при клике на элемент с классом box
    window.location.href = 'index5.html';
}







