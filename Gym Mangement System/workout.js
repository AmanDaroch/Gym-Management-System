let workouts = JSON.parse(localStorage.getItem("workouts")) || [];

displayWorkouts();

function saveWorkouts() {
    localStorage.setItem("workouts", JSON.stringify(workouts));
}

function addWorkout() {

    const member = document.getElementById("member").value.trim();
    const exercise = document.getElementById("exercise").value.trim();
    const sets = document.getElementById("sets").value;
    const reps = document.getElementById("reps").value;
    const level = document.getElementById("level").value;

    if (member === "" || exercise === "" || sets === "" || reps === "") {
        alert("Please fill all fields.");
        return;
    }

    workouts.push({
        id: Date.now(),
        member,
        exercise,
        sets,
        reps,
        level
    });

    saveWorkouts();
    displayWorkouts();

    document.getElementById("member").value = "";
    document.getElementById("exercise").value = "";
    document.getElementById("sets").value = "";
    document.getElementById("reps").value = "";
}

function displayWorkouts() {

    const table = document.getElementById("workoutTable");
    table.innerHTML = "";

    workouts.forEach((workout, index) => {

        table.innerHTML += `
        <tr>

        <td>${workout.id}</td>

        <td>${workout.member}</td>

        <td>${workout.exercise}</td>

        <td>${workout.sets}</td>

        <td>${workout.reps}</td>

        <td>${workout.level}</td>

        <td>

        <button class="edit"
        onclick="editWorkout(${index})">
        Edit
        </button>

        <button class="delete"
        onclick="deleteWorkout(${index})">
        Delete
        </button>

        </td>

        </tr>
        `;

    });

}

function editWorkout(index) {

    const workout = workouts[index];

    document.getElementById("member").value = workout.member;
    document.getElementById("exercise").value = workout.exercise;
    document.getElementById("sets").value = workout.sets;
    document.getElementById("reps").value = workout.reps;
    document.getElementById("level").value = workout.level;

    workouts.splice(index, 1);

    saveWorkouts();
    displayWorkouts();

}

function deleteWorkout(index) {

    if (confirm("Delete this workout?")) {

        workouts.splice(index, 1);

        saveWorkouts();

        displayWorkouts();

    }

}

function searchWorkout() {

    const value = document.getElementById("search").value.toLowerCase();

    const rows = document.querySelectorAll("#workoutTable tr");

    rows.forEach(row => {

        row.style.display = row.innerText.toLowerCase().includes(value)
            ? ""
            : "none";

    });

}