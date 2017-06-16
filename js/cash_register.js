const DISPLAY = document.getElementById("screen");
const BUTTON_BOX = document.getElementById("buttonBox");
const MATH_BOX = document.getElementById("mathBox");
const REGISTER_BOX = document.getElementById("registerBox");
const NUMBER_ARRAY = ["9","8","7","6","5","4","3","2","1","0","00", "."];
const MATH_ARRAY = ["+", "-", "x", "/", "="];
const REGISTER_ARRAY = ["withdraw cash", "deposit cash", "get balance", "clear"];

let displayInput = function(num){
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
  displayInput();

let buttonPop = function(array){
    for (let i = 0; i < array.length; i++){
      let numberButtons = document.createElement("button");
      numberButtons.className = "numButt";
      numberButtons.id = array[i];
      numberButtons.value = array[i];
      numberButtons.innerHTML = " [ " + array[i] + " ] ";
      numberButtons.addEventListener("click", displayInput(array[i]));
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
    registerButtons.className = "mathButt";
    registerButtons.id = array[i];
    registerButtons.innerHTML = " [ " + array[i] + " ] ";
    REGISTER_BOX.appendChild(registerButtons);
  }
};
registerPop(REGISTER_ARRAY);
