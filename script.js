let displayResult = document.getElementById("display-result");
let displayOperation = document.getElementById("display-operation");
let equalBtnState = false;

const buttons = document.querySelectorAll('.btn');
const totalBtn = document.getElementById('total-btn')


buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        newNbrStatus = true;
        const btnValue = this.getAttribute('data-number')
        if (displayOperation.innerText === '0' || equalBtnState === true) {
            displayOperation.textContent=btnValue;
            displayResult.textContent=''
            equalBtnState = false;
        } else {
            displayOperation.textContent = displayOperation.textContent+btnValue;
        }
        this.style.boxShadow = '3px 3px 5px rgba(0, 0, 0, 0.2)';
        setTimeout(() => {
            this.style.boxShadow = '3px 3px 5px #131a24'
        }, 250)
    })})


totalBtn.addEventListener('click', ()=>{
    console.log(displayOperation.textContent)
    console.log(typeof(displayOperation.textContent))
    displayResult.textContent = eval(displayOperation.textContent)
    equalBtnState = true;
})

const clearBtn = document.getElementById('clear-btn')
clearBtn.addEventListener('click', ()=>{
    displayOperation.textContent="0"
    displayResult.textContent=''
})