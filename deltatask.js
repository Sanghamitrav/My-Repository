var menteename, dp, menteeurl, comments;
var search = document.querySelector("nav");
function addnew(){

}
function button(e){
    e.preventDefault();
    e.stopPropagation();
    myFunc=document.getElementById("info");
    menteename=myFunc["menteename"].value;
    dp=myFunc["dp"].value;
    menteeurl=myFunc["menteeurl"].value;
    comments=myFunc["comments"].value;
    
    document.getElementById("menteename").innerHTML += "Mentee Name:" + menteename + "<br>";
    document.getElementById("dp").innerHTML += "Display Picture:" + dp + "<br>";
    document.getElementById("menteeurl").innerHTML += "Profile:" + menteeurl + "<br>";
    return false;
    
}

document.getElementById("info").addEventListener("save",button,false);


var x = document.createElement("INPUT");
x.setAttribute("type", "image");

var x = document.getElementById("myImage");

var yellowstar = document.getElementsByClassName("fa fa-star");
var out = document.getElementById("rats");
out.innerHTML = yellowstar.value;

yellowstar.oninput = function star(){
    out.innerHTML = this.value;
}

var slider = document.getElementById("myRange");
var output = document.getElementById("rat");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    output.innerHTML = this.value;
}
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
  }
}