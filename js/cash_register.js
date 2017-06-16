const DISPLAY = document.getElementById("screen");
const BTN9 = document.getElementById("nine");


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


let displayFull = displayInput;
BTN9.addEventListener("click", displayFull(BTN9.value));


/*BTN9.addEventListener("click",function(e){
  console.log(e.target.value);*/
/* function buttonClick1(){
  display.innerHTML+=1;
  };*/
