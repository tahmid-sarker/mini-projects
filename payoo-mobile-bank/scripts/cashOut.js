document.getElementById("cashout-btn").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default form submission
    const agentNumber = document.getElementById("agent-number").value;
    const amount = getInputValue("amount");
    const pin = getInputValue("pin");
    const mainBalance = getMainBalance("main-balance");
    if (amount > mainBalance) {
      alert("Insufficient funds. Please enter a valid amount.");
      return;
    }
    if (agentNumber.length === 11) {
      if (pin === 1234) {
        const newBalance = mainBalance  - amount;
        setMainBalance("main-balance", newBalance);
        const div = document.createElement("div");
        div.classList.add("bg-green-500", "mb-1");
        div.innerHTML = `
        <h1 class="text-red-300">Cash Out</h1>
        <p class="text-red-300">You have cashed out ${amount} from your account.</p>
        <p class="text-red-300">Your new balance is ${newBalance}.</p>
        <p class="text-red-300">Agent Number: ${agentNumber}</p>
        `;
        const transactionContainer = document.getElementById("transaction-history-container");
        transactionContainer.appendChild(div);
      } else {
        alert("Incorrect PIN. Please try again.");
      }
    } else {
      alert("Agent number must be 11 digits long.");
    }
});