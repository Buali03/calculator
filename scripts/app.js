let again = 'Y'
alert('WELCOME TO THE BEST CALCULATOR :)')
do {
let num1 = parseInt(prompt('Enter the first number to calculate:'))
if (isNaN(num1)){
    alert('Invalid input for the first number. Please try again.')
    continue
}
let operation = prompt('Choose an operation: (+   -   /   //   *   **)')
if (operation === '**'){
    let num2 = parseInt(prompt('Enter the exponent number to calculate: '))
    if (isNaN(num2)){
        alert('Invalid input for the exponent number. Please try again.')
        continue
}
        result = num1 ** num2
        alert(num1 + ' ** ' + num2 + ' = ' + result)
} else if (operation === '//'){
    result = Math.sqrt(num1)
    alert('square root of ' + num1  + ' = ' + result)
} else {
let num2 = parseInt(prompt('Enter the second number to calculate: '))
if (isNaN(num2)){
    alert('Invalid input for the second number. Please try again.')
    continue
}

let result
if (operation === '+'){
    result = num1 + num2
    alert(num1 + ' + ' + num2 + ' = ' + result)
} else if (operation === '-'){
    result = num1 - num2
    alert(num1 + ' - ' + num2 + ' = ' + result)
} else if (operation === '/'){
    if(num1 === 0 || num2 === 0){
        alert('You cannot divide using the number 0. Please try again.')
        continue
    }
    result = num1 / num2
    alert(num1 + ' / ' + num2 + ' = ' + result)
} else if (operation === '*'){
    result = num1 * num2
    alert(num1 + ' * ' + num2 + ' = ' + result)
} else {
    alert('Invalid operator. Please only choose from these operators (+  -  /   //  *   **)')
    continue
}
}
again = prompt('Do you want to use the calculator again? (Answer with \'y\' to use again)')

} while (again === 'Y' || again == 'y')