'use strict';
const slider = document.querySelector('.swiper-container');
let mySwiper;

const btn = document.querySelector('.brand-button');
// let result = document.querySelectorAll('.hidden1120');
// let res768 = document.querySelectorAll('.hidden768');
// let checkBox = document.querySelector('.expand');


function mobileSlider() {
    if(window.innerWidth < 768 && slider.dataset.mobile === 'false') {
        mySwiper = new Swiper(slider, {
            slidesPerView: 'auto',
            centeredSlides: true,
            width: 240,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            keyboard: {
                enabled: true,
                onlyInViewport: true,
            }
        });
        slider.dataset.mobile = 'true';
    }
    if(window.innerWidth >= 768 && window.innerWidth <= 1119) {
        slider.dataset.mobile = 'false';

        if(slider.classList.contains('swiper-container-initialized')) {
            mySwiper.destroy();
        }
        
    }
}
mobileSlider();

window.addEventListener('resize', function() {
    mobileSlider();
});

// btn.addEventListener("click", function() {
//     if(window.innerWidth >= 1120) {
//          for(let i=0; i <result.length; i++) {
//             if(result[i].classList.contains('hidden')) {
//                 btn.textContent = " Скрыть";
//              } else {
//                 btn.textContent = "Показать все";
//              }
//           result[i].classList.toggle('hidden');
//         }
//     }
// });
// btn.addEventListener("click", function() {
//     if(window.innerWidth >= 768 && window.innerWidth <= 1119) {
//          for(let i=0; i < res768.length; i++) {
//             if(res768[i].classList.contains('hidden')) {
//                 btn.textContent = " Скрыть";
//              } else {
//                 btn.textContent = "Показать все";
//              }
//              res768[i].classList.toggle('hidden');
//         }
//     }
// });
// let toogleCheckbox = function() {
//     checkBox.checked = !checkBox.checked;
// };
// btn.addEventListener('click', toogleCheckbox);
