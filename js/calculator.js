window.calculator =(function(){
function calculatorModule(){
  let memory = 0;
  let total = 0;


  function load(x){
    validate(x);
    total = x;
    return total;
  }

  function getTotal(){
    return total;
  }
  function add(x){
    validate(x);
    total = total + x;
    return total;
  }

  function subtract(x){
    validate(x);
    total = total - x;
    return total;
  }

  function multiply(x){
    validate(x);
    total = total * x;
    return total;
  }

  function divide(x){
    validate(x);
    total = total / x;
    return total;
  }

  function recallMemory(){
    return memory;
  }
  function saveMemory(){
    memory = total;
    return memory;
  }
  function clearMemory(){
    memory = 0;
    return memory;
  }
  function validate(x){
    if (typeof x !== "number"){
      throw new Error("This is not a number!");
    }
  }
    return {
    load : load,
    getTotal : getTotal,
    add : add,
    subtract : subtract,
    multiply : multiply,
    divide : divide,
    recallMemory : recallMemory,
    saveMemory : saveMemory,
    clearMemory : clearMemory,
  };
}
})();
