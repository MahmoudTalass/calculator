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
        return total/currentNum;
    })
}

function operate(operator, num1, num2) {
    return operator(num1, num2)
}
