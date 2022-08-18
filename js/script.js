function clearText() {
    const textField = document.getElementById('text-field');
    textField.value = '';
}

function buttonCall(val) {
    const textField = document.getElementById('text-field');
    textField.value += val;
}

document.getElementById('btn-result').addEventListener('click', function () {
    const textField = document.getElementById('text-field');
    const textValue = textField.value;
    const result = eval(textValue);
    textField.value = result;
})