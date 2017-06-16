const DISPLAY = document.getElementById("screen");
const BTN9 = document.getElementById("nine");
displayPopulated = false;

  let displayInput =function(){
    displayPopulated = false;
return function(){
    if (displayPopulated === false){
      DISPLAY.innerHTML = 9;
      displayPopulated = true;
    }else{
      DISPLAY.innerHTML = DISPLAY.innerHTML + 9;
    }
  };
};


let displayFull = displayInput;
BTN9.addEventListener("click",displayFull());
