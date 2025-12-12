function add (x, y) {
    return x + y
}

function subtract (x, y) {
    return x - y
}

function multiply (x, y) {
    return x * y
}

function divide (x, y) {
    return x / y
}

function operate(firstNo, oper, secondNo) {
    if (oper === "+") {
        return add(firstNo, secondNo)
    } else if (oper === "-") {
        return subtract(firstNo, secondNo)
    } else if (oper === "*") {
        return multiply(firstNo, secondNo)
    } else if (oper === "/") {
        return divide(firstNo, secondNo)
    }
}


function clear() {
    const clearingNode = document.getElementById("textbox")
    while(clearingNode.firstChild) {
        clearingNode.removeChild(clearingNode.firstChild)
    }
}

let num = document.createElement("div")
let tempNum = ""
let firstNo
let secondNo 


const textBox = document.getElementById("textbox")
let isFirstNumber = true

let hasDecimalPlace = false
let decimalButton = document.getElementById("decimal")
decimalButton.addEventListener("click", () => {
    decimalButton.style.display = "none"
})

let numsOperator = document.querySelectorAll(".nums")
numsOperator.forEach((button) => {
    button.addEventListener("click", () => {
        clear()
        if (isCalculated === true) {
            oper = ""
            tempNum = ""
            firstNo = null
            secondNo = null
            isFirstNumber = true
            isCalculated = false
        } 
        tempNum += button.textContent
        num.textContent = tempNum
        textBox.appendChild(num)
    })
})

let opr = document.createElement("div")
let oper
let oprOperator = document.querySelectorAll(".oprs")
oprOperator.forEach((button) => {
    button.addEventListener("click", () => {
        isCalculated = false
        decimalButton.style.display = "block"
        clear()
        if (isFirstNumber) {
            firstNo = (Number) (tempNum)
            firstNo = Number.isNaN(firstNo) ? 0 : firstNo
            isFirstNumber = false
            console.log(firstNo)
            tempNum = ""
        } 
        opr.innerHTML = button.textContent
        oper = opr.textContent
        textBox.appendChild(opr)
    })
})

let clrBtn = document.getElementById("clear")
clrBtn.addEventListener("click", () => {
    clear()
    oper = ""
    tempNum = ""
    firstNo = null
    secondNo = null
    isFirstNumber = true
})

let errorMessage = document.createElement("div")
errorMessage.textContent = "Error! Cleared!"

let isCalculated = false
let value
let eqlBtn = document.getElementById("equals")
eqlBtn.addEventListener("click", () => {
    console.log(firstNo,oper,secondNo)
    clear()
    if (firstNo === undefined || oper === "") {
        errorMessageShower()
    } else {
        secondNo = (Number) (tempNum)
        secondNo = Number.isNaN(secondNo) ? 0 : secondNo
        if (secondNo === 0 && oper === "/") {
            errorMessageShower()
        } else {
            tempNum = ""
            value = operate(firstNo, oper, secondNo)
            value = Math.round(value* 100) / 100
            let result = document.createElement("div")
            result.innerHTML = value
            textBox.appendChild(result)
            firstNo = value
            oper = ""
            tempNum = ""
            secondNo = ""
            isCalculated = true
            decimalButton.style.display = "block"
        }
    }
})

function errorMessageShower() {
    clear()
    textBox.appendChild(errorMessage)
    oper = ""
    tempNum = ""
    firstNo = null
    secondNo = null
    isFirstNumber = true
    console.log(firstNo,oper,secondNo)
}