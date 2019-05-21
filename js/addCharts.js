let lineChart = document.getElementById('lineChart').getContext('2d');
let barChart = document.getElementById('barChart').getContext('2d');
let pieChart = document.getElementById('pieChart').getContext('2d');
// Line Chart Config
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
            pointRadius: 4
        }],
    },
    options: {
        scales: {
            xAxes: [{
                gridLines: {
                    display: false
                },
                ticks: {
                    padding: 5
                }
            }, ],
            yAxes: [{
                ticks: {
                    max: 2500,
                    stepSize: 500,
                    beginAtZero: false
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
        responsive: true
    }
};
const barChartConfig = {
    type: 'bar',
    data: {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [{
            data: [120, 190, 50, 20, 30, 200, 240],
            backgroundColor: "rgba(58, 80, 107)",
            borderColor: "rgba(58, 80, 107)",
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
};
let pieChartConfig = {
    type: "doughnut",
    data: {
        labels: ["Android", "iPhone", "iPad"],
        datasets: [{
            data: [10, 30, 10],
            backgroundColor: ["#3a506b", "#5bc0be", "#c7ecee"]
        }],
    },
    options: {
        responsive: true,
        legend: {
            display: true,
            position: 'right',
            labels: {
                padding: 15,
            }
        }
    }
}
let trafficChart = new Chart(lineChart, lineChartConfig);
let dailyChart = new Chart(barChart, barChartConfig);
let mobileChart = new Chart(pieChart, pieChartConfig);
//======================================
// * * Traffic Chart item change events
// Declare time list
const timeOptions = document.querySelectorAll('.time-options li');
// Objects for data to change
// Hourly
const hourly = {
    labels: ["12-1PM", "1-2PM", "2-3PM", "3-4PM", "4-5PM", "5-6PM", "6-7PM"],
    data: [90, 70, 10, 10, 40, 60, 100],
    max: 200,
    intervals: 25
}
// Daily
const daily = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    data: [120, 190, 50, 20, 30, 200, 240],
    max: 250,
    intervals: 50
}
// Weekly
const weekly = {
    labels: ['3/31 - 4/6 ', '4/7 - 4/13', '4/14 - 4/20', '4/21 - 4/27', '4/28 - 5/4', '5/5 - 5/11', '5/12 - 5/18', '5/19 - 5/25', '5/26 - 6/1', '6/2 - 6/8', '6/9 - 6/15'],
    data: [500, 750, 1000, 900, 700, 1150, 1250, 1400, 2000, 2100, 1400],
    max: 2500,
    intervals: 500
}
// Monthly
const monthly = {
    labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN"],
    data: [1500, 1500, 1800, 3500, 6200, 6000],
    max: 6500,
    intervals: 1000
}
// Chart click list item event
timeOptions.forEach(e => e.addEventListener('click', () => {
    const activeOption = document.querySelector('.active-option');
    activeOption.classList.remove('active-option');
    e.classList.add('active-option');
    // Update based on clicked text
    createNewLineChart(e.innerText.toLowerCase());
}))
// createNewChart => by time object
const createNewLineChart = objectName => {
    const {
        labels,
        data,
        max,
        intervals
    } = eval(objectName);
    updateTraffic(labels, data, max, intervals);
    // Recreate traffic chart
    trafficChart = new Chart(lineChart, lineChartConfig);
}
// update lineChartConfig with proper data
function updateTraffic(newLabels, newData, newMax, newIntervals) {
    // Nested ES6 Destructure
    const {
        data,
        data: {
            datasets
        },
        options: {
            scales
        }
    } = lineChartConfig;
    data.labels = newLabels;
    datasets.forEach(e => e.data = newData);
    scales.yAxes.forEach(e => {
        const {
            ticks
        } = e;
        ticks.max = newMax;
        ticks.stepSize = newIntervals;
    });
}