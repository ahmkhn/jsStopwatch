const timer = document.getElementById("mainTimer");
// timer holds 00:00:00 at start.

let newTimer=null;
let isRunning=false;
let stopped=false;
function startClick(){
    if(!isRunning){
        // then start the stopWatch
        if(!stopped){
            newTimer=setInterval(update,10); // call this every 10 ms
        }
        isRunning=true;
    }
}
function stopClick(){
    clearInterval(newTimer);
    isRunning=false;
}
function update(){
    const currentTimer = timer.textContent;
    const timerSplitArray=currentTimer.split(":");
    const timerIntegerSplitArray = timerSplitArray.map((element,index,values)=>{
        return(parseInt(element));
    })
    timerIntegerSplitArray[3]=timerIntegerSplitArray[3]+1;
    if(timerIntegerSplitArray[3]>=100){
        timerIntegerSplitArray[2]++;
        timerIntegerSplitArray[3]=0;
    }
    if(timerIntegerSplitArray[2]>=60){
        timerIntegerSplitArray[1]++;
        timerIntegerSplitArray[2]=0;
    }
    if(timerIntegerSplitArray[1]>=60){
        timerIntegerSplitArray[0]++;
        timerIntegerSplitArray[1]=0;
    }
    timer.textContent=(timerIntegerSplitArray[0]+":"+timerIntegerSplitArray[1]+":"+timerIntegerSplitArray[2]+":"+timerIntegerSplitArray[3]);
}
function reset(){
    timer.textContent=("0:0:0:00");
}