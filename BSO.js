'use strict';
//ボールを増やす
const BallPlusBtn = document.getElementById('BallPlusBtn'); 
var BI = document.getElementById('BallIndicator');
BallPlusBtn.addEventListener('click' , () => {

switch(BI.textContent){

   case '●':
    BI.textContent = '●●';
    break;
   case '●●' :
    BI.textContent = '●●●';
    break;
   case '●●●' :
    BI.textContent = '●●●';
    break;
   default:
    BI.textContent = '●';
  } 
});
//ボールを減らす
const BallMinusBtn = document.getElementById('BallMinusBtn'); 
//var BI = document.getElementById('BallIndicator');
BallMinusBtn.addEventListener('click' , () => {

 switch(BI.textContent){
   case "●●●":
    BI.textContent ="●●";
     break;
   case  "●●":
    BI.textContent = "●";
     break;
   default:
    BI.textContent ="";
  }
});
//ストライクを増やす
const StrikePlusBtn = document.getElementById('StrikePlusBtn'); 
var SI = document.getElementById('StrikeIndicator');
StrikePlusBtn.addEventListener('click' , () => {
   switch(SI.textContent){
   case "●":
     SI.textContent="●●";
     break;
   case "●●":
     SI.textContent= "●●";
     break;
   default:
     SI.textContent="●";
  }
});
//ストライクを減らす
const StrikeMinusBtn = document.getElementById('StrikeMinusBtn'); 
StrikeMinusBtn.addEventListener('click' , () => {
 switch(SI.textContent){
   case "●●":
     SI.textContent = "●";
     break;
   default:
     SI.textContent = "";
  }
});
//アウトを増やす
const OutPlusBtn = document.getElementById('OutPlusBtn');
var OI = document.getElementById('OutIndicator');
OutPlusBtn.addEventListener('click' , () =>{
  switch(OI.textContent){
   case "●":
     OI.textContent = "●●";
     break;
   case "●●":
     OI.textContent = "●●";
     break;
   default:
     OI.textContent = "●";
  }
});
//アウトを減らす
const OutMinusBtn = document.getElementById('OutMinusBtn');
var OI = document.getElementById('OutIndicator');
OutMinusBtn.addEventListener('click' , ()=>{
 switch(OI.textContent){
   case "●●":
     OI.textContent = "●";
     break;
   default:
     OI.textContent = "";
}
});
//ボールをクリア
const BallClear = document.getElementById('BallClearBtn');
BallClear.addEventListener('click',()=>{
  BI.textContent = "";
});
//ストライクをクリア
const StrikeClearBtn = document.getElementById('StrikeClearBtn') ;
StrikeClearBtn.addEventListener('click',()=>{
   SI.textContent = "";
 });

//アウトをクリア
const OutClearBtn = document.getElementById('OutClearBtn');
OutClearBtn.addEventListener('click',()=>{
  OI.textContent = "";
});
//ボールとストライクをクリア
const BSClearBtn = document.getElementById('BSClearBtn') ;
BSClearBtn.addEventListener('click',()=>{
  BI.textContent = "";
  SI.textContent = "";
}); 
//すべてをクリア
const AllClearBtn = document.getElementById('AllClearBtn');
AllClearBtn.addEventListener('click',()=>{
  BI.textContent = "";
  SI.textContent = "";
  OI.textContent = "";
});
 