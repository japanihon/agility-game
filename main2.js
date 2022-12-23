// javascript

//globals
var pushed = false //Has the stop button been pushed - false is default
var targetInt; //The target number to stop the wheel on
var spinningElem = document.getElementById('spinning'); //The spinning number

//event listener
document.getElementById("buttonPressed").addEventListener("click", buttonPressed);

//When the stop button is pushed
function buttonPressed(){
    pushed = true;
}

//set the target Int
function setTargetInt(){
    var targetElem = document.getElementById('targetNum');
    targetInt=Math.floor(Math.random() * 101)
    targetElem.innerHTML = targetInt;
}

//sleep const
const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

//number spinner
const spin = async () => {
  for (var i=0;i<101;i++) {
    if(i==100){
        i=0;
    }
    if(pushed == true){
        stop(i); //Trigger this function when the STOP button has been pushed
        break;
    }else{
        spinningElem.innerHTML = i;
        await sleep(75) //Paste this 
    }  
  }
}

function stop(i){
    var offBy= Math.abs(targetInt-(i-1))
    var message;
    
    if(offBy == 0){
        message="You Win!"
    }
    else{
        message="Oh no, you lose! Off by "+offBy.toString()
    }
    var result = document.getElementById('result');
    result.innerHTML = message    
}

setTargetInt();
spin()