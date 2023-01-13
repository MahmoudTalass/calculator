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
const clear = document.querySelector("#clear");
const decimalPoint = document.querySelector("#decimal-point")

let num1;
let num2;
let operation;

clear.addEventListener("click", () => {
   currentNumDis.textContent = "";
   fullOperationDis.textContent = "";
   currentNumDisVal = undefined;
   num1 = undefined;
   num2 = undefined;
});

equals.addEventListener("click", () => {
   if (!fullOperationDis.textContent.includes("=")) {
      if (num1) {
         num2 = parseFloat(currentNumDisVal);
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
      if (btn.textContent !== ".") {
         displayNum(btn)
      }
   });
});

decimalPoint.addEventListener("click", (btn) => {
   displayNum(btn)
})

function displayNum(btn) {
   if (currentNumDis.textContent === "0") {
            currentNumDis.textContent = btn.textContent;
         } else {
            currentNumDis.textContent += btn.textContent;
         }
         currentNumDisVal = currentNumDis.textContent;
      }


function doOperation(sign, op) {
   if (num2 === undefined) {
      if (num1) {
         fullOperationDis.textContent = `${num1} ${sign} `;
      } else {
         num1 = parseFloat(currentNumDisVal);
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
