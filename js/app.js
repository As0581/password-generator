const mainElement = document.querySelector('.main')

const passwordElement = document.createElement('input')
passwordElement.classList.add('password')
passwordElement.setAttribute('placeholder', 'Generate Password!')

mainElement.appendChild(passwordElement)

passwordElement.addEventListener('keypress' , (e)=>{
    e.preventDefault()
})

passwordElement.addEventListener('focus' ,(e)=>{
    navigator.clipboard.writeText(passwordElement.value)
})





const copyBtn = document.createElement('button')
copyBtn.classList.add('copy-btn')
copyBtn.innerText = 'Copy'
copyBtn.addEventListener('click' , (e)=>{
    navigator.clipboard.writeText(passwordElement.value)
})

mainElement.appendChild(copyBtn)




const generateBtn = document.createElement('button')
generateBtn.classList.add('generate-btn')
generateBtn.innerText = 'Generate New Password'

mainElement.appendChild(generateBtn)




generateBtn.addEventListener('click' , (e)=>{
    let password = generatePassword(10)
    passwordElement.value = password
})

let nums = ''
let uppers = ''
let lowers = ''
let symbols = ''

function generatePassword(passwordLength){
    let allChars = nums + uppers + lowers + symbols;
    let randomStr = ''
    switch(allChars){
        case '' :
            return 'Choose Parameters'

        default:
            for(let i = 0; i< passwordLength; i++){

                let randomNum = Math.floor(Math.random() * allChars.length)
                randomStr += allChars[randomNum]
            }
        
               return randomStr
            
    }

    
    
}

//todo:1.checkboxes, регулировка количества символов(исп. 43 строку)

//checboxes
const checkboxContainer = document.querySelector('.checkboxes-inner')


const numsChb = document.querySelector('#nums')
const uppersChb = document.querySelector('#uppers')
const lowersChb = document.querySelector('#lowers')
const symbolsChb = document.querySelector('#symbols')

// function checkboxListener(checkbox, str){
//         if(checkbox.checked){
//              str = ''
//         }
//         return str
// }
//не получилась функция для обработчика



numsChb.addEventListener('change' , () => {
    if(numsChb.checked){
        nums = '1234567890'
    }else{
        nums= ''
    }
})
uppersChb.addEventListener('change' , () => {
    if(uppersChb.checked){
        uppers = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    }else{
        uppers = ''
    }
})
lowersChb.addEventListener('change' , () => {
    if(lowersChb.checked){
        lowers = 'abcdefghijklmnopqrstuvwxyz'
    }else{
        lowers = ''
    }
})
symbolsChb.addEventListener('change' , () => {
    if(symbolsChb.checked){
        symbols = '!()$@#№;%^:&?*/\|.,'
    }
    else{
        symbols = ''
    }
})
