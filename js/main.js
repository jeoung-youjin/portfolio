// menu 클릭이벤트 - s 

let tabButtons = document.querySelectorAll('.tab-button > p');
let tabBoxs = document.querySelectorAll('.tab-box > ul');

tabButtons.forEach((eachButton,index)=>{
  eachButton.addEventListener('click',function(){
    for(const tabButton of tabButtons){tabButton.classList.remove("on");}
    for(const tabBox of tabBoxs){tabBox.classList.remove("on")}
    tabBoxs[index].classList.add("on")
    this.classList.add("on")
  })
});
tabButtons[0].click();
// menu 클릭이벤트 - E 

// main visual - S
new Swiper(".visual-slide", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  allowTouchMove : true,
  // 마우스로 터치해서 넘기기
  autoplay:{
    delay:3000,
    disableOnInteraction: false,
  },
  // 자동재생
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
new Swiper(".visual-mobile-slide", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// main visual - E