/* Tip Calculator JS */

// Build functions at top of script in one place

// Custom fuction
function calculateTip() {
    
    // Store data of inputs
    var billAmount = document.getElementById("billAmount").value;
    // NOTE: id of HTML is same as variable name to keep it consitant and less confusing, *preference*
    var serviceQuality = document.getElementById("serviceQuality").value;
    var numPeople = document.getElementById("totalPeople").value;
    
    // Quick validation, i.e if left blank or 0 function does not perform
    // NOTE: "===" strictly equals to value "==" comparing values
    if (billAmount === "" || serviceQuality == 0 ) {
        return alert("Please Enter Amount."); // This will prevent the function from continuing
    };
    
    // Checking to see if input is empty or less than or equal to 1
    if (numPeople === "" || numPeople <= 1) {
        // Took the var numPeople and added value of 1; if input is 0, 1 or nothing it will perform the same function for those input values
        numPeople = 1; // Stored value of 1 to var numPeople
        
        document.getElementById("each").style.display = "none";
    } else {
        document. getElementById("each").style.display = "block";
        
    }
    
    // MATH
    var total = ( billAmount * serviceQuality ) / numPeople;
    // This will round amount to 2 decimal places
    total = Math.round(total * 100) / 100;
    // This will allow total amount to always show 2 decimal places
    total = total.toFixed(2);
    alert(total);
};

// Hide tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

// Clicking button calls on function
document.getElementById("calculate").onclick = function() {
    calculateTip(); // Calling function from top of script to perform when button is clicked
};