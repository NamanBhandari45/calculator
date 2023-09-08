const buttonEl = document.querySelectorAll(".btn");

const display = document.getElementById("display");

for(let i = 0; i < buttonEl.length; i++){
   buttonEl[i].addEventListener("click", () => {
      const value = buttonEl[i].innerHTML;

      if(value === "DEL") {
        deleteValue();
      }
      else if(value === "RESET"){
        resetValue();
      }
      else if(value === "="){
        calculateResult();
      }
      else{
        appendValue(value);
      }
   });
 
}

function calculateResult(){
  let result = eval(display.innerHTML);
  result = Number(result.toFixed(6));
  display.innerHTML = result;
}

function deleteValue(){
  display.innerHTML = display.innerHTML.slice(0, -1)
}

function resetValue(){
   display.innerHTML = 0;
}

function appendValue(value){
  if(display.innerHTML == '0'){
    display.innerHTML=" ";
  }
  display.innerHTML += value
}


