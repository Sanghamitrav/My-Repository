var menteename, dp, menteeurl, comments;
var mentees=[];

var search = document.querySelector("nav");



var x = document.createElement("INPUT");
x.setAttribute("type", "image");

var x = document.getElementById("myImage");

function add(){
    document.createElement("MenteeInputForm").innerHTML += '<div id="MenteeInputForm">'+
        '<div>'+
        '<label for="menteename">Mentee Name:</label>'+
        '<input name="menteename" id="menteename" type="text">'+
        '</div>'+'<br>'+
        '<div>'+  
        '<label for="dp">Display Picture:</label>'+
        '<input name="dp" id="dp" type="file" accept="image/*" formaction="#">'+
        '</div>'+'<br>'+
        '<div>'+
        '<label for="menteeurl">Profile:</label>'+
        '<input name="menteeurl" id="menteeurl" type="url" x-moz-errormessage="Please specify a valid email url">'+
        '</div>'+'<br>'+
        '<div>'+
        '<label for="comments">Comments:</label>'+
        '<textarea name="comments" id="comments" rows="20" cols="40"></textarea>'+
        '</div>'+'<br>'+
        '<div class="slidecontainer">'+
                '<p>Rating: <span id="rat"></span></p>'+
                '<input type="range" min="1" max="5" value="3" class="slider" id="myRange">'+     
        '</div>'+'<br>'+'<br>'+
        '<input onclick="save()" type="image" src="checkmark.png" alt="save" formaction="#" name="save" width="50" height="50" id="save">'+
        '</div>'+
        '</div>';
        var slider = document.getElementById("myRange");
        var output = document.getElementById("rat");
        output.innerHTML = slider.value; // Display the default slider value
        // Update the current slider value (each time you drag the slider handle)
        slider.oninput = function() {
            output.innerHTML = this.value;
        }
    
    }

function save(e) {
    var menteename = document.getElementById("menteename").value;
    var dp = document.getElementById("dp").value;
    var menteeurl = document.getElementById("menteeurl").value;
    var comments = document.getElementById("comments").value;
    var output = document.getElementById("rat").value;
    var MenteeStatus = "Open";
      
    var mentee = {
        MenteeName: menteename,
        DisPic: dp,
        MenteeUrl: menteeurl,
        MenteeComments: comments,
        Rating: output,
        status: MenteeStatus
        }
        
    if (localStorage.getItem('mentees') === null) {
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
    for (var i = 0; i < mentees.length; i++) {
        var menteename = mentees[i].menteename;
        var dp = mentees[i].dp;
        var menteeurl = mentees[i].menteeurl;
        var comments = mentees[i].comments;
        var output = mentees[i].output;
        
        document.getElementById("menteenamesList").innerHTML += '<li>'+ '<div class="new">'+
        '<h6>Mentee Name: ' + menteename + '</h6>'+'<br>'+
        '<h6>Display Picture: '+'<img><span class="pic">' + dp + '</span>'+'<br>'+
        '<h6>Profile: ' + menteeurl + '</h6>'+'<br>'+
        '<h6>Comments: ' + comments + '</h6>'+'<br>'+
        '<h6>Rating: '+ output + '</h6>'+'<br>'+
        '<input type="image" src="close-icon.png" name="close" alt="close" width="20" height="20" formaction="#" onclick="del(\''+id+'\')">'+
        '<input type="image" src="edit-icon-png-24.png" name="edit" alt="edit" width="23" height="23" formaction="#" onclick="edit(\''+id+'\')">'+
        '</div>'+'<li>'; 
      }
}




    function edit(id) {
        for(var i = 0; i < mentees.length; i++) {
          if (mentees[i].id == id) {
            mentees[i].status = "Edit";
            document.getElementById("MenteeInputForm").value = mentees[i];
          } 
        }
          
        localStorage.setItem("mentees", JSON.stringify(mentees));
        
        add();
      }


    function del(id) {
        for(var i = 0; i < mentees.length; i++) {
          if (mentees[i].id == id) {
            mentees.splice(i, 1);
            document.getElementById("menteenamesList")=mentees[i].remove();
          }
        }
        
        localStorage.setItem("mentees", JSON.stringify(mentees));
        
        add();
      }










var yellowstar = document.getElementsByClassName("fa fa-star");
var out = document.getElementById("rats");
out.innerHTML = yellowstar.value;

yellowstar.oninput = function star(){
    out.innerHTML = this.value;
}

