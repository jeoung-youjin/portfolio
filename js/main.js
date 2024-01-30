// main visual - S
// pc 버전
new Swiper(".visual-slide", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  allowTouchMove : true,
  autoplay:{
    delay:3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// 모바일 버전
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



// menu 
function BestList(tit,des){
  this.tit=tit;
  this.des=des
}
let best01 = new BestList("양지감로","망고와 자몽, 펄로 이루어진 달콤한 시그니처 블렌디드")
let best02 = new BestList("버터스카치폼 에스프레소 블렌디드","샷이 두번 들어간 블렌디드에 버터스카치 폼이 더해진 음료")
let best03 = new BestList("치즈 & 핑크리치 블렌디드","치즈폼 토핑에 상큼한 리치, 리치 젤리, 자스민 그린티로 이루어진 블랜디드")
let best04 = new BestList("딸기 몽땅 밀크티","딸기 특유의 달콤함과 상큼함을 즐길 수 있는 부드러운 밀크티")
let bests =[best01,best02,best03,best04]
let bestMenuList = document.querySelector(".tab-box > .best-menu") 
console.log(bestMenuList)
let beGroup =``;

for(const best of bests){
  beGroup += `
  <li class="product-des">
    <strong>${best.tit}</strong>
    <p>${best.des}</p>
  </li>
  `
}
bestMenuList.innerHTML=beGroup

let tea01 = new BestList("블랙티(홍차)","찻잎이 숙성되면서 붉은색을 띠고, 과일 향이 자욱해짐") 
let tea02 = new BestList("자스민 그린티","싱그럽고 우아한 향기가 오래 지속되며 맛이 매우 깔끔") 
let tea03 = new BestList("얼그레이티","달콤한 꿀 향, 과일의 새콤함과 꽃의 우아한 향") 
let tea04 = new BestList("우롱티","부드러운 꽃향기와 달콤한 과일 향이 두드러짐") 
let teas = [tea01,tea02,tea03,tea04]
let teaCollection=document.querySelector(".tab-box > .Tea-collection")
let teGroup =``;

for(const tea of teas){
  teGroup +=`
  <li class="product-des">
    <strong>${tea.tit}</strong>
    <p>${tea.des}</p>
  </li>
  `
}
teaCollection.innerHTML=teGroup






// 클릭이벤트
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

// notice-list
function NoticeList(num,kategorie,article,date){
  this.num=num;
  this.kategorie=kategorie;
  this.article=article;
  this.date=date;
}

let notice01 = new NoticeList("149","공지","팔공티 새단장! 로고가 바뀌었습니다!","2023-10-15")
let notice02 = new NoticeList("150","추천 레시피","버터스카치 3총사 꿀팁 대방출!","2023-10-29")
let notice03 = new NoticeList("151","신상품 출시","마시는 디저트 한 잔","2023-11-01")
let notice04 = new NoticeList("152","참가자 모집","팔공티 서포터즈 에이티 7기 모집","2023-11-10")
let notice05 = new NoticeList("153","신상품 출시","가을 햇살의 여운이 달콤한 프룻티에 가득 물들다","2023-11-16")

let notices=[notice01,notice02,notice03,notice04,notice05]
let noticeBox = document.querySelector(".notice > .notice-list")
console.log(noticeBox)
let noGroup=``

for(const notice of notices){
  noGroup += `
  <li>
    <a href="#">
        <em>${notice.num}</em>
        <strong>${notice.kategorie}</strong>
        <p>${notice.article}</p>
        <span>${notice.date}</span>
    </a>
  </li>
  `
}

noticeBox.innerHTML=noGroup