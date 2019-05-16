 let ctx = document.getElementById('lineChart').getContext('2d');
 const lineChartConfig ={
    type: 'line',
    data: {
        labels: ['1', '2', '3', '4', '5', '6'],
        datasets: [{
            data: [500, 750, 1000, 900, 700, 1150],
            pointBackgroundColor: "#fff",
            borderWidth: 3,
            lineTension: 0
        }],
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    max: 1200,
                    stepSize: 100
                }
            }]
        },
        legend: {
            display: false
        },
        tooltips: {
            callbacks: {
                label: function (tooltipItem) {
                    return tooltipItem.yLabel;
                }
            }
        },
        responsive: true,
    }
}
 let myChart = new Chart(ctx,lineChartConfig );