var namev,idv,csv,wev,punv,knv,comv,ratv,x,submit,edit,del;
function newmentee() {

}
function submit(){
    document.getElementById("name").innerHTML = "name:" + namev + "<br>";
    document.getElementById("ID").innerHTML = "ID:" + idv + "<br>";
    document.getElementById("coding skills").innerHTML = "coding skills" + csv + "<br>";
    document.getElementById("work ethics").innerHTML = "work ethics:" + wev + "<br>";
    document.getElementById("punctuality").innerHTML = "punctuality:" + punv + "<br>";
    document.getElementById("knowledge").innerHTML = "knowledge:" + knv + "<br>";
    document.getElementById("comments").innerHTML = "comments:" + comv + "<br>";
    document.getElementById("rating").innerHTML = "rating:" + ratv + "<br>";
    
    function edit(e){
        e.preventDefault();
        e.stopPropagation();
        x=document.getElementById("details");
        name=x.Elements["name"].value;
        idv=x.Elements["ID"].value;
        csv=x.Elements["coding skills"].value;
        wev=x.Elements["work ethics"].value;
        punv=x.Elements["punctuality"].value;
        comv=x.Elements["comments"].value;
        knv=x.Elements["knowledge"].value;
        ratv=x.Elements["rating"].value;
    
        document.getElementById("name").innerHTML = "name:" + namev + "<br>";
        document.getElementById("ID").innerHTML = "ID:" + idv + "<br>";
        document.getElementById("coding skills").innerHTML = "coding skills" + csv + "<br>";
        document.getElementById("work ethics").innerHTML = "work etcs:" + wev + "<br>";
        document.getElementById("punctuality").innerHTML = "punctuality:" + punv + "<br>";
        document.getElementById("knowledge").innerHTML = "knowledge:" + knv + "<br>";
        document.getElementById("comments").innerHTML = "comments:" + comv + "<br>";
        document.getElementById("rating").innerHTML = "rating:" + ratv + "<br>";
        return false;
        
    }
}


function colour() {
    if (ratv > 4)
        return darkgreen;
    else if (ratv > 3)
        return green;
    else if (ratv > 2)
        return yellow;
    else if (ratv > 1)
        return orange;
    else
        return red;
}