const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");
const regexNumber = /[0-9]/;

function appendToDisplay(value) {
    if (
        display.getAttribute("data-reset") === "true" &&
        regexNumber.test(value)
    ) {
        clearDisplay();
        display.setAttribute("data-reset", "false");
    }
    display.value += value;
    display.setAttribute("data-reset", "false");
}

function clearDisplay() {
    display.value = "";
}

function calculateResult() {
    try {
        const result = eval(display.value);
        if (result === Infinity || isNaN(result)) {
            return error;
        } else {
            display.value = result;
        }
    } catch (error) {
        display.value = "Division by zero is not allowed";
    }
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const buttonValue = button.textContent;
        if (buttonValue === "C") {
            clearDisplay();
        } else if (buttonValue === "=") {
            calculateResult();
            display.setAttribute("data-reset", "true");
        }
    });
});
