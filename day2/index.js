//global variables
// let state; first -> operator -> second
let state 
let display
let first 
let second 
let operator 
let lastChar 
const init = () => {
    state = 'first'
    display = '0'
    first = '0'
    second = '0'
    operator = '?'
}
const insertSeparator = (str , separator = '', groupSize = 3) => {
    let resultString = ''
    let counter = 0
    for(let i = str.length - 1; i >= 0; i--){
        resultString = str[i] + resultString
        counter ++
        if( counter !== 0 && counter++ % groupSize === 2){
            resultString = separator + resultString
        }
    }
    return resultString
}
const render =() => {
    //display on screen
    document.getElementById('screen').innerText = display
}
const numberClick = (num) => 
    console.log(num);
    switch(state){
        case 'first':
            if(display.length < 9)
            if(display === '0') {
                display = String(num)
            } else {
                display += String(num)
            }
            break;
        case 'operator':
            break;
        case 'second':
            break;
}



const numberClick = (num) => {
    console.log(num);
}
const operatorClick = (operator) => {
    console.log(operator);
}
const equalClick = () => {
    console.log("=");
}
const ceClick = () => {
    console.log("c");
}
document.addEventListener('keydown', (e) => {
    console.log(typeof e.key);
    if(e.key === 'Escape') ceClick();
     else if(e.key[0] >= '0' && e.key[0] <= '9') numberClick(e.key[0]);
     else if(e.key === '-') operatorClick('-');
     else if(e.key === 'Enter') equalClick('');
});
 document.addEventListener('DOMContentLoaded', () => {
    //init all
    init();
    // first render
    render();
 });