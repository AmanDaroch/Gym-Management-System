let diets = JSON.parse(localStorage.getItem("diets")) || [];

displayDiet();

function saveDiet() {
    localStorage.setItem("diets", JSON.stringify(diets));
}

function addDiet() {

    const member = document.getElementById("member").value.trim();
    const breakfast = document.getElementById("breakfast").value.trim();
    const lunch = document.getElementById("lunch").value.trim();
    const dinner = document.getElementById("dinner").value.trim();
    const calories = document.getElementById("calories").value;
    const goal = document.getElementById("goal").value;

    if (
        member === "" ||
        breakfast === "" ||
        lunch === "" ||
        dinner === "" ||
        calories === "") {
        alert("Please fill all fields.");
        return;
    }

    diets.push({
        id: Date.now(),
        member,
        breakfast,
        lunch,
        dinner,
        calories,
        goal
    });

    saveDiet();

    displayDiet();

    document.getElementById("member").value = "";
    document.getElementById("breakfast").value = "";
    document.getElementById("lunch").value = "";
    document.getElementById("dinner").value = "";
    document.getElementById("calories").value = "";
}

function displayDiet() {

    const table = document.getElementById("dietTable");

    table.innerHTML = "";

    diets.forEach((diet, index) => {

        table.innerHTML += `

        <tr>

        <td>${diet.id}</td>

        <td>${diet.member}</td>

        <td>${diet.breakfast}</td>

        <td>${diet.lunch}</td>

        <td>${diet.dinner}</td>

        <td>${diet.calories}</td>

        <td>${diet.goal}</td>

        <td>

        <button class="edit"
        onclick="editDiet(${index})">
        Edit
        </button>

        <button class="delete"
        onclick="deleteDiet(${index})">
        Delete
        </button>

        </td>

        </tr>

        `;

    });

}

function editDiet(index) {

    const diet = diets[index];

    document.getElementById("member").value = diet.member;
    document.getElementById("breakfast").value = diet.breakfast;
    document.getElementById("lunch").value = diet.lunch;
    document.getElementById("dinner").value = diet.dinner;
    document.getElementById("calories").value = diet.calories;
    document.getElementById("goal").value = diet.goal;

    diets.splice(index, 1);

    saveDiet();

    displayDiet();

}

function deleteDiet(index) {

    if (confirm("Delete this diet plan?")) {

        diets.splice(index, 1);

        saveDiet();

        displayDiet();

    }

}

function searchDiet() {

    const value = document.getElementById("search").value.toLowerCase();

    const rows = document.querySelectorAll("#dietTable tr");

    rows.forEach(row => {

        row.style.display = row.innerText.toLowerCase().includes(value)
            ? ""
            : "none";

    });

}