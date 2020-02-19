/* Tip Calculator JS */

// Build functions at top of script in one place

// Custom fuction
function calculateTip() {
    
    // Store data of inputs
    var billAmount = document.getElementById("billAmount").value;
    // NOTE: id of HTML is same as variable name to keep it consitant and less confusing, *preference*
    var serviceQuality = document.getElementById("serviceQuality").value;
    var numPeople = document.getElementById("totalPeople").value;
    
};

// Hide tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

// Clicking button calls on function
document.getElementById("calculate").onclick = function() {
    calculateTip();
};