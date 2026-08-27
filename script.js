function calculate() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operation = document.getElementById("operation").value;
    const resultDiv = document.getElementById("result");

    if (isNaN(num1) || isNaN(num2) || !operation) {
        resultDiv.textContent = "Please enter valid numbers and select an operation";
        resultDiv.style.color = "red";
        return;
    }

    let result;

    if (operation === "Plus") {
        result = num1 + num2;
    } else if (operation === "Minus") {
        result = num1 - num2;
    } else if (operation === "Multiply") {
        result = num1 * num2;
    } else if (operation === "Divide") {
        if (num2 === 0) {
            resultDiv.textContent = "Cannot divide by zero";
            resultDiv.style.color = "red";
            return;
        }
        result = num1 / num2;
    }

    resultDiv.textContent = "Result: " + result;
    resultDiv.style.color = "green";
}