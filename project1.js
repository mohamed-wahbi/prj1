var text =document.getElementById("text");
var save =document.getElementById("save");
var delet =document.getElementById("delet");
var textf =document.getElementById("textf");

save.onclick=()=>{
    textf.innerHTML=document.getElementById("text").value;
    localStorage.setItem("nas",text.value);
}
delet.onclick=()=>{
    textf.innerHTML="";
}
onload=()=>{
text.value.innerHTML=localStorage.getItem("nas");
    textf.innerHTML="";

}
