document.getElementById("login-btn").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default form submission

    const accountNumber = document.getElementById("account-number").value;
    const pin = document.getElementById("pin").value;
    // const convertPin = parseInt(pin);
    if (accountNumber.length === 11) {
        if (parseInt(pin)===1234) {
            // Simulate a successful login
            window.location.href = "./home.html"; // Redirect to home page
        } else {
            alert("PIN must be 4 digits long.");
        }
    } else {
        alert("Account number must be 11 digits long.");
    }
});