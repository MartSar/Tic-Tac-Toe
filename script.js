// Blocks

let blck1 = document.getElementById("1");
let blck2 = document.getElementById("2");
let blck3 = document.getElementById("3");
let blck4 = document.getElementById("4");
let blck5 = document.getElementById("5");
let blck6 = document.getElementById("6");
let blck7 = document.getElementById("7");
let blck8 = document.getElementById("8");
let blck9 = document.getElementById("9");

// Points

let x_pnts = document.getElementById("x_pnts");
let o_pnts = document.getElementById("o_pnts");

let x_p = 0;
let o_p = 0;

// Other

let title = document.getElementById("title");

let sign = "X";

function restart(){
 blck1.innerHTML = "";
 blck2.innerHTML = "";
 blck3.innerHTML = "";
 blck4.innerHTML = "";
 blck5.innerHTML = "";
 blck6.innerHTML = "";
 blck7.innerHTML = "";
 blck8.innerHTML = "";
 blck9.innerHTML = "";
 
 title.innerHTML = "";
 
 sign = "X";
}


function checker(){

// Rows
 if(blck1.innerHTML !== "" && blck1.innerHTML === blck2.innerHTML && blck2.innerHTML === blck3.innerHTML){
  if(blck1.innerHTML === "X"){
   x_p++
   x_pnts.innerHTML = x_p;
  } else {
   o_p++
   o_pnts.innerHTML = o_p;
  }
  title.innerHTML = blck1.innerHTML + " wins";
  setTimeout(restart, 500);
  return
 }
 
 if(blck4.innerHTML !== "" && blck4.innerHTML === blck5.innerHTML && blck5.innerHTML === blck6.innerHTML){
  if(blck4.innerHTML === "X"){
   x_p++
   x_pnts.innerHTML = x_p;
  } else {
   o_p++
   o_pnts.innerHTML = o_p;
  }
  title.innerHTML = blck4.innerHTML + " wins";
  setTimeout(restart, 500);
  return
 }
 if(blck7.innerHTML !== "" && blck7.innerHTML === blck8.innerHTML && blck8.innerHTML === blck9.innerHTML){
  if(blck7.innerHTML === "X"){
   x_p++
   x_pnts.innerHTML = x_p;
  } else {
   o_p++
   o_pnts.innerHTML = o_p;
  }
  title.innerHTML = blck7.innerHTML + " wins"; 
  setTimeout(restart, 500);
  return
 }
  
 // Columns
 
 if(blck1.innerHTML !== "" && blck1.innerHTML === blck4.innerHTML && blck4.innerHTML === blck7.innerHTML){
  if(blck1.innerHTML === "X"){
   x_p++
   x_pnts.innerHTML = x_p;
  } else {
   o_p++
   o_pnts.innerHTML = o_p;
  }
  title.innerHTML = blck1.innerHTML + " wins";
  setTimeout(restart, 500);
  return
 }
 if(blck2.innerHTML !== "" && blck2.innerHTML === blck5.innerHTML && blck5.innerHTML === blck8.innerHTML){
  if(blck2.innerHTML === "X"){
   x_p++
   x_pnts.innerHTML = x_p;
  } else {
   o_p++
   o_pnts.innerHTML = o_p;
  }
  title.innerHTML = blck2.innerHTML + " wins";
  setTimeout(restart, 500);
  return
 }
 if(blck3.innerHTML !== "" && blck3.innerHTML === blck6.innerHTML && blck6.innerHTML === blck9.innerHTML){
  if(blck3.innerHTML === "X"){
   x_p++
   x_pnts.innerHTML = x_p;
  } else {
   o_p++
   o_pnts.innerHTML = o_p;
  }
  title.innerHTML = blck3.innerHTML + " wins"; 
  setTimeout(restart, 500);
  return
 }
 // Diagonals
 
 if(blck1.innerHTML !== "" && blck1.innerHTML === blck5.innerHTML && blck5.innerHTML === blck9.innerHTML){
  if(blck1.innerHTML === "X"){
   x_p++
   x_pnts.innerHTML = x_p;
  } else {
   o_p++
   o_pnts.innerHTML = o_p;
  }
  title.innerHTML = blck1.innerHTML + " wins"; 
  setTimeout(restart, 500);
  return
 }
 if(blck3.innerHTML !== "" && blck3.innerHTML === blck5.innerHTML && blck5.innerHTML === blck7.innerHTML){
  if(blck3.innerHTML === "X"){
   x_p++
   x_pnts.innerHTML = x_p;
  } else {
   o_p++
   o_pnts.innerHTML = o_p;
  }
  title.innerHTML = blck3.innerHTML + " wins";
  setTimeout(restart, 500);
  return
  }
  
  // Draw
  if(blck1.innerHTML !== "" &&
     blck2.innerHTML !== "" &&
     blck3.innerHTML !== "" &&
     blck4.innerHTML !== "" &&
     blck5.innerHTML !== "" &&
     blck6.innerHTML !== "" &&
     blck7.innerHTML !== "" &&
     blck8.innerHTML !== "" &&
     blck9.innerHTML !== "" ){
   title.innerHTML = "Draw";
   setTimeout(restart, 520);
 }
 
}

function changer(){
 if(sign === "X"){
  sign = "O";
 } else {
  sign = "X";
 }
}

function addSign1(){
 if(blck1.innerHTML !== ""){
  return
 }
 blck1.innerHTML = sign;
 checker();
 changer();
 
}
function addSign2(){
 if(blck2.innerHTML !== ""){
  return
 }
 blck2.innerHTML = sign;
 checker();
 changer();
 
}
function addSign3(){
 if(blck3.innerHTML !== ""){
  return
 }
 blck3.innerHTML = sign;
 checker();
 changer();
 
}
function addSign4(){
 if(blck4.innerHTML !== ""){
  return
 }
 blck4.innerHTML = sign;
 checker();
 changer();
 
}
function addSign5(){
 if(blck5.innerHTML !== ""){
  return
 }
 blck5.innerHTML = sign;
 checker();
 changer();
 
}
function addSign6(){
 if(blck6.innerHTML !== ""){
  return
 }
 blck6.innerHTML = sign;
 checker();
 changer();
 
}
function addSign7(){
 if(blck7.innerHTML !== ""){
  return
 }
 blck7.innerHTML = sign;
 checker();
 changer();
 
}
function addSign8(){
 if(blck8.innerHTML !== ""){
  return
 }
 blck8.innerHTML = sign;
 checker();
 changer();
 
}
function addSign9(){
 if(blck9.innerHTML !== ""){
  return
 }
 blck9.innerHTML = sign;
 checker();
 changer();
 
}

checker();

document.addEventListener("keydown", function(evt){
 
  if(evt.key === "7"){
   addSign1();
  }
  if(evt.key === "8"){
   addSign2();
  }
  if(evt.key === "9"){
   addSign3();
  }
  if(evt.key === "4"){
   addSign4();
  }
  if(evt.key === "5"){
   addSign5();
  }
  if(evt.key === "6"){
   addSign6();
  }
  if(evt.key === "1"){
   addSign7();
  }
  if(evt.key === "2"){
   addSign8();
  }
  if(evt.key === "3"){
   addSign9();
  }
  if(evt.key === "Backspace"){
   restart();
  }
})
