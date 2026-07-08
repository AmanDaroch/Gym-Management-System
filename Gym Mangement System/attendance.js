let attendance = JSON.parse(localStorage.getItem("attendance")) || [];

displayAttendance();

function saveAttendance() {
    localStorage.setItem("attendance", JSON.stringify(attendance));
}

function markAttendance() {

    const memberName = document.getElementById("memberName").value.trim();
    const date = document.getElementById("date").value;
    const status = document.getElementById("status").value;

    if (memberName === "" || date === "") {
        alert("Please fill all fields.");
        return;
    }

    attendance.push({
        id: Date.now(),
        memberName,
        date,
        status
    });

    saveAttendance();
    displayAttendance();

    document.getElementById("memberName").value = "";
    document.getElementById("date").value = "";
}

function displayAttendance() {

    const table = document.getElementById("attendanceTable");

    table.innerHTML = "";

    attendance.forEach((record, index) => {

        table.innerHTML += `

        <tr>

        <td>${record.id}</td>

        <td>${record.memberName}</td>

        <td>${record.date}</td>

        <td class="${record.status === "Present" ? "present" : "absent"}">
            ${record.status}
        </td>

        <td>
        <button class="delete"
        onclick="deleteAttendance(${index})">
        Delete
        </button>
        </td>

        </tr>

        `;

    });

}

function deleteAttendance(index) {

    if (confirm("Delete attendance record?")) {

        attendance.splice(index, 1);

        saveAttendance();

        displayAttendance();

    }

}

function searchAttendance() {

    const value = document.getElementById("search").value.toLowerCase();

    const rows = document.querySelectorAll("#attendanceTable tr");

    rows.forEach(row => {

        row.style.display = row.innerText.toLowerCase().includes(value)
            ? ""
            : "none";

    });

}