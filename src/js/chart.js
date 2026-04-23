
  // === Donut Chart: Coralpay ===
  // const donutCtx = document.getElementById('donutChartCoralpay').getContext('2d');
  // new Chart(donutCtx, {
  //   type: 'doughnut',
  //   data: {
  //     labels: ['Active', 'Inactive'],
  //     datasets: [{
  //       label: 'Coralpay Strength',
  //       data: [60, 40],
  //       backgroundColor: ['#005D30', '#E5E7EB'],
  //       borderColor: '#DDDDDD',
  //       borderWidth: 1
  //     }]
  //   },
  //   options: {
  //     cutout: '75%',
  //     plugins: {
  //       legend: { display: false },
  //       tooltip: {
  //         callbacks: {
  //           label: context => `${context.label}: ${context.raw}%`
  //         }
  //       }
  //     }
  //   }
  // });
function createBarChart(canvasId, signalLevel) {
  const ctx = document.getElementById(canvasId).getContext('2d');
  const filledBars = Math.floor(signalLevel / 20);

  // Define colors based on signal level
  let signalColor;
  if (signalLevel >= 80) {
    signalColor = '#005D30';
  } else if (signalLevel >= 50) {
    signalColor = '#F59E0B';
  } else {
    signalColor = '#FF0000';
  }

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['', '', '', '', ''],
      datasets: [
        {
          label: 'Active Signal',
          data: [20, 40, 60, 80, 100].map((v, i) => (i < filledBars ? v : 0)),
          backgroundColor: signalColor,
          borderRadius: 4,
          barThickness: 14
        },
        {
          label: 'Inactive Signal',
          data: [20, 40, 60, 80, 100].map((v, i) => (i >= filledBars ? v : 0)),
          backgroundColor: 'transparent',
          borderColor: '#DDDDDD',
          borderWidth: 1,
          borderRadius: 4,
          barThickness: 14
        }
      ]
    },
    options: {
      scales: {
        x: {
          grid: { display: false },
          ticks: { display: false },
          stacked: true
        },
        y: {
          beginAtZero: true,
          max: 100,
          ticks: { callback: () => '' },
          grid: { display: false },
          stacked: true
        }
      },
      plugins: { legend: { display: false } },
      responsive: false,
      maintainAspectRatio: false
    }
  });
}

// Create three charts with different values
createBarChart('barChartNIBBS1', 60); // Fair
createBarChart('barChartNIBBS2', 85); // Strong
createBarChart('barChartNIBBS3', 35); // Poor




const ctx = document.getElementById('platformShareChart').getContext('2d');
new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['NIBSS', 'Others'],
    datasets: [{
      data: [85, 15],
      backgroundColor: ['#10B981', '#E5E7EB'],
      borderWidth: 0
    }]
  },
  options: {
    responsive: false,
    cutout: '75%',
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false }
    }
  }
});
