// 생성형 함수 및 이벤트

function Store(local, storeName, address, hours, weekendHours,localClass ) {
  this.local = local;
  this.storeName = storeName;
  this.address = address;
  this.hours = hours;
  this.weekendHours = weekendHours;
  this.localClass=localClass
};
// 서울
let store1 = new Store("서울", "광운대점", "서울특별시 노원구 광운로7길 2,1층(월계동)", "11:00 ~ 20:00", "11:00 ~ 20:00","seoul",);
let store2 = new Store("서울", "노량진점", "서울특별시 동작구 노량진로 180, 1층(노량진동)", "11:00 ~ 20:00","11:00 ~ 20:00","seoul");
let store3 = new Store("서울", "대치학원가점", "서울 강남구 대치동 932-4", "11:00 ~ 20:00","11:00 ~ 20:00","seoul");
let store4 = new Store("서울", "독산지식산업센터점", "서울특별시 금천구 두산로 70, 지하1층 TL-131호 (독산동, 현대지식산업센터)", "11:00 ~ 20:00", "11:00 ~ 20:00","seoul");
let store5 = new Store("서울", "동국대점", "서울특별시 중구 서애로1길 14, 1층,2층(필동3가)", "11:00 ~ 20:00", "11:00 ~ 20:00","seoul");
let store6 = new Store("서울", "둔촌점", "서울특별시 강동구 양재대로87길 11(성내동)", "10:00 ~ 21:30", "10:00 ~ 21:30","seoul");
let store7 = new Store("서울", "마곡벨리오점", "서울특별시 강서구 강서로 439, 1층 114호(마곡동, 마곡벨리오근린생활시설)", "11:00 ~ 20:00", "11:00 ~ 20:00","seoul");
let store8 = new Store("서울", "마포공덕점", "서울특별시 마포구 새창로 15, 1층 오른쪽 일부 (도화동)", "11:00 ~ 20:00", "11:00 ~ 20:00","seoul");
let store9 = new Store("서울", "명지전문대점", "서울특별시 서대문구 가좌로 118, 1층(홍은동)", "11:00 ~ 20:00", "11:00 ~ 20:00","seoul");
let store10 = new Store("서울", "서대문역점", "서울특별시 서대문구 충정로 63, 1층(충정로2가)", "11:00 ~ 20:00", "11:00 ~ 20:00","seoul");
let store11 = new Store("서울", "성균관대점", "서울특별시 종로구 성균관로5길 9, 1층 1호(명륜3가)", "11:00 ~ 20:00", "11:00 ~ 20:00","seoul");
let store12 = new Store("서울", "세종대후문점", "서울특별시 광진구 군자로 81, 1층 가호 (군자동)", "11:00 ~ 20:00", "11:00 ~ 20:00","seoul");
let store13 = new Store("서울", "신월점", "서울특별시 양천구 남부순환로83길 17, 100동 123호 ", "11:00 ~ 20:00", "11:00 ~ 20:00","seoul");
let store14 = new Store("서울", "신촌점", "서울특별시 서대문구 연세로5길 32, 2층 (창천동)", "11:00 ~ 20:00", "11:00 ~ 20:00","seoul");
let store15 = new Store("서울", "염창점", "서울특별시 강서구 염창동 244-15", "11:00 ~ 20:00", "11:00 ~ 20:00","seoul");
let store16 = new Store("서울", "은행사거리점", "서울특별시 노원구 중계로 201, 104호(중계동, 오성프라자)", "11:00 ~ 20:00", "11:00 ~ 20:00","seoul");
let store17 = new Store("서울", "이화여대점", "서울특별시 서대문구 이화여대길 48, 1층", "11:00 ~ 20:00", "11:00 ~ 20:00","seoul");
let store18 = new Store("서울", "팔공티 강서점", "서울 강서구 강서로45길 28 1층 107호 팔공티", "11:00 ~ 20:00", "11:00 ~ 20:00","seoul");
let store19 = new Store("서울", "팔공티 고속터미널점", "서울특별시 서초구 신반포로 지하 188, 지하2층 87호(반포동, 강남고속터미널역)", "11:00 ~ 20:00", "11:00 ~ 20:00","seoul");
let store20 = new Store("서울", "팔공티 궁동점", "서울 구로구 궁동 279-11 엠케이빌딩 102호", "11:00 ~ 20:00", "11:00 ~ 20:00","seoul");
let store21 = new Store("서울", "팔공티 목동점", "서울 양천구 목동동로8길 11 1F 102호", "11:00 ~ 20:00", "11:00 ~ 20:00","seoul");
let store22 = new Store("서울", "팔공티 용산아이파크몰점(Forest)", "서울 용산구 한강대로23길 55 지하 1층", "11:00 ~ 20:00", "11:00 ~ 20:00","seoul");
let store23 = new Store("서울", "팔공티 전주만성점", "서울 강서구 공항대로41길 51 1F 110호", "11:00 ~ 20:00", "11:00 ~ 20:00","seoul");
let store24 = new Store("서울", "항동점", "서울특별시 구로구 연동로 233, 상가2동동 1층 106호(항동, 항동중흥에스클래스베르데카운티)", "11:00 ~ 20:00", "11:00 ~ 20:00","seoul");
let store25 = new Store("서울", "홈플러스월드컵점", "서울특별시 마포구 월드컵로 240, 1층 Xe, y31호 (성산동, 월드컵주경기장)", "11:00 ~ 20:00", "11:00 ~ 20:00","seoul");

//구조 
let stores = [store1, store2, store3, store4, store5,store6, store7, store8, store9, store10,store11, store12, store13, store14, store15,store16, store17, store18, store19, store20,store21, store22, store23, store24, store25];
let ul = document.querySelector(".store-map-list > ul ");

let liGroup = '';
for (const store of stores) {
  liGroup += `
    <li class= "on ${store.localClass}">
      <div>
        <em class=${store.local}>${store.local}</em>
        <strong>${store.storeName}</strong>
        <address>${store.address}</address>
      </div>
      <button></button>
      <div class="modal-box"></div>
    </li>
    `;
}

ul.innerHTML = liGroup;


// 지역선택 함수
let localButtons = document.querySelectorAll('.map-bt > li');
let localLists = document.querySelectorAll('.store-map-list > ul > li');

console.log(localButtons)
console.log(localLists)
