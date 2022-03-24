// goal: event listeners that move the dodger to the left/right
// reactive to the left/right arrow keys 

// steps: define the dodger
// write two functions for moveDodgerLeft and moveDodgerRight
// call those functions in two event listeners for 
//  -- "ArrowKey" left / right

dodger = document.getElementById("dodger");

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft ();
    } 
});

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowRight") {
        moveDodgerRight ();
    }
});



function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    if (left>0) {
        dodger.style.left = `${left-1}px`
    }
}

function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px","");
    const left = parseInt(leftNumbers, 10);
    if (left<360) {
        dodger.style.left = `${left + 1}px`
    }
}


