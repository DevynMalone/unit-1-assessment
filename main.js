let counter = document.querySelector('#counter');
let plus = document.querySelector('#plus');
let sub = document.querySelector('#sub')
let tester = document.querySelector('#tester')
let number = 0;

document.getElementById("sub").onclick = function() {countDown()};
document.getElementById("plus").onclick = function() {countUp()};

function countDown(){
    tester.textContent = number--;
}
function countUp() {
    tester.textContent = number++;
}