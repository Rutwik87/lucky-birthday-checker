var dob = document.querySelector("#dob");
var luckyNum = document.querySelector("#number");
const checkBtn = document.querySelector("#check");
var output = document.querySelector("#output-msg")

function clickHandler(){
    if(dob.value === "" || luckyNum.value === ""){
        output.innerText="Please enter all the fields";
    } else {
        var dateString = dob.value.replaceAll("-","");
        var sum = 0;
        for(let num of dateString){
            sum = sum + Number(num,10);
        } 
        if(sum%luckyNum.value === 0){  
            output.innerText = "Great!! Your Birthday is Lucky!!!"
        }
        else{
            output.innerText = "Your Birthday is not Lucky :("
        }
    }
    
}




checkBtn.addEventListener("click",clickHandler);
