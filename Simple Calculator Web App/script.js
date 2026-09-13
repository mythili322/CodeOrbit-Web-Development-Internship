const display = document.getElementById("display");

// Add a value to the display
function appendValue(value) {
    if (display.value === "0" || display.value === "Error") {
        display.value = value;
    } else {
        display.value += value;
    }
}

// Clear the display
function clearDisplay() {
    display.value = "0";
}

// Delete the last character
function deleteLast() {
    if (display.value.length > 1) {
        display.value = display.value.slice(0, -1);
    } else {
        display.value = "0";
    }
}

// Calculate the result
function calculate() {
    try {
        // Check for division by zero
        if (display.value.includes("/0")) {
            display.value = "Cannot divide by 0";
            return;
        }

        const result = eval(display.value);

        if (!isFinite(result)) {
            display.value = "Error";
        } else {
            display.value = result;
        }
    } catch (error) {
        display.value = "Error";
    }
}