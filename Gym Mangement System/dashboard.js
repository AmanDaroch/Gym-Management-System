const ctx = document.getElementById("gymChart");

new Chart(ctx, {

    type: "bar",

    data: {

        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],

        datasets: [{

            label: "Monthly Revenue",

            data: [30000, 42000, 38000, 50000, 47000, 60000],

            borderWidth: 1

        }]

    },

    options: {

        responsive: true,

        plugins: {
            legend: {
                display: true
            }
        },

        scales: {
            y: {
                beginAtZero: true
            }
        }

    }

});