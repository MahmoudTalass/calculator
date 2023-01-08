const display = document.querySelector("#display");
let displayVal = display.textContent;
const numBtns = document.querySelectorAll(".num-btn")
const numBtnsArr = [...numBtns]

numBtnsArr.map(btn => {
   btn.addEventListener(("click"), () => {
      display.textContent += btn.textContent
      displayVal = display.textContent;
      console.log(displayVal)
   })
})

function add(...args) {
   return args.reduce((total, currentNum) => {
      return total + currentNum;
   }, 0);
}

function subtract(...args) {
   return args.reduce((total, currentNum) => {
      return total - currentNum;
   });
}

function multiply(...args) {
   return args.reduce((total, currentNum) => {
      return total * currentNum;
   });
}

function divide(...args) {
   return args.reduce((total, currentNum) => {
      return total / currentNum;
   });
}

function operate(operator, num1, num2) {
   return operator(num1, num2);
}
