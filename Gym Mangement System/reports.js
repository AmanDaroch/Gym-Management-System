const members = JSON.parse(localStorage.getItem("members")) || [];
const trainers = JSON.parse(localStorage.getItem("trainers")) || [];
const attendance = JSON.parse(localStorage.getItem("attendance")) || [];
const payments = JSON.parse(localStorage.getItem("payments")) || [];

document.getElementById("memberCount").innerHTML = members.length;
document.getElementById("trainerCount").innerHTML = trainers.length;
document.getElementById("attendanceCount").innerHTML = attendance.length;

let totalRevenue = 0;

payments.forEach(payment => {

    if (payment.status === "Paid") {
        totalRevenue += Number(payment.amount);
    }

});

document.getElementById("revenue").innerHTML = totalRevenue;

// Revenue Chart

const paymentChart = document.getElementById("paymentChart");

new Chart(paymentChart, {

    type: "bar",

    data: {

        labels: ["Paid Revenue"],

        datasets: [{

            label: "Revenue",

            data: [totalRevenue],

            backgroundColor: ["#2563eb"]

        }]

    },

    options: {

        responsive: true,

        plugins: {

            legend: {

                display: true

            }

        }

    }

});

// Members vs Trainers

const memberChart = document.getElementById("memberChart");

new Chart(memberChart, {

    type: "doughnut",

    data: {

        labels: ["Members", "Trainers"],

        datasets: [{

            data: [members.length, trainers.length],

            backgroundColor: [

                "#2563eb",
                "#10b981"

            ]

        }]

    },

    options: {

        responsive: true,

        plugins: {

            legend: {

                position: "bottom"

            }

        }

    }

});
