
const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerSet = "abcdefghijklmnopqrstuvwxyz"
const numberSet = "1234567890"
const symbolSet = "~!@#$%^&*()?><:{}[]/_"

const passwordBox = document.getElementById('password-box')
const numberRange = document.getElementById('number-range')
numberRange.value = 10;

const lowerCase = document.getElementById('lowercase')
const upperCase = document.getElementById('uppercase')
const numbers = document.getElementById('numbers')
const symbols = document.getElementById('symbols')


function createPassword() {

    let totalCharc = ''

    if (lowerCase.checked) {
        totalCharc += lowerSet
    }
    if (upperCase.checked) {
        totalCharc += upperSet
    }
    if (numbers.checked) {
        totalCharc += numberSet
    }
    if (symbols.checked) {
        totalCharc += symbolSet
    }


    let password = ''

    for (i = 0; i < numberRange.value; i++) {
        const random = Math.floor(Math.random() * totalCharc.length)
        password += totalCharc[random]

        passwordBox.value = password
    }
}

const generate = document.getElementById('generate-btn')


generate.addEventListener('click', (event) => {
    createPassword()
})

function copyPassword() {
    const passwordCopied = document.getElementById('password-box');
    navigator.clipboard.writeText(passwordCopied.value);
    alert('Password copied to clipboard!');
}