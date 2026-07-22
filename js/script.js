

let studyHours=Number(prompt("how many hours did u study!"));
if(studyHours>=4){
    document.getElementById("display").innerHTML="amazing";
}
else if(studyHours>=3){
    document.getElementById("display").innerHTML="keep going";
}
else{
    document.getElementById("display").innerHTML="try studying a bit more!";
}