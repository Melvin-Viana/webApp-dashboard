 let lineChart = document.getElementById('lineChart').getContext('2d');

 Chart.defaults.global.defaultFontFamily = "'Lato', sans-serif";
 const lineChartConfig = {
     type: 'line',
     data: {
         labels: ['3/31 - 4/6 ', '4/7 - 4/13', '4/14 - 4/20', '4/21 - 4/27', '4/28 - 5/4', '5/5 - 5/11', '5/12 - 5/18', '5/19 - 5/25', '5/26 - 6/1', '6/2 - 6/8', '6/9 - 6/15'],
         datasets: [{
             data: [500, 750, 1000, 900, 700, 1150, 1250, 1400, 2000, 2100, 1400],
             pointBackgroundColor: "#fff",
             borderWidth: 3,
             lineTension: 0,
             backgroundColor: "rgba(58, 80, 107, 0.49)",
             borderColor: "rgba(58, 80, 107)",
             pointRadius:4
         }],
     },
     options: {
         scales: {
             xAxes: [{
                 gridLines: {
                     display:false
                 },
                 ticks:{
                     padding:5
                 }
             }, ],
             yAxes: [{
                 ticks: {
                     max: 2500,
                     stepSize: 500,
                 }
             }],
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
     }
 }

 let trafficChart = new Chart(lineChart, lineChartConfig);
 let 