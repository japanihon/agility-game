//HINT: ONLY EDIT THE SPIN() AND STOP() FUNCTIONS

//globals
let pushed = false //Has the stop button been pushed - false is default
let targetInt; //The target number to stop the wheel on

//event listener
document.getElementById("buttonPressed").addEventListener("click", buttonPressed);

//When the stop button is pushed
function buttonPressed(){
    pushed = true;
}

//set the target Int
function setTargetInt(){
    targetInt=Math.floor(Math.random() * 101)
    document.getElementById('targetNum').innerHTML = targetInt;
}

//sleep const
const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}



//EDIT THIS FUNCTION
const spin = async () => {
    //WRITE YOUR CODE HERE
    for(let i = 0; i <= 100; i++) {
        if(i === 100) i = 0;
        if(pushed) {
            stop(i) //Trigger this function when the STOP button has been pushed
            break
        }
        document.getElementById('spinning').innerText = i; //The spinning number
        await sleep(75) //Paste this wherever you need to sleep the incrimentor    
    } 
     
  
}

//EDIT THIS FUNCTION
function stop(i){
    //WRITE YOUR CODE HERE
    let message
    const offBy = Math.abs(targetInt-(i-1))
    if(offBy === 0) {
        message="You Win!"
    } else {
        message=`Oh no, you lose! Off by ${offBy}`
    }
    document.getElementById('result').innerText = message; //display your result message here

        
}


//main
setTargetInt();
spin()