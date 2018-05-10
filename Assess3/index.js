var to = document.getElementById("to");
var message = document.getElementById("message");
var from = document.getElementById("from");
var inpTo = document.getElementById("inpTo");
var inpMes = document.getElementById("inpMes");
var inpFrom = document.getElementById("inpFrom");
var postcard = document.getElementById("postcard");
var inpBG = document.getElementById("inpBG");
var add = document.getElementById("add");
var preview = document.getElementById("preview");

inpTo.addEventListener("keyup", function(ev){
       to.innerHTML = inpTo.value; 
});

inpMes.addEventListener("keyup", function(ev){
       message.innerHTML = inpMes.value; 
});

inpFrom.addEventListener("keyup", function(ev){
       from.innerHTML = inpFrom.value; 
});

inpBG.addEventListener("keyup", function(ev){
    if(ev.keyCode == 13){
   postcard.style.backgroundImage = "url("+inpBG.value+")";
    }
});

add.addEventListener("click", function(){
    var ndiv = document.createElement("div");
    ndiv.className = "items";
    ndiv.style.backgroundImage = "url("+inpBG.value+")";
    ndiv.style.backgroundSize = "cover";
    ndiv.style.backgroundPosition = "center";
    preview.appendChild(ndiv);
    console.log(ndiv);
    
    
    var ntitle = document.createElement("div");
    ntitle.className = "itemTitle";
    ntitle.innerHTML = inpTo.value;
    ndiv.appendChild(ntitle);
});
