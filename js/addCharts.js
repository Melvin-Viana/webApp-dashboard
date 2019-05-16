 var ctx = document.getElementById('lineChart').getContext('2d');
 var myChart = new Chart(ctx, {
     type: 'line',
     data: {
         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
         datasets: [{
             data: [500, 750, 1000, 1000, 2000, 2100],
             pointBackgroundColor: "#fff",
             borderWidth: 1,
             lineTension: 0
         }],
     },
     options: {
         scales: {
             yAxes: [{
                 ticks: {
                     max: 2500,
                     stepSize: 500
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
 });