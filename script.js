// Area Chart Configuration
const areaChartCtx = document.getElementById('areaChart').getContext('2d');
const areaChart = new Chart(areaChartCtx, {
    type: 'line',
    data: {
        labels: ['Mar 1', 'Mar 3', 'Mar 5', 'Mar 7', 'Mar 9', 'Mar 11', 'Mar 13'],
        datasets: [{
            label: 'Sales',
            data: [10000, 30000, 20000, 25000, 32000, 28000, 38000],
            backgroundColor: 'rgba(52, 152, 219, 0.2)',
            borderColor: '#3498db',
            borderWidth: 4,
            tension: 0.4,
            fill: true,
            pointBackgroundColor: '#3498db',
            pointBorderColor: 'white',
            pointHoverBackgroundColor: 'white',
            pointHoverBorderColor: '#3498db'
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true, // Change this to true
        aspectRatio: 2, // Fixed aspect ratio
        layout: {
            padding: {
                top: 10,
                bottom: 10
                
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    color: 'rgba(0, 0, 0, 0.05)'
                }
            },
            x: {
                grid: {
                    display: false
                }
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }
});

// Bar Chart Configuration
const barChartCtx = document.getElementById('barChart').getContext('2d');
const barChart = new Chart(barChartCtx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Sales',
            data: [4000, 5000, 6000, 9000, 11000, 15000],
            backgroundColor: '#3498db',
            borderWidth: 0,
            borderRadius: 5
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true, // Change this to true
        aspectRatio: 2, // Fixed aspect ratio
        layout: {
            padding: {
                top: 10,
                bottom: 10
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    color: 'rgba(0, 0, 0, 0.05)'
                }
            },
            x: {
                grid: {
                    display: false
                }
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }
});