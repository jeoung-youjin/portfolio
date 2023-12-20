const mode=document.querySelector("button");

mode.onclick=function(){
  if(mode.value==="day"){
    mode.value = "dark";
    document.body.classList = "dark";
    document.mode.style.backgroungImage ="url('../img/moon_1476083.png')"
  }
  else if(mode.value==="dark"){
    mode.value = "day";
    document.body.classList="light" 
  }
}
