let trainers = JSON.parse(localStorage.getItem("trainers")) || [];

displayTrainers();

function saveTrainers() {
    localStorage.setItem("trainers", JSON.stringify(trainers));
}

function addTrainer() {

    const trainer = {
        id: Date.now(),
        name: document.getElementById("name").value,
        specialization: document.getElementById("specialization").value,
        experience: document.getElementById("experience").value,
        salary: document.getElementById("salary").value,
        phone: document.getElementById("phone").value
    };

    if (
        trainer.name === "" ||
        trainer.specialization === "" ||
        trainer.experience === "" ||
        trainer.salary === "" ||
        trainer.phone === "") {
        alert("Please fill all fields.");
        return;
    }

    trainers.push(trainer);

    saveTrainers();

    displayTrainers();

    document.querySelectorAll(".form input").forEach(input => input.value = "");
}

function displayTrainers() {

    let table = document.getElementById("trainerTable");

    table.innerHTML = "";

    trainers.forEach((trainer, index) => {

        table.innerHTML += `

        <tr>

        <td>${trainer.id}</td>

        <td>${trainer.name}</td>

        <td>${trainer.specialization}</td>

        <td>${trainer.experience} Years</td>

        <td>₹${trainer.salary}</td>

        <td>${trainer.phone}</td>

        <td>

        <button class="edit"
        onclick="editTrainer(${index})">
        Edit
        </button>

        <button class="delete"
        onclick="deleteTrainer(${index})">
        Delete
        </button>

        </td>

        </tr>

        `;

    });

}

function deleteTrainer(index) {

    if (confirm("Delete Trainer?")) {

        trainers.splice(index, 1);

        saveTrainers();

        displayTrainers();

    }

}

function editTrainer(index) {

    let trainer = trainers[index];

    document.getElementById("name").value = trainer.name;
    document.getElementById("specialization").value = trainer.specialization;
    document.getElementById("experience").value = trainer.experience;
    document.getElementById("salary").value = trainer.salary;
    document.getElementById("phone").value = trainer.phone;

    trainers.splice(index, 1);

    saveTrainers();

    displayTrainers();

}

function searchTrainer() {

    let value = document.getElementById("search").value.toLowerCase();

    let rows = document.querySelectorAll("#trainerTable tr");

    rows.forEach(row => {

        row.style.display = row.innerText.toLowerCase().includes(value)
            ? ""
            : "none";

    });

}