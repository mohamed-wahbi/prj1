var text =document.getElementById("text");
var save =document.getElementById("save");
var delet =document.getElementById("delet");
var textf =document.getElementById("textf");
var stor;

save.onclick=()=>{
    textf.innerHTML=document.getElementById("text").value;
    var stor=localStorage.setItem("nas",text.value);
}
delet.onclick=()=>{
    textf.innerHTML="";
}
onload=()=>{
    localStorage.clear(stor);
   
 
    //text.value=localStorage.getItem("nas");

   // textf.innerHTML=localStorage.getItem("nas");
}
