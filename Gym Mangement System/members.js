let members = JSON.parse(localStorage.getItem("members")) || [];

displayMembers();

function saveMembers() {
    localStorage.setItem("members", JSON.stringify(members));
}

function addMember() {

    const name = document.getElementById("name").value.trim();
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
    const phone = document.getElementById("phone").value.trim();
    const plan = document.getElementById("plan").value;

    if (name === "" || age === "" || phone === "") {
        alert("Please fill all fields.");
        return;
    }

    members.push({
        id: Date.now(),
        name,
        age,
        gender,
        phone,
        plan
    });

    saveMembers();
    displayMembers();

    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("phone").value = "";
}

function displayMembers() {

    const table = document.getElementById("memberTable");

    table.innerHTML = "";

    members.forEach((member, index) => {

        table.innerHTML += `
        <tr>

        <td>${member.id}</td>

        <td>${member.name}</td>

        <td>${member.age}</td>

        <td>${member.gender}</td>

        <td>${member.phone}</td>

        <td>${member.plan}</td>

        <td>

        <button class="edit"
        onclick="editMember(${index})">
        Edit
        </button>

        <button class="delete"
        onclick="deleteMember(${index})">
        Delete
        </button>

        </td>

        </tr>
        `;

    });

}

function deleteMember(index) {

    if (confirm("Delete this member?")) {

        members.splice(index, 1);

        saveMembers();

        displayMembers();

    }

}

function editMember(index) {

    const member = members[index];

    document.getElementById("name").value = member.name;
    document.getElementById("age").value = member.age;
    document.getElementById("gender").value = member.gender;
    document.getElementById("phone").value = member.phone;
    document.getElementById("plan").value = member.plan;

    members.splice(index, 1);

    saveMembers();

    displayMembers();

}

function searchMember() {

    const value = document.getElementById("search").value.toLowerCase();

    const rows = document.querySelectorAll("#memberTable tr");

    rows.forEach(row => {

        row.style.display = row.innerText.toLowerCase().includes(value)
            ? ""
            : "none";

    });

}