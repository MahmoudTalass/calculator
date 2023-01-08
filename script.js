const fullOperationDis = document.querySelector("#full-operation");
let fullOperationDisVal = fullOperationDis.textContent;
const currentNumDis = document.querySelector("#current-num")
let currentNumDisVal = currentNumDis.textContent;

const numBtns = document.querySelectorAll(".num-btn");
const numBtnsArr = [...numBtns];

const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const divide = document.querySelector("#divide");
const times = document.querySelector("#times");

let values = []
let operation;

plus.addEventListener(("click"), () => {
   values.push(currentNumDisVal);
   currentNumDis.textContent = ''
   if (fullOperationDis.textContent === "") {
      fullOperationDis.textContent += `${values[values.length - 1]}`
   } else {
      fullOperationDis.textContent += ` + ${values[values.length - 1]}`
   }
   operation = add();
})

numBtnsArr.map((btn) => {
   btn.addEventListener("click", () => {
      currentNumDis.textContent += btn.textContent;
      currentNumDisVal = currentNumDis.textContent;
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
