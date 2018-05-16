var menteename, dp, menteeurl, comments;


var search = document.querySelector("nav");
function save(){
    document.getElementById('issueInputForm').addEventListener('submit', saveIssue);
    function saveIssue(e) {
        var issueId = chance.guid();
        var issueDesc = document.getElementById('issueDescInput').value;
        var issueSeverity = document.getElementById('issueSeverityInput').value;
        var issueAssignedTo = document.getElementById('issueAssignedToInput').value;
        var issueStatus = 'Open';
      
        var issue = {
          id: issueId,
          description: issueDesc,
          severity: issueSeverity,
          assignedTo: issueAssignedTo,
          status: issueStatus
        }
        
        if (localStorage.getItem('issues') === null) {
          var issues = [];
          issues.push(issue);
          localStorage.setItem('issues', JSON.stringify(issues));
        } else {
          var issues = JSON.parse(localStorage.getItem('issues'));
          issues.push(issue);
          localStorage.setItem('issues', JSON.stringify(issues));
        }
        
        document.getElementById('issueInputForm').reset();
       
        fetchIssues();
        
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
                              
                              '<a href="#" class="btn btn-warning" onclick="setStatusClosed(\''+id+'\')">Edit</a> '+
                              '<a href="#" class="btn btn-danger" onclick="deleteIssue(\''+id+'\')">Delete</a>'+
                              '</div>';
  }
}

function edit(){
    function setStatusClosed (id) {
        var issues = JSON.parse(localStorage.getItem('issues'));
        
        for(var i = 0; i < issues.length; i++) {
          if (issues[i].id == id) {
            issues[i].status = "Closed";
          }
        }
          
        localStorage.setItem('issues', JSON.stringify(issues));
        
        fetchIssues();
      }

}
function del(){
    function deleteIssue (id) {
        var issues = JSON.parse(localStorage.getItem('issues'));
        
        for(var i = 0; i < issues.length; i++) {
          if (issues[i].id == id) {
            issues.splice(i, 1);
          }
        }
        
        localStorage.setItem('issues', JSON.stringify(issues));
        
        fetchIssues();
      }

}

var mentees:[];



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