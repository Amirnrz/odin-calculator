const display = document.querySelector('.display')
const clearBtn = document.querySelector('#clear-btn')
const equalBtn = document.querySelector('#equal-btn')
const digitBtns = document.querySelectorAll('[data-digit]')
const operatorBtns = document.querySelectorAll('[data-op]')

let firstNumber =''
let secondNumber = ''
let operator = ''



function operate(operator,num1,num2) {
  num1 = parseFloat(num1)
  num2 = parseFloat(num2)

  switch (operator) {
    case '+':
      return add(num1,num2);
    case '-':
      return subtract(num1,num2);
    case '*':
      return multiply(num1,num2)
    case '/':
      return divide(num1,num2)
  }
}


function add(a,b) {
  return a + b
}

function subtract(a,b) {
  return a - b
}

function multiply(a,b) {
  return a * b
}

function divide(a,b) {
  if(b === 0) {
    display.innerHTML = 'cannot divide to 0'
    return
  }
  return a / b  
}

function clearCalculator() {
  firstNumber = ''
  secondNumber = ''
  operator = ''
  display.innerHTML = ''
}

function updateUI() {
  display.innerHTML = firstNumber + ' ' + operator + ' ' + secondNumber
}

digitBtns.forEach(btn => {
  btn.addEventListener('click',() => {
    if(operator === '') {
      firstNumber += btn.dataset.digit
    } else {
      secondNumber += btn.dataset.digit
    }
    updateUI()
  })
})


operatorBtns.forEach(btn => btn.addEventListener('click',() => {
  if(firstNumber !== '' && secondNumber !== '') {
    const result = operate(operator,firstNumber,secondNumber)
    firstNumber = result.toString()
    secondNumber = ''
  }
  operator = btn.dataset.op
  updateUI()
}))

clearBtn.addEventListener('click',clearCalculator)

equalBtn.addEventListener('click',() => {
  if(firstNumber !== '' && secondNumber !== '') {
    const result = operate(operator,firstNumber,secondNumber)
    if(result) {
      firstNumber = result.toString()
      operator = ''
      secondNumber = ''
      display.innerHTML = firstNumber
    }
  }
})