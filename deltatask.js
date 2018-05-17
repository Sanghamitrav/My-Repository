var menteename, dp, menteeurl, comments;
var mentees=[];

var search = document.querySelector("nav");
function save(){
    document.getElementById('MenteeInputForm').addEventListener('save', saveMentee);
    function saveMentee(e) {
        var menteename = chance.guid();
        var dp = document.getElementById("dp").value;
        var menteeurl = document.getElementById("menteeurl").value;
        var comments = document.getElementById("comments").value;
        var MenteeStatus = "Open";
      
        var mentee = {
          MenteeName: menteename,
          DisPic: dp,
          MenteeUrl: menteeurl,
          MenteeComments: comments,
          status: MenteeStatus
        }
        
        if (localStorage.getItem('mentees') === null) {
          var mentees = [];
          mentees.push(mentee);
          localStorage.setItem('mentees', JSON.stringify(mentees));
        } else {
          var mentees = JSON.parse(localStorage.getItem('mentees'));
          mentees.push(mentee);
          localStorage.setItem('mentees', JSON.stringify(mentees));
        }
        
        document.getElementById('MenteeInputForm').reset();
       
        add();
        
        e.preventDefault(); 
      }

}
function add(){
var menteename = JSON.parse(localStorage.getItem("menteename"));
var dp = JSON.parse(localStorage.getItem("dp"));
var menteeurl = JSON.parse(localStorage.getItem("menteeurl"));
var comments = JSON.parse(localStorage.getItem("comments"));    
for (var i = 0; i < mentees.length; i++) {
    var menteename = mentees[i].menteename;
    var dp = mentees[i].menteeurl;
    var comments = mentees[i].comments;

    menteenamesList.innerHTML +=   '<div class="well">'+
                              '<h6>Mentee Name: ' + menteename + '</h6>'+'<br>'+
                              '<h6>Display Picture: '+'<img><span class="pic">' + dp + '</span>'+'<br>'+
                              '<h6>Profile: ' + menteeurl + '</h6>'+
                              '<h6>Comments: ' + comments + '</h6>'+
                              
                              '<a href="#" class="btn btn-warning" onclick="setStatusEdit(\''+id+'\')">Edit</a> '+
                              '<a href="#" class="btn btn-danger" onclick="deleteMentee(\''+id+'\')">Delete</a>'+
                              '</div>';
  }
}

function edit(){
    function setStatusEdit (id) {
        var menteename = JSON.parse(localStorage.getItem("menteename"));
        var dp = JSON.parse(localStorage.getItem("dp"));
        var menteeurl = JSON.parse(localStorage.getItem("menteeurl"));
        var comments = JSON.parse(localStorage.getItem("comments"));
        for(var i = 0; i < mentees.length; i++) {
          if (mentees[i].id == id) {
            mentees[i].status = "Edit";
          }
        }
          
        localStorage.setItem("mentees", JSON.stringify(mentees));
        
        add();
      }

}
function del(){
    function deleteMentee (id) {
        var menteename = JSON.parse(localStorage.getItem('menteename'));
        var dp = JSON.parse(localStorage.getItem("dp"));
        var menteeurl = JSON.parse(localStorage.getItem("menteeurl"));
        var comments = JSON.parse(localStorage.getItem("comments"));

        
        for(var i = 0; i < mentees.length; i++) {
          if (mentees[i].id == id) {
            mentees.splice(i, 1);
          }
        }
        
        localStorage.setItem("mentees", JSON.stringify(mentees));
        
        add();
      }

}






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