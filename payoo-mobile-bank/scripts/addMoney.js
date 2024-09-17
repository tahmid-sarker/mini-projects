document.getElementById("addmoney-btn").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default form submission
    const accountNumber = document.getElementById("account-number").value;
    const amount = getInputValue("amount");
    const pin = getInputValue("pin");
    const mainBalance = getMainBalance("main-balance");
    const selectedBank = document.getElementById("all-bank").value;
    if (amount <= 0) {
      alert("Please enter a valid amount greater than zero.");
      return;
    }
    if (accountNumber.length === 11) {
      if (pin === 1234) {
        const newBalance = mainBalance + amount;
        setMainBalance("main-balance", newBalance);
        const div = document.createElement("div");
        div.classList.add("bg-red-500", "mb-1");
        div.innerHTML = `
        <h1 class="text-green-300">Added Money</h1>
        <p class="text-green-300">You have added ${amount} to your account.</p>
        <p class="text-green-300">Bank: ${selectedBank}</p>
        <p class="text-green-300">Your new balance is ${newBalance}.</p>
        <p class="text-green-300">Account Number: ${accountNumber}</p>
        `;
        const transactionContainer = document.getElementById("transaction-history-container");
        transactionContainer.appendChild(div);
      } else {
        alert("Incorrect PIN. Please try again.");
      }
    } else {
      alert("Account number must be 11 digits long.");
    }
});