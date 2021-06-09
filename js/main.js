
const header = document.getElementById('header');

window.onscroll = function() {stickyHeader()};

function stickyHeader(){

    if(document.body.scrollTop>50 || document.documentElement.scrollTop>50){

        // header.style.backgroundColor = "black";
        // header.style.color = "white";
        header.style.transition = "transform 0.3s ease-in-out";



    }
    else{

        // header.style.backgroundColor = "white";
        // header.style.color = "black";
        header.style.transition = "transform 0.3s ease-in-out";

    }

}

const burger = document.querySelector('.hamburger');
const cart = document.querySelector('.cart');

const cross1 = document.querySelector('#cross1');
const cross2 = document.querySelector('#cross2');


const leftNav = document.querySelector('.left_nav');
const rightNav = document.querySelector('.right_nav');


burger.addEventListener('click',function(){
   
        leftNav.style.display='block';

});
cart.addEventListener('click',function(){
   
    rightNav.style.display='block';

});

cross1.addEventListener('click',function(){

    leftNav.style.display='none';

});
cross2.addEventListener('click',function(){

    rightNav.style.display='none';

});