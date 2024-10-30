const display =document.getElementById('display');
function appendToDisplay(input){
    display.value += input;
    
}
function allClear (){
    display.value = '';
}
function calculateResult(){
    display.value = eval(display.value.replace(/÷/g, '/').replace(/×/g, '*'));
}