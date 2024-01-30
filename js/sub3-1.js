// 지도 리스트 삽입
let mapList = document.querySelector(".store-map-list");

fetch("../js/main.json")
  .then((response) => response.json())
  .then((json) => {
  
    서울 = json.서울;
    인천 = json.인천;
    강원 = json.강원;
    경기 = json.경기;
    충북 = json.충북;
    충남 = json.충남;
    세종 = json.세종;
    대전 = json.대전;
    경북 = json.경북;
    전북 = json.전북;
    대구 = json.대구;
    경남 = json.경남;
    부산 = json.부산;
    광주 = json.광주;
    전남 = json.전남;
    제주 = json.제주;
    
  let mapGroup = ``;
  서울.forEach(element => {
    mapGroup += `
    <li class="on ${element.local}">
      <div>
      <em class="${element.local}">${element.local}</em>
      <strong>${element.name}</strong>
      <address>${element.address}</address>
      </div>
      <button></button>
      <div class="modal-box"></div>
    </li>
    `;
  });
  mapList.innerHTML = mapGroup;
});







