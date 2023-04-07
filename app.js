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