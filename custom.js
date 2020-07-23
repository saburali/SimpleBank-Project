// Login Buton event handler
const loginButton = document.getElementById('loginBtn');
loginButton.addEventListener("click", function () {
    const loginArea = document.getElementById("logIn");
    loginArea.style.display = "none";
    const mainArea = document.getElementById("mainContent");
    mainArea.style.display = "block";
})

// Deposit Button Event Handler
const depositButton = document.getElementById("dipositBtn");
depositButton.addEventListener("click", function () {
    const depositNumber = getInputNumber("enterDepositAmount");

    updateSpanText("currentDiposit", depositNumber);
    updateSpanText("currentBalance", depositNumber);
    document.getElementById("enterDepositAmount").value = "";
})

// Withdraw Button Event Handler
const withdrawButton = document.getElementById('withdrawBtn');
withdrawButton.addEventListener("click", function () {
    const amountNumber = getInputNumber("withdrawAmount");

    updateSpanText("currentWithdraw", amountNumber);
    updateSpanText("currentBalance", -1 * amountNumber);

    document.getElementById("withdrawAmount").value = "";
})

// Function
function getInputNumber(id) {
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}

function updateSpanText(id, depositNumber) {
    const currentBalance = document.getElementById(id).innerText;
    const currentBalanceNumber = parseFloat(currentBalance);
    const totalBalance = depositNumber + currentBalanceNumber;
    document.getElementById(id).innerText = totalBalance;
}