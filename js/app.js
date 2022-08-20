// to generate 4 digit random numbers
function generatePin() {
    const random = Math.round(Math.random() * 10000);
    return random;
}
// to check if the pin is 4 digit
function getPin() {
    const pin = generatePin();
    const PinString = pin + '';
    if (PinString.length === 4) {
        return pin;
    }
    else {
        return getPin();
    }
}


document.getElementById("btn_generate_pin").addEventListener('click', function () {
    const pin = getPin();
    const pinDisplay = document.getElementById("pin_display");
    pinDisplay.value = pin;
})




document.getElementById("calc").addEventListener('click', function (event) {
    const number = event.target.innerText;
    const typedNumberField = document.getElementById("typed_numbers");
    const previousTypedNumber = typedNumberField.value;
    if (isNaN(number)) {
        if (number === 'C') {
            typedNumberField.value = '';
        }
        else if (number === '<') {
            const digit = previousTypedNumber.split('');
            digit.pop();
            const remainingDigits = digit.join('');
            typedNumberField.value = remainingDigits;


        }
    }

    else {

        const newTypedNumber = previousTypedNumber + number;
        typedNumberField.value = newTypedNumber;
    }

})

// verify match 
document.getElementById('btn_submit').addEventListener('click', function () {
    const pinDisplay = document.getElementById("pin_display")
    const valueOfPinDisplay = pinDisplay.value;


    const typedNumberField = document.getElementById("typed_numbers");
    const valueOfTypedNumberField = typedNumberField.value;

    const sucessMsg = document.getElementById("sucess_msg");
    const errorMsg = document.getElementById("error_msg");

    if (valueOfTypedNumberField === valueOfPinDisplay) {

        sucessMsg.style.display = 'block';
        errorMsg.style.display = 'none';
    }
    else {

        errorMsg.style.display = 'block';
        sucessMsg.style.display = 'none';
    }
})