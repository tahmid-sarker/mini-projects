document.getElementById("add-money-container").style.display = "none";
document.getElementById("cash-out-container").style.display = "none";

document.getElementById("add-money").addEventListener("click", function () {
    handleToggle("add-money-container", "block");
    handleToggle("cash-out-container", "none");
});

document.getElementById("cash-out").addEventListener("click", function () {
    handleToggle("cash-out-container", "block");
    handleToggle("add-money-container", "none");
});

document.getElementById("transaction-box").addEventListener("click", function () {
    handleToggle("transaction-history-container", "block");
    handleToggle("add-money-container", "none");
    handleToggle("cash-out-container", "none");
});


function handleToggle(id, status) {
    document.getElementById(id).style.display = status;
}