let historyList = document.querySelector(".history")
let group=``
fetch("../portfolio/js/main.json")
.then((response)=>response.json())
.then((json)=>{
  data=json.year2017;
  data.forEach(element => {
    group+= makeHistoryTemp(element)
  });
})

function makeHistoryTemp(listname){
  return`
  <li>
    <strong class="history-year">${listname.월}</strong>
    <ul class="history-mon">${listname.내용}</ul>
  </li>
  `
}


