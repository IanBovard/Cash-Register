//html variables and arrays
const DISPLAY = document.getElementById("screen");
const BUTTON_BOX = document.getElementById("buttonBox");
const MATH_BOX = document.getElementById("mathBox");
const REGISTER_BOX = document.getElementById("registerBox");
const NUMBER_ARRAY = ["9","8","7","6","5","4","3","2","1","0","00"];
const MATH_ARRAY = ["+", "-", "x", "/", "=", "."];
const REGISTER_ARRAY = ["withdraw cash", "deposit cash", "get balance", "clear"];


//three event listeners
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
  numberInput();

let mathInput = function(){

};

//button population arrays
let buttonPop = function(array){
    for (let i = 0; i < array.length; i++){
      let numberButtons = document.createElement("button");
      numberButtons.className = "numButt";
      numberButtons.id = array[i];
      numberButtons.value = array[i];
      numberButtons.innerHTML = " [ " + array[i] + " ] ";
      numberButtons.addEventListener("click", numberInput(array[i]));
      BUTTON_BOX.appendChild(numberButtons);
      console.log(numberButtons.id);

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
    });
    REGISTER_BOX.appendChild(registerButtons);

  }
};
registerPop(REGISTER_ARRAY);
