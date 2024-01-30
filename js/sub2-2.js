// 티 컬렉션
function Tea(name, category,desc,ripen,temperature, body,acidity,sweetness){
  this.name=name;
  this.category=category;
  this.desc=desc;
  this.ripen=ripen;
  this.temperature=temperature;
  this.body=body;
  this.acidity=acidity;
  this.sweetness=sweetness
}

let tea01 =new Tea("블랙티","(홍차)","찻잎이 숙성되면서 붉은색을 띠고, 과일 향이 자욱해짐.<br> 차 탕과 엽저의 색이 “홍색(紅色)”을 띠어 홍차라 부르고,<br>홍차 잎의 색은 진한 홍색 중 검은빛을 띠어 <br>영어로는 “Black Tea”라 한다.","상","97℃","4","4","2")
let tea02 =new Tea("자스민 그린티","","투명한 푸른빛 찻물 색 <br> 싱그럽고 우아한 향기가 오래 지속되며 맛이 매우 깔끔<br>폴리페놀과 비타민 C의 함량이 높음<br>녹차는 생엽(生葉)에 높은 열을 가하거나 증기로 찌는<br>살청(殺靑)을 통하여 폴리페놀 산화효소 활동을 멈추게 해,<br>숙성이 되지 않기 때문에 녹색을 유지한다.","하","77℃","3","4","3")
let tea03 =new Tea("얼그레이티","","달콤한 꿀 향, 과일의 새콤함과 꽃의 우아한 향 <br>진한 오렌지색 찻물<br>상큼한 베르가못 향이 첨가되어 있음","상","97℃","3","4","3")
let tea04 =new Tea("우롱티","","가공 후 찻잎의 색이 청갈색이어서 청차라 불림<br>부드러운 꽃향기와 달콤한 과일 향이 두드러짐<br>녹차와 홍차의 오묘한 조화를 느껴볼 수 있는 아주 매력적인 차","상","85℃","2","3","3")

let teaCollection = document.querySelector(".tea-collection")
teaList=[tea01,tea02,tea03,tea04]
teaGroup=``

for(const tea of teaList){
  teaGroup +=`
  <li>
    <div>
      <strong>${tea.name}<em>${tea.category}</em></strong>
      <p>${tea.desc}</p>
      <div class="ripen">
          <em>숙성도</em>
          <span>${tea.ripen}</span>
      </div>
      <ul class="tea-collection-des">
          <li>온도<span>${tea.temperature}</span></li>
          <li>바디감(Body)<span>${tea.body}</span></li>
          <li>신맛(Acidity)<span>${tea.acidity}</span></li>
          <li>단맛(Sweetness)<span>${tea.sweetness}</span></li>
      </ul>
    </div>
  </li>  
  `
}
teaCollection.innerHTML=teaGroup