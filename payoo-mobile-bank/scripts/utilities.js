function getInputValue(id) {
    const value = parseInt(document.getElementById(id).value);
    return value;
}

function getMainBalance(id) {
    const mainBalance = document.getElementById(id).innerText;
    return parseInt(mainBalance);
}

function setMainBalance(id, newBalance) {
    document.getElementById(id).innerText = newBalance;
}