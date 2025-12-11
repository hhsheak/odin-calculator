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

// let num1 = document.createElement("div")
// let num2 = document.createElement("div")
let num = document.createElement("div")
let tempNum = ""
let firstNo
let secondNo 


const textBox = document.getElementById("textbox")
let isFirstNumber = true

let numsOperator = document.querySelectorAll(".nums")
numsOperator.forEach((button) => {
    button.addEventListener("click", () => {
        clear()
        if (oper === "") {
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


function getNumber(button) {
}

let opr = document.createElement("div")
let oper
let oprOperator = document.querySelectorAll(".oprs")
oprOperator.forEach((button) => {
    button.addEventListener("click", () => {
        clear()
        if (isFirstNumber) {
            firstNo = (Number) (tempNum)
            isFirstNumber = false
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

let value
let eqlBtn = document.getElementById("equals")
eqlBtn.addEventListener("click", () => {
    clear()
    secondNo = (Number) (tempNum)
    if (secondNo === 0 || secondNo === NaN) {
        clear()
        textBox.appendChild(errorMessage)
        oper = ""
        tempNum = ""
        firstNo = null
        secondNo = null
        isFirstNumber = true
        console.log(firstNo,oper,secondNo)
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
        console.log(firstNo,oper,secondNo)
    }
})
