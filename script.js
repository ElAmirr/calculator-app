let displayResult = document.getElementById("display-result")
let displayOperation = document.getElementById("display-operation")
let result = 0

const buttons = document.querySelectorAll('.nbr-btn')

buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        const nbr = this.getAttribute('data-number')
        if (displayResult.innerText === '0' || displayResult.innerText === '') {
            displayResult.textContent=nbr
        }else{
            displayResult.textContent = displayResult.textContent+nbr;
            }
        
        this.style.boxShadow = '3px 3px 5px rgba(0, 0, 0, 0.2)';
        setTimeout(() => {
            this.style.boxShadow = '3px 3px 5px #131a24'
        }, 250)
        console.log(result)
    })})

const totalBtn = document.getElementById('total-btn')

totalBtn.addEventListener('click', ()=>{
    if (displayResult.textContent !=='0'){
        result = result + parseInt(displayResult.textContent)
        displayOperation.textContent+= displayResult.textContent
    }
    displayResult.textContent = result
    console.log(result)
    console.log(typeof(result))
})

const addBtn = document.getElementById('add-btn')
addBtn.addEventListener('click', ()=>{
    if (result === parseInt(displayResult.textContent)) {
        return;
    }
    result = result + parseInt(displayResult.textContent)
    displayOperation.textContent+= displayResult.textContent
    displayOperation.textContent+= ' +'
    displayResult.textContent = '0'
    console.log(result)
    console.log(typeof(result))
})

const clearBtn = document.getElementById('clear-btn')
clearBtn.addEventListener('click', ()=>{
    displayResult.textContent='0'
})