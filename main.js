var textShown = true;

// ===== Buttons ===============================================================

// Checks answers against a solution
function checkAnswers() {
    solution = [
        "*******P*BET*R*******",
        "*VEDAS*A**T*FA*IWONT*",
        "*A***Y*N*****W*C***O*",
        "*G***L*D*X*A*S*H***K*",
        "*U***P*ON**B*I*O***Y*",
        "*EPOCH*R*A*Y*L*ROMEO*",
        "*******A*T*S*I*******",
        "QUICKRESPONSECODESCAN",
        "**DO***BRIO**OH*X****",
        "R*E***ROI**GUN*D***UP",
        "AM*****XX*NAH*BI*WE*Y",
        "***Y*ET**OOF**O*BHT*X",
        "*Y***L**V*OF*MAGLEV**",
        "ITHINKSO**B*I****YOGA",
        "*******CA*SOX**A*PI*D",
        "*AGATE*E******Q**RLC*",
        "*B***T*A*QR*SAILBOATS",
        "*A***H*NY**DA**V*T***",
        "*C***O*MHO*BLUE**E*IC",
        "*ISLES*A**EZ**JERICHO",
        "*******P****O*BK*NNE*",
    ];

    // Iterate through the cells
    for (let i = 0; i < 21; i++) {
        for (let j = 0; j < 21; j++) {
            // Get the value of the current cell
            let cell = document.getElementById(i + "_" + j);
            let value = cell.value;

            // If the value is the same, change the background color to green
            if (value === solution[i][j]) {
                // Change by adding "correct" class
                cell.classList.add("correct");
            }

            // If the value is wrong, change the background color to red
            if (
                solution[i][j] !== "*" &&
                value !== solution[i][j] &&
                value !== ""
            ) {
                cell.classList.add("incorrect");
                console.log(`${value} !== ${solution[i][j]}`);
            }
        }
    }

    // After a few seconds, remove the classes
    setTimeout(function () {
        let cells = document.querySelectorAll(".board input");
        for (let i = 0; i < cells.length; i++) {
            cells[i].classList.remove("correct");
            cells[i].classList.remove("incorrect");
        }
    }, 1500);
}

// Toggles showing or hiding text (for ease of QR scanning)
function showHideText() {
    // Get all of the elements
    let cells = document.querySelectorAll(".board input");
    // Change their color to white
    if (textShown) {
        for (var i = 0; i < cells.length; i++) {
            cells[i].style.color = "white";
        }
    }
    // Or to black
    if (!textShown) {
        for (var i = 0; i < cells.length; i++) {
            cells[i].style.color = "black";
        }
    }

    textShown = !textShown;
}

// Clears the board for a 'new game'
function clearBoard() {
    // Clear all the cells - All inputs in the div.board element
    let cells = document.querySelectorAll(".board input");
    for (let i = 0; i < cells.length; i++) {
        cells[i].value = "";
        // Also clear any classes that may have been added
        cells[i].classList.remove("correct");
        cells[i].classList.remove("incorrect");
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
