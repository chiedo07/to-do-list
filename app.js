// creating a close button and append it tp each list
var MyList = document.getElementsByTagName("LI");
var i;
for (i = 0; i<MyList.length;i++){
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    MyList[i].appendChild(span);
}
// click to hide current list
var hide = document.getElementsByClassName("close");
var i;
for(i = 0; i < hide.length; i++) {
    hide[i].onclick = function() {
        var par = this.parentElement;
        par.style.display = "none";
    }
}
// click to add list items
function Addlist(){
    var li = document.createElement("LI");
    var myvalue = document.getElementById("task").value;
    var text = document.createTextNode(myvalue);
    li.appendChild(text);
    if(myvalue === ""){
        alert("You Must Write Something")
    } else{document.getElementById("myli").appendChild(li)
}
document.getElementById("task").value ="";

var span = document.createElement("span");
var txt = document.createTextNode("\u00D7");
span.className = "close";
span.appendChild(txt);
li.appendChild(span);

for(i = 0; i < hide.length; i++){
hide[i].onclick = function(){
    var rid = this.parentElement;
    rid.style.display= "none";
}
}
}