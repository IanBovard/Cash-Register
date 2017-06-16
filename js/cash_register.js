const DISPLAY = document.getElementById("screen");
const BTN9 = document.getElementById("nine");
const BUTTONBOX = document.getElementById('buttonsBox');

const NUMBERARRAY = ["0","00","1","2","3","4","5","6","7","8","9"];


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
      let numberButtons = document.createElement("div");
      numberButtons.className = "buttons";
      numberButtons.value = array[i];
      numberButtons.innerHTML = " [ " + array[i] + " ] ";
      numberButtons.addEventListener("click", displayInput(array[i]));
      BUTTONBOX.appendChild(numberButtons);

    }
  };
  buttonPop(NUMBERARRAY);
  console.log(numberButtons);



