const dob = document.querySelector("#date-of-birth");
const luckyNo = document.querySelector("#lucky-number");
const btn = document.querySelector("#btn");
const outputTxt = document.querySelector("#outputText");

btn.addEventListener("click", checkLuck)

function checkLuck(){
    const sum = calculateSum(dob.value)
    if(dob.value){
        compareValues(sum, luckyNo.value)
    }else{
        outputTxt.innerHTML = "Enter your birth date."
    }
}

function calculateSum(val){
    val = val.replaceAll("-","");
    let sum = 0
    for(var i = 0; i < val.length; i++){
        sum = sum + Number(val.charAt(i));
    }
    return sum;
}

function compareValues(sum, luckyNo){
    if(sum % luckyNo === 0){
        outputTxt.innerHTML = "Your birthday is lucky 🤯....HaHa jk get over irrational and baseless beliefs."
    }else{
        outputTxt.innerHTML = "Your birthday brings death destruction and loss.👺"
    }
}