


var myMusic=document.getElementById("audio");
var progress=document.getElementById("progress");
var pla=document.getElementById("play");
var time1=document.getElementById("time1");
var time2=document.getElementById("time2");
var slider=document.getElementById("slider");

function volume(){
  console.log(slider.value/100);
  myMusic.volume=(slider.value/100);

  
}

var count=0;

function skip(){
  myMusic.currentTime=progress.value*3;
  console.log(progress.value);
  console.log(myMusic.currentTime);
  count--;
  play();
  
}

function play()
{
  if(count%2==0){
      myMusic.play();
      pla.id="playing";
  }
  else{
    myMusic.pause();
    pla.id="pause";

  }

count++;

}

var t=00;

setInterval(function(){
              progress.value=(myMusic.currentTime/300)*100;
              if(progress.value==100){
                pla.id="pause";
                
              }
              else{
              

              }

              
                t=Math.trunc(myMusic.currentTime/60);             
              
                   
                 
              time2.innerText=Math.trunc(myMusic.currentTime%60);
              time1.innerText=t;
}, 1000);