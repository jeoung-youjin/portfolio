//  Initialize Swiper 
var swiper = new Swiper(".menu-list-slide", {
  slidesPerView: 4,
  centeredSlides: true,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//메뉴 리스트
function MenuList(tit,titEng){
  this.tit=tit;
  this.titEng = titEng
}

let menu01 = new MenuList("핑크리치 프룻티","Pink lychee fruit tea")
let menu02 = new MenuList("양지감로","Apple Mango Grapefruit Blended")
let menu03 = new MenuList("망고주스","Mango Juice")
let menu04 = new MenuList("자몽에이드","Grapefruit Ade")
let menu05 = new MenuList("타로블렌디드","Taro  Blended")
let menu06 = new MenuList("돌체블랙밀크티","Dolce Black Milk Tea")
let menu07 = new MenuList("아메리카노","Americano")
let menu08 = new MenuList("초코리얼라떼","Chocolate Real Latte")
let menu09 = new MenuList("크림얼그레이티","Cream Earl Grey Tea")

const orderMenu = document.querySelector(".menu-list") 
menus = [menu01,menu02,menu03,menu04,menu05,menu06,menu07,menu08,menu09]
menuGroup=``
for(const menu of menus){
  menuGroup +=`
  <li>
    <strong>${menu.tit}</strong>
    <em>${menu.titEng}</em>                
  </li>
  `
}
orderMenu.innerHTML=menuGroup

//토핑리스트
function ToppingList(name,nameEng,des){
  this.name = name;
  this.nameEng = nameEng;
  this.des = des
}

let topping01 = new ToppingList("에스프레소","Espresso","더욱 더 깊은 커피 맛을 느끼고 싶다면 샷 추가")
let topping02 = new ToppingList("치즈폼","Cheese foam","풍부한 크림치즈의 풍미와 쫀득함이 매력적인 폼")
let topping03 = new ToppingList("버터스카치폼","butter scotch foam","달콤한 캬라멜같은 크리미한 깊은 풍미의 폼")
let topping04 = new ToppingList("바닐라 시럽","Vanilla syrup","바닐라빈을 첨가하여 향이 달콤하고 향기로운 시럽")
let topping05 = new ToppingList("헤이즐넛 시럽","hazelnut syrup","고소한 풍미를 높여주는 헤이즐넛 시럽")
let topping06 = new ToppingList("타피오카 펄","tapioca pearls","달콤하고 쫀득한 타피오카 펄")
let topping07 = new ToppingList("사고펄","sago pearl","쫄깃하고 부드러운 사고펄")
let topping08 = new ToppingList("젤리(망고/딸기/리치)","Jelly","부드럽게 음료에 넣어먹을 수 있는 과일 향의 워터젤리")

let orderTopping=document.querySelector(".toppings")
toppings=[topping01,topping02,topping03,topping04,topping05,topping06,topping07,topping08]
console.log(topping01)
toGroup=``

for(const topping of toppings){
  toGroup +=`
  <li>
    <strong>${topping.name}</strong>
    <em>${topping.nameEng}</em>
    <p>${topping.des}</p>
  </li>
  `
}

orderTopping.innerHTML=toGroup