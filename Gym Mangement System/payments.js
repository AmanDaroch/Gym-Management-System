let payments = JSON.parse(localStorage.getItem("payments")) || [];

displayPayments();

function savePayments() {
    localStorage.setItem("payments", JSON.stringify(payments));
}

function addPayment() {

    const memberName = document.getElementById("memberName").value.trim();
    const plan = document.getElementById("plan").value;
    const amount = document.getElementById("amount").value;
    const date = document.getElementById("date").value;
    const status = document.getElementById("status").value;

    if (memberName === "" || amount === "" || date === "") {
        alert("Please fill all fields.");
        return;
    }

    payments.push({
        id: Date.now(),
        memberName,
        plan,
        amount: Number(amount),
        date,
        status
    });

    savePayments();
    displayPayments();

    document.getElementById("memberName").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("date").value = "";
}

function displayPayments() {

    const table = document.getElementById("paymentTable");
    table.innerHTML = "";

    let total = 0;

    payments.forEach((payment, index) => {

        if (payment.status === "Paid") {
            total += payment.amount;
        }

        table.innerHTML += `
        <tr>

        <td>${payment.id}</td>

        <td>${payment.memberName}</td>

        <td>${payment.plan}</td>

        <td>₹${payment.amount}</td>

        <td>${payment.date}</td>

        <td class="${payment.status === "Paid" ? "paid" : "pending"}">
        ${payment.status}
        </td>

        <td>

        <button class="delete"
        onclick="deletePayment(${index})">
        Delete
        </button>

        </td>

        </tr>
        `;

    });

    document.getElementById("totalRevenue").innerText = total;

}

function deletePayment(index) {

    if (confirm("Delete this payment?")) {

        payments.splice(index, 1);

        savePayments();

        displayPayments();

    }

}

function searchPayment() {

    const value = document.getElementById("search").value.toLowerCase();

    const rows = document.querySelectorAll("#paymentTable tr");

    rows.forEach(row => {

        row.style.display = row.innerText.toLowerCase().includes(value)
            ? ""
            : "none";

    });

}