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


document.getElementById('back-button').addEventListener('click', () => {
    history.back();
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
    window.location.href = '/i5/index4.html';
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

// Исправленные селекторы элементов
let cartIcon = document.querySelector('#cart-icon');
let cart = document.querySelector('.cart');
let closeCart = document.querySelector('#close-cart');

// Открываем корзину при клике на иконку корзины
cartIcon.onclick = () => {
    cart.classList.add("active");
}

// Закрываем корзину при клике на кнопку закрытия
closeCart.onclick = () => {
    cart.classList.remove("active");
}

// Проверяем, что документ загружается, и добавляем обработчики событий
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready();
}

function ready() {
    loadCartFromLocalStorage();

    var removeCartButtons = document.getElementsByClassName('cart-remove');
    for (var i = 0; i < removeCartButtons.length; i++) {
        var button = removeCartButtons[i];
        button.addEventListener('click', removeCartItem);
    }

    var quantityInputs = document.getElementsByClassName("cart-quantity");
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i];
        input.addEventListener("change", quantityChanged);
    }

    var addCartButtons = document.getElementsByClassName("btn");
    for (var i = 0; i < addCartButtons.length; i++) {
        var button = addCartButtons[i];
        button.addEventListener("click", addCartClicked);
    }

    document.getElementsByClassName("btn-buy")[0].addEventListener("click", buyButtonClicked);
}

function buyButtonClicked() {
    alert('Спасибо за заказ');
    var cartContent = document.getElementsByClassName("cart-content")[0];
    while (cartContent.hasChildNodes()) {
        cartContent.removeChild(cartContent.firstChild);
    }
    updateTotal();
    saveCartToLocalStorage();
}

function removeCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updateTotal();
    saveCartToLocalStorage();
}

function quantityChanged(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updateTotal();
    saveCartToLocalStorage();
}

function addCartClicked(event) {
    var button = event.target;
    var shopProducts = button.parentElement.parentElement;
    var title = shopProducts.getElementsByClassName('product-title')[0].innerText;
    var price = shopProducts.getElementsByClassName('price')[0].innerText;
    var productImg = shopProducts.getElementsByClassName('product-img')[0].src;
    addProductToCart(title, price, productImg);
    updateTotal();
    saveCartToLocalStorage();
}

function addProductToCart(title, price, productImg) {
    var cartShopBox = document.createElement("div");
    cartShopBox.classList.add('cart-box');
    var cartItems = document.getElementsByClassName('cart-content')[0];
    var cartItemsNames = cartItems.getElementsByClassName('cart-product-title');

    for (var i = 0; i < cartItemsNames.length; i++) {
        if (cartItemsNames[i].textContent.trim() === title.trim()) {
            alert("Ты уже заказал этот товар");
            return;
        }
    }

    var cartBoxContent = `
        <img src="${productImg}" alt="" class="cart-img">
        <div class="detail-box">
            <div class="cart-product-title">${title}</div>
            <div class="cart-price">${price}</div>
            <input type="number" value="1" class="cart-quantity">
        </div>
        <i class='bx bxs-trash-alt cart-remove'></i>
    `;
    cartShopBox.innerHTML = cartBoxContent;
    cartItems.append(cartShopBox);

    cartShopBox.getElementsByClassName('cart-remove')[0].addEventListener('click', removeCartItem);
    cartShopBox.getElementsByClassName('cart-quantity')[0].addEventListener('change', quantityChanged);

    saveCartToLocalStorage();
}

function updateTotal() {
    var cartContent = document.getElementsByClassName('cart-content')[0];
    var cartBoxes = cartContent.getElementsByClassName('cart-box');
    var total = 0;

    for (var i = 0; i < cartBoxes.length; i++) {
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName('cart-price')[0];
        var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
        var price = parseFloat(priceElement.innerText.replace("₽", ""));
        var quantity = quantityElement.value;
        total += price * quantity;
    }

    total = Math.round(total * 100) / 100;
    document.getElementsByClassName("total-price")[0].innerText = "₽" + total;
}

function saveCartToLocalStorage() {
    var cartContent = document.getElementsByClassName('cart-content')[0];
    var cartBoxes = cartContent.getElementsByClassName('cart-box');
    var cartItems = [];

    for (var i = 0; i < cartBoxes.length; i++) {
        var cartBox = cartBoxes[i];
        var title = cartBox.getElementsByClassName('cart-product-title')[0].innerText;
        var price = cartBox.getElementsByClassName('cart-price')[0].innerText;
        var productImg = cartBox.getElementsByClassName('cart-img')[0].src;
        var quantity = cartBox.getElementsByClassName('cart-quantity')[0].value;

        cartItems.push({
            title: title,
            price: price,
            productImg: productImg,
            quantity: quantity
        });
    }

    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

function loadCartFromLocalStorage() {
    var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    for (var i = 0; i < cartItems.length; i++) {
        var item = cartItems[i];
        addProductToCart(item.title, item.price, item.productImg);
        var cartContent = document.getElementsByClassName('cart-content')[0];
        var cartBoxes = cartContent.getElementsByClassName('cart-box');
        var lastCartBox = cartBoxes[cartBoxes.length - 1];
        lastCartBox.getElementsByClassName('cart-quantity')[0].value = item.quantity;
    }

    updateTotal();
}