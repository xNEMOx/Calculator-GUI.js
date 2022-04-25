var num1 = document.getElementById('1');
var num2 = document.getElementById('2');
var num3 = document.getElementById('3');
var num4 = document.getElementById('4');
var num5 = document.getElementById('5');
var num6 = document.getElementById('6');
var num7 = document.getElementById('7');
var num8 = document.getElementById('8');
var num9 = document.getElementById('9');

var plus = document.getElementById('plus');
var minus = document.getElementById('minus');
var answer = document.getElementById('answer');
var input = document.getElementById('input');


// displaying value
function dis(val) {
    document.getElementById("input").value += val
}

// calculation
function solve() {
    let x = document.getElementById("input").value
    let y = eval(x)
    document.getElementById("input").value = y
}

// clearing the numbers
function clr() {
    document.getElementById("input").value = ""
}




function add(num1, num2) {
    console.log(parseInt(num1) + parseInt(num2));
}

function minus(num1, num2) {
    console.log(parseInt(num1) - parseInt(num2));
}

function multiply(num1, num2) {
    console.log(parseInt(num1) * parseInt(num2));
}

function divide(num1, num2) {
    console.log(parseInt(num1) + parseInt(num2));
}


//const num1 = prompt("first number: ");
//const symbol = prompt("symbol: ");
//const num2 = prompt("second number: ");


if (symbol == '+') {
    add(num1, num2)
}

if (symbol == '-') {
    minus(num1, num2)
}

if (symbol == '*') {
    multiply(num1, num2)
}

if (symbol == '/') {
    divide(num1, num2)
}