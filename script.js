const display = document.querySelector("#display");
let displayVal = display.textContent;
const numBtns = document.querySelectorAll(".num-btn");
const numBtnsArr = [...numBtns];

const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const divide = document.querySelector("#divide");
const times = document.querySelector("#times");

let values = []
let operation;

plus.addEventListener(("click"), () => {
   values.push(displayVal);
   display.textContent += "+";
   operation = add
})

numBtnsArr.map((btn) => {
   btn.addEventListener("click", () => {
      display.textContent += btn.textContent;
      displayVal = display.textContent;
   });
});

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

function division(...args) {
   return args.reduce((total, currentNum) => {
      return total / currentNum;
   });
}

function operate(operator, num1, num2) {
   return operator(num1, num2);
}
