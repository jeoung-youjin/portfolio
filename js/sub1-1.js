// tea-process
function TeaProcess(teaImg, step, desKr, desEng ){
  this.teaImg=teaImg;
  this.step=step;
  this.desKr=desKr;
  this.desEng=desEng;
}

let progress01=new TeaProcess("/portfolio/img/ico_step01_2.png","step1","수확","Harvesting")
let progress02=new TeaProcess("/portfolio/img/ico_step02_2.png","step2","선별","Selection")
let progress03=new TeaProcess("/portfolio/img/ico_step03_2.png","step3","숙성.건조 과정","Process of aging & Drying")
let progress04=new TeaProcess("/portfolio/img/ico_step04_2.png","step4","티 음료","Tea drink")

let progresses= [progress01,progress02,progress03,progress04]
let philosophyTea = document.querySelector(".philosophy > .tea-process")
let phGroup=``

for(const progress of progresses){
  phGroup +=`
  <li>
    <div class="tea-process-img">
        <figure>
            <img src="${progress.teaImg}" alt>
            <figcaption>${progress.step}</figcaption>
        </figure>
    </div>
    <div class="tea-process-des">
        <strong>${progress.desKr}</strong>
        <em>${progress.desEng}</em>
    </div>
  </li>
  `
}
philosophyTea.innerHTML=phGroup
