/*jshint esversion: 6 */
//html variables and arrays
(function(window){
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
      numberButtons.className = "numButton";
      numberButtons.id = array[i];
      numberButtons.innerHTML = " [ " + array[i] + " ] ";
      numberButtons.addEventListener("click", numberInput(array[i]));
      BUTTON_BOX.appendChild(numberButtons);

    }
  };
  buttonPop(NUMBER_ARRAY);

let mathPop = function(array){

  for (let i = 0; i < array.length; i++){
    let mathButtons = document.createElement("button");
    mathButtons.className = "mathButton";
    mathButtons.id = array[i];
    mathButtons.innerHTML = " [ " + array[i] + " ] ";
    MATH_BOX.appendChild(mathButtons);

  }
};
mathPop(MATH_ARRAY);


let registerPop = function(array){
  for (let i = 0; i < array.length; i++){
    let registerButtons = document.createElement("button");
    registerButtons.className = "regButton";
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

//decimal
  let decimalButton = document.getElementById(".");
  decimalClicked = false;
  decimalButton.addEventListener("click", function(){
    if (decimalClicked === false){
    DISPLAY.innerHTML+= ".";
    decimalClicked = true;
  }
});

//math operators

   let input = 0;
   let total = 0;
    let storedOp;

let mathAdd = document.getElementById("+");
  mathAdd.addEventListener("click", function(){
    if (typeof storedOp !== "string"){
      storedOp = mathAdd.innerHTML;
      input = parseFloat(DISPLAY.innerHTML);
      total = input;
      DISPLAY.innerHTML = input;
      displayPopulated = false;
      decimalClicked = false;
    }else if (storedOp === mathAdd.innerHTML){
      storedOp = mathAdd.innerHTML;
      input = parseFloat(DISPLAY.innerHTML);
      total+=input;
      DISPLAY.innerHTML = total;
      displayPopulated = false;
      decimalClicked = false;
    }else if (storedOp === mathSubtract.innerHTML){
      storedOp = mathAdd.innerHTML;
      input = parseFloat(DISPLAY.innerHTML);
      total -= input;
      DISPLAY.innerHTML = total;
      displayPopulated = false;
      decimalClicked = false;
    }else if (storedOp === mathMult.innerHTML){
      storedOp = mathAdd.innerHTML;
      input = parseFloat(DISPLAY.innerHTML);
      total *= input;
      DISPLAY.innerHTML = total;
      displayPopulated = false;
      decimalClicked = false;
    }else if (storedOp === mathDivide.innerHTML){
      storedOp = mathAdd.innerHTML;
      input = parseFloat(DISPLAY.innerHTML);
      total /= input;
      DISPLAY.innerHTML = total;
      displayPopulated = false;
      decimalClicked = false;
    }
  });

let mathSubtract = document.getElementById("-");
  mathSubtract.addEventListener("click", function(){
    if (typeof storedOp !== "string"){
      storedOp = mathSubtract.innerHTML;
      input = parseFloat(DISPLAY.innerHTML);
      total = input;
      DISPLAY.innerHTML = input;
      displayPopulated = false;
      decimalClicked = false;
    }else if (storedOp === mathSubtract.innerHTML){
      input = parseFloat(DISPLAY.innerHTML);
      total-=input;
      DISPLAY.innerHTML = total;
      displayPopulated = false;
      decimalClicked = false;
    }else if (storedOp === mathAdd.innerHTML){
      storedOp = mathSubtract.innerHTML;
      input = parseFloat(DISPLAY.innerHTML);
      total += input;
      DISPLAY.innerHTML = total;
      displayPopulated = false;
      decimalClicked = false;
    }else if (storedOp === mathMult.innerHTML){
      storedOp = mathSubtract.innerHTML;
      input = parseFloat(DISPLAY.innerHTML);
      total *= input;
      DISPLAY.innerHTML = total;
      displayPopulated = false;
      decimalClicked = false;
    }else if (storedOp === mathDivide.innerHTML){
      storedOp = mathSubtract.innerHTML;
      input = parseFloat(DISPLAY.innerHTML);
      total /= input;
      DISPLAY.innerHTML = total;
      displayPopulated = false;
      decimalClicked = false;
    }
  });

let mathMult = document.getElementById("x");
  mathMult.addEventListener("click", function(){
    if (typeof storedOp !== "string"){
      storedOp = mathMult.innerHTML;
      input = parseFloat(DISPLAY.innerHTML);
      total = input;
      DISPLAY.innerHTML = input;
      displayPopulated = false;
      decimalClicked = false;
    }else if (storedOp === mathMult.innerHTML){
      input = parseFloat(DISPLAY.innerHTML);
      total*=input;
      DISPLAY.innerHTML = total;
      displayPopulated = false;
      decimalClicked = false;
    }else if (storedOp === mathAdd.innerHTML){
      storedOp = mathMult.innerHTML;
      input = parseFloat(DISPLAY.innerHTML);
      total += input;
      DISPLAY.innerHTML = total;
      displayPopulated = false;
      decimalClicked = false;
    }else if (storedOp === mathSubtract.innerHTML){
      storedOp = mathMult.innerHTML;
      input = parseFloat(DISPLAY.innerHTML);
      total -= input;
      DISPLAY.innerHTML = total;
      displayPopulated = false;
      decimalClicked = false;
    }else if (storedOp === mathDivide.innerHTML){
      storedOp = mathMult.innerHTML;
      input = parseFloat(DISPLAY.innerHTML);
      total /= input;
      DISPLAY.innerHTML = total;
      displayPopulated = false;
      decimalClicked = false;
    }
  });

  let mathDivide = document.getElementById("/");
  mathDivide.addEventListener("click", function(){
    if (typeof storedOp !== "string"){
      storedOp = mathDivide.innerHTML;
      input = parseFloat(DISPLAY.innerHTML);
      total = input;
      DISPLAY.innerHTML = input;
      displayPopulated = false;
      decimalClicked = false;
    }else if (storedOp === mathDivide.innerHTML){
      input = parseFloat(DISPLAY.innerHTML);
      total/=input;
      DISPLAY.innerHTML = total;
      displayPopulated = false;
      decimalClicked = false;
    }else if (storedOp === mathAdd.innerHTML){
      storedOp = mathDivide.innerHTML;
      input = parseFloat(DISPLAY.innerHTML);
      total += input;
      DISPLAY.innerHTML = total;
      displayPopulated = false;
    }else if (storedOp === mathSubtract.innerHTML){
      storedOp = mathDivide.innerHTML;
      input = parseFloat(DISPLAY.innerHTML);
      total -= input;
      DISPLAY.innerHTML = total;
      displayPopulated = false;
      decimalClicked = false;
    }else if (storedOp === mathMult.innerHTML){
      storedOp = mathDivide.innerHTML;
      input = parseFloat(DISPLAY.innerHTML);
      total *= input;
      DISPLAY.innerHTML = total;
      displayPopulated = false;
      decimalClicked = false;
    }
  });

    let mathEqual = document.getElementById("=");
    mathEqual.addEventListener("click", function(){
      if (storedOp === mathAdd.innerHTML){
      storedOp = 0;
      input = parseFloat(DISPLAY.innerHTML);
      total+=input;
      DISPLAY.innerHTML = total;
      displayPopulated = false;
      decimalClicked = false;
    }else if (storedOp === mathSubtract.innerHTML){
      storedOp = 0;
      input = parseFloat(DISPLAY.innerHTML);
      total -= input;
      DISPLAY.innerHTML = total;
      displayPopulated = false;
      decimalClicked = false;
    }else if (storedOp === mathMult.innerHTML){
      storedOp = 0;
      input = parseFloat(DISPLAY.innerHTML);
      total *= input;
      DISPLAY.innerHTML = total;
      displayPopulated = false;
      decimalClicked = false;
    }else if (storedOp === mathDivide.innerHTML){
      storedOp = 0;
      input = parseFloat(DISPLAY.innerHTML);
      total /= input;
      DISPLAY.innerHTML = total;
      displayPopulated = false;
      decimalClicked = false;
    }
  });

})(window);