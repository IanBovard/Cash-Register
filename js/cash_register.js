const DISPLAY = document.getElementById("screen");
const BTN9 = document.getElementById("nine");
const BUTTONBOX = document.getElementById('buttonsBox');

const NUMBERARRAY = ["9","8","7","6","5","4","3","2","1","0","00"];


 let displayInput =function(num){
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
      numberButtons.className = "buttons";
      numberButtons.value = array[i];
      numberButtons.innerHTML = " [ " + array[i] + " ] ";
      numberButtons.addEventListener("click", displayInput(array[i]));
      BUTTONBOX.appendChild(numberButtons);

    }
  };
  buttonPop(NUMBERARRAY);



