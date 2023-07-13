let menu = document.querySelector('#menu');
let listItem = document.querySelector('#list-item');

menu.onclick = () =>{
    listItem.classList.toggle('nav-active');
}

function cart() {
    let cart = document.querySelectorAll('.cart');
    let remove = document.querySelector('.close');
    let navOrder = document.querySelector('.nav-order-now');

    cart.forEach((button) => {
        button.onclick = () =>{
            navOrder.classList.add('order-active');
        }
    })

    remove.onclick = () =>{
        navOrder.classList.remove('order-active');
    }
}