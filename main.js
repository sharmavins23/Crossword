// ===== Buttons ===============================================================

// Clears the board for a 'new game'
function clearBoard() {
    // Clear all the cells - All inputs in the div.board element
    var cells = document.querySelectorAll(".board input");
    for (var i = 0; i < cells.length; i++) {
        cells[i].value = "";
    }
}

// ===== Board =================================================================

// Handles cell validation on each key entry
function cell(input) {
    // If the input is lowercase, capitalize it
    input.value = input.value.toUpperCase();

    // If there is already one character, don't add a new one
    if (input.value.length > 1) {
        input.value = input.value.slice(0, 1);
    }

    // If the input is not alphanumeric, clear it
    if (!input.value.match(/[a-zA-Z]/i)) {
        input.value = "";
    }
}
