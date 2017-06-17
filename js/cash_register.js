/*jshint esversion: 6 */
//html variables and arrays
const DISPLAY = document.getElementById("screen");
const BUTTON_BOX = document.getElementById("buttonBox");
const MATH_BOX = document.getElementById("mathBox");
const REGISTER_BOX = document.getElementById("registerBox");
const NUMBER_ARRAY = ["9","8","7","6","5","4","3","2","1","0","00"];
const MATH_ARRAY = ["+", "-", "x", "/", "=", "."];
const REGISTER_ARRAY = ["withdraw cash", "deposit cash", "get balance", "clear"];
let CALC = window.calculator;
let displayMem = 0;

//screen concat

let numberInput = function(num){
    displayPopulated = false;
  return function(){
      if (displayPopulated === false){
        DISPLAY.innerHTML = num;
        displayPopulated = true;
      }else{
        DISPLAY.innerHTML+= num;
     }
  };
};

//button populators

let buttonPop = function(array){
    for (let i = 0; i < array.length; i++){
      let numberButtons = document.createElement("button");
      numberButtons.className = "numButt";
      numberButtons.id = array[i];
      numberButtons.value = array[i];
      numberButtons.innerHTML = " [ " + array[i] + " ] ";
      numberButtons.addEventListener("click", numberInput(array[i]));
      BUTTON_BOX.appendChild(numberButtons);

    }
  };
  buttonPop(NUMBER_ARRAY);

let mathPop = function(array){

  for (let i = 0; i < array.length; i++){
    let mathButtons = document.createElement("button");
    mathButtons.className = "mathButt";
    mathButtons.id = array[i];
    mathButtons.innerHTML = " [ " + array[i] + " ] ";
    MATH_BOX.appendChild(mathButtons);

  }
};
mathPop(MATH_ARRAY);


let registerPop = function(array){
  for (let i = 0; i < array.length; i++){
    let registerButtons = document.createElement("button");
    registerButtons.className = "regButt";
    registerButtons.id = array[i];
    registerButtons.innerHTML = " [ " + array[i] + " ] ";
    registerButtons.addEventListener('click', function(){
      DISPLAY.innerHTML = "0.00";
      displayPopulated = false;
      storedOp = 0;
      total = 0;
    });
    REGISTER_BOX.appendChild(registerButtons);

  }
};
registerPop(REGISTER_ARRAY);

   let input = 0;
   let total = 0;
    let storedOp;
    console.log(storedOp);

let mathAdd = document.getElementById("+");
  mathAdd.addEventListener("click", function(){
    if (storedOp !== mathAdd.innerHTML){
      storedOp = mathAdd.innerHTML;
      input = parseInt(DISPLAY.innerHTML);
      total = input;
      DISPLAY.innerHTML = input;
      displayPopulated = false;
    }else if (storedOp === mathAdd.innerHTML){
      input = parseInt(DISPLAY.innerHTML);
      total+=input;
      DISPLAY.innerHTML = total;
      displayPopulated = false;
      console.log(storedOp);
    }
  });

let mathSubtract = document.getElementById("-");
  mathSubtract.addEventListener("click", function(){
    if (storedOp !== mathSubtract.innerHTML){
      storedOp = mathSubtract.innerHTML;
      input = parseInt(DISPLAY.innerHTML);
      total = input;
      DISPLAY.innerHTML = input;
      displayPopulated = false;
    }else if (storedOp === mathSubtract.innerHTML){
      input = parseInt(DISPLAY.innerHTML);
      total-=input;
      DISPLAY.innerHTML = total;
      displayPopulated = false;
    }
  });

let mathMult = document.getElementById("x");
  mathMult.addEventListener("click", function(){
    if (storedOp !== mathMult.innerHTML){
      storedOp = mathMult.innerHTML;
      input = parseInt(DISPLAY.innerHTML);
      total = input;
      DISPLAY.innerHTML = input;
      displayPopulated = false;
      console.log(input);
      console.log(storedOp);
    }else if (storedOp === mathMult.innerHTML){
      input = parseInt(DISPLAY.innerHTML);
      total*=input;
      DISPLAY.innerHTML = total;
      displayPopulated = false;
      console.log(total);
      console.log(storedOp);
      console.log(input);
    }
  });

  let mathDivide = document.getElementById("/");
  mathDivide.addEventListener("click", function(){
    if (storedOp !== mathDivide.innerHTML){
      storedOp = mathDivide.innerHTML;
      input = parseInt(DISPLAY.innerHTML);
      total = input;
      DISPLAY.innerHTML = input;
      displayPopulated = false;
      console.log(input);
      console.log(storedOp);
    }else if (storedOp === mathDivide.innerHTML){
      input = parseInt(DISPLAY.innerHTML);
      total/=input;
      DISPLAY.innerHTML = total;
      displayPopulated = false;
      console.log(total);
      console.log(storedOp);
      console.log(input);
    }
  });
