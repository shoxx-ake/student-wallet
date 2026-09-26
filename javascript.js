let transactions = [];

function addTransaction() {
    const description = document.getElementById("description").value.trim();
    const amount = Number(document.getElementById("amount").value);
    const type = document.getElementById("type").value;

    if (!description || !amount || amount <= 0) {
        alert("Ma'lumotlarni to'g'ri kiriting!");
        return;
    }

    transactions.push({
        description: description,
        amount: amount,
        type: type
    });

    updateWallet();

    document.getElementById("description").value = "";
    document.getElementById("amount").value = "";
}

function updateWallet() {
    let income = 0;
    let expense = 0;

    for (const transaction of transactions) {
        if (transaction.type === "income") {
            income += transaction.amount;
        } else {
            expense += transaction.amount;
        }
    }

    const balance = income - expense;

    document.getElementById("balance").textContent =
        balance.toLocaleString("uz-UZ") + " so'm";

    document.getElementById("income").textContent =
        income.toLocaleString("uz-UZ") + " so'm";

    document.getElementById("expense").textContent =
        expense.toLocaleString("uz-UZ") + " so'm";

    showTransactions();
}

function showTransactions() {
    const list = document.getElementById("transactionList");

    list.innerHTML = "";

    for (const transaction of transactions) {
        const li = document.createElement("li");

        const sign = transaction.type === "income" ? "+" : "-";

        li.innerHTML = `
            <span>${transaction.description}</span>
            <span>${sign}${transaction.amount.toLocaleString("uz-UZ")} so'm</span>
        `;

        list.appendChild(li);
    }
}