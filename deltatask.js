var menteename, dp, menteeurl, comments, output;


var search = document.querySelector("nav");




function add(){
var newpagepart_1 = document.createElement("div");
    newpagepart_1.innerHTML += '<div id="MenteeInputForm">'+
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
        '</div>'+'<br>'+'<div class="slidecontainer">'+
        '<p>Rating: <span id="rat"></span></p>'+
        '<input type="range" min="1" max="5" value="3" class="slider" id="myRange">'+     
        '</div>'+'<br>'+'<br>';
var newpagepart_2 = document.createElement("div");
    newpagepart_2.innerHTML += '<div>'+ 
        '<input onclick="save()" type="image" src="checkmark.png" alt="save" formaction="#" name="save" width="50" height="50" id="save">'+
        '</div>'+
        '</div>';
        document.getElementById("main").appendChild(newpagepart_1);
        document.getElementById("main").appendChild(newpagepart_2); 
        var slider = document.getElementById("myRange");
        var output = document.getElementById("rat");
        newpagepart_1.appendChild(slider);
        newpagepart_1.appendChild(output);
        output.innerHTML = slider.value; // Display the default slider value
        // Update the current slider value (each time you drag the slider handle)
        slider.oninput = function() {
            output.innerHTML = this.value;
        
           
        }
    }

function save() {
    var mentees=[];
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
    

    add();
        
    
    for (var i = 0; i < mentees.length; i++) {
        mentees[i].MenteeName;
        mentees[i].DisPic;
        mentees[i].MenteeUrl;
        mentees[i].MenteeComments;
        mentees[i].Rating;
        
        var newpage = document.getElementById("menteenamesList");
            newpage.innerHTML += '<li>'+ '<div class="new">'+
        '<h6>Mentee Name: ' + mentees[i].MenteeName + '</h6>'+'<br>'+
        '<h6>Display Picture: '+'<img id="myImage><span class="pic">' + mentees[i].DisPic + '</span>'+'<br>'+
        '<h6>Profile: ' + mentees[i].MenteeUrl + '</h6>'+'<br>'+
        '<h6>Comments: ' + mentees[i].MenteeComments + '</h6>'+'<br>'+
        '<h6>Rating: '+ mentees[i].Rating + '</h6>'+'<br>'+
        '<input type="image" src="close-icon.png" name="close" alt="close" width="20" height="20" formaction="#" onclick="del(\''+mentees[i].MenteeName+'\', \''+mentees[i].DisPic+'\', \''+mentees[i].MenteeUrl+'\', \''+mentees[i].MenteeComments+'\', \''+mentees[i].Rating+'\')">'+
        '<input type="image" src="edit-icon-png-24.png" name="edit" alt="edit" width="23" height="23" formaction="#" onclick="edit(\''+mentees[i].MenteeName+'\', \''+mentees[i].DisPic+'\', \''+mentees[i].MenteeUrl+'\', \''+mentees[i].MenteeComments+'\', \''+mentees[i].Rating+'\')">'
        '</div>'+'<li>'; 
        document.getElementById("main").appendChild(newpage);
        /*var x = document.createElement("INPUT");
        x.setAttribute("type", "image");
        var x = document.getElementById("myImage");
        x.appendChild(newpage);*/

      }
      

    }


    function edit(menteename, dp, menteeurl, comments, output) {
        var mentees=[];
        for(var i = 0; i < mentees.length; i++) {
          if (mentees[i].id == id) {
            mentees[i].status = "Edit";
            document.getElementById("MenteeInputForm").value;
            document.getElementById("menteename").val() = mentees[i];
            document.getElementById("dp").val() = mentees[i];
            document.getElementById("menteeurl").val() = mentees[i];
            document.getElementById("comments").val() = mentees[i];
            document.getElementById("output").val() = mentees[i];
          } 
        }
          
        localStorage.setItem("mentees", JSON.stringify(mentees));
        
        add();
      }


    function del(menteename, dp, menteeurl, comments, output) {
        var mentees=[];
        for(var i = 0; i < mentees.length; i++) {
          if (mentees[i].id == id) {
            mentees.splice(i, 1);
            document.getElementById("menteenamesList")=mentees[i].remove();
            var list = document.getElementById("menteenamesList");
            list.removeChild(list.childNodes[0]);
          }
        }
        
        localStorage.setItem("mentees", JSON.stringify(mentees));
        
        add();
      }