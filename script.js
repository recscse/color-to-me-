function getInputValue(){
    
    let inputVal = document.getElementById("inputText").value;
    if(inputVal==1){
       document.getElementById("01").style.background="green";
        document.getElementById("inputText").value='';
    }
    if(inputVal==2){
        document.getElementById("02").style.background="red";
        document.getElementById("inputText").value='';
    }
    if(inputVal==3){
        document.getElementById("03").style.background="blue";
        document.getElementById("inputText").value='';
    }
    if(inputVal==4){
        document.getElementById("04").style.background="orange";
        document.getElementById("inputText").value='';
    }
    if(inputVal==5){
        document.getElementById("05").style.background="skyblue";
        document.getElementById("inputText").value='';
    }
    if(inputVal==6){
        document.getElementById("06").style.background="red";
        document.getElementById("inputText").value='';
    }
    if(inputVal==7){
        document.getElementById("07").style.background="pink";
        document.getElementById("inputText").value='';
    }
    if(inputVal==8){
        document.getElementById("08").style.background="#325ea8";
        document.getElementById("inputText").value='';
    }
    if(inputVal==9){
        document.getElementById("09").style.background="purple";
        document.getElementById("inputText").value='';
    }
}
