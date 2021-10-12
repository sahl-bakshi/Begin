// constants

const operatorButtons = document.querySelectorAll(".operator"); 
const numberButtons = document.querySelectorAll(".number"); 
const equalButton = document.querySelector(".equal"); 
const clearButton = document.querySelector(".clear");
const deleteButton = document.querySelector(".delete");
const current = document.querySelector(".current");
const previous = document.querySelector(".previous");
const otherButtons = document.querySelectorAll(".other");


// variables

let res = 0;
let temp = "";
let num1 = "";
let num2 = "";
let oper = "";


// buttons 
otherButtons.forEach(item => {
    item.addEventListener('click', () => {
       appendOther(item.textContent); 
       display(1);
    })
}) 

numberButtons.forEach(num => {
    num.addEventListener('click', () => {
       appendNumber(num.textContent); 
       display(1);
    })
}) 

operatorButtons.forEach(opr => {
    opr.addEventListener('click', () => {
        update(opr.textContent);
        display(2);
    })
})

equalButton.addEventListener('click', () => {
    update(equalButton.textContent)
    res = calculate();
    clear(equalButton.textContent);
    display(3);
})

clearButton.addEventListener('click', () => {
    clear(clearButton.textContent);
    display(4);
})

deleteButton.addEventListener('click', () => {
    clear(deleteButton.textContent);
    display(5);
})


// functions

function appendOther(num) {
    let dec = ".";
    let sign = "+/-";
    if (num == sign) {
        if (temp[0] == "-") {
            temp = temp.slice(1, -1);
            return;
        } 
        temp = "-" + temp; 
    } else if (!temp.includes(dec)) {
        temp += dec;
    }
}

function appendNumber(num) { 
    if (!isNaN(num)) temp += num;
}

function update(opr) {
    if (opr != "=") {
        oper = opr;
        num1 = temp;
        temp = "";
    } else {
        num2 = temp;
        temp = "";
    }
}

function clear(btn) {
    if (btn == "C") {
        temp = temp.slice(0, -1);
    } else {
        num1 = "";
        num2 = "";
        temp = "";
    }
}

function calculate() {
    let ans;
    let n1 = parseFloat(num1);
    let n2 = parseFloat(num2);
    switch (oper) {
        case "+":
            return n1 + n2;
        case "-":
            return  n1 - n2;
        case "*":
            return  n1 * n2;
        case "/":
            return n1 / n2;
    }
}

function display(n) {
    switch (n) {
        case 1:
            current.textContent = temp;
            break;
        case 2:
            previous.textContent = num1 + " " + oper;
            current.textContent = "";
            break;
        case 3:
            previous.textContent = "";
            current.textContent = res;
            break;
        case 4:
            previous.textContent = "";
            current.textContent = "";
            break;
        case 5:
            current.textContent = temp;
            break;
    }
}