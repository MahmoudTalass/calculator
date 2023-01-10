const fullOperationDis = document.querySelector("#full-operation");
let fullOperationDisVal = fullOperationDis.textContent;
const currentNumDis = document.querySelector("#current-num");
let currentNumDisVal = currentNumDis.textContent;

const numBtns = document.querySelectorAll(".num-btn");
const numBtnsArr = [...numBtns];

const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const divide = document.querySelector("#divide");
const times = document.querySelector("#times");
const equals = document.querySelector("#equals");

// let values = [];
let num1;
let num2;
let operation;

equals.addEventListener("click", () => {
   if (num1) {
      num2 = parseInt(currentNumDisVal);
      fullOperationDis.textContent += `${num2} =`;
      if (operation === division && num2 === 0) {
         currentNumDis.textContent = "error: you cannot divide by 0";
      } else {
         let result = operate(operation, num1, num2);
         currentNumDis.textContent = result;
         num1 = result;
         num2 = undefined;
      }
   }
});

plus.addEventListener("click", () => {
   doOperation("+", add);
});

minus.addEventListener("click", () => {
   doOperation("-", subtract);
});

divide.addEventListener("click", () => {
   doOperation("÷", division);
});

times.addEventListener("click", () => {
   doOperation("•", multiply);
});

numBtnsArr.map((btn) => {
   btn.addEventListener("click", () => {
      currentNumDis.textContent += btn.textContent;
      currentNumDisVal = currentNumDis.textContent;
   });
});

function doOperation(sign, op) {
   if (num2 === undefined) {
      if (num1) {
         fullOperationDis.textContent = `${num1} ${sign} `;
      } else {
         num1 = parseInt(currentNumDisVal);
         fullOperationDis.textContent += `${num1} ${sign} `;
      }
      currentNumDis.textContent = "";
      operation = op;
   }
}

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
