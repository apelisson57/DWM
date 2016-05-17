
google.charts.load('current', {'packages':['corechart']});


google.charts.setOnLoadCallback(drawWaterfallChart);
google.charts.setOnLoadCallback(drawPieChart);
google.charts.setOnLoadCallback(drawStackedBarChart);
google.charts.setOnLoadCallback(drawLineChart);

/* WATERFALL CHART */ 
function drawWaterfallChart() {
  
  // data
  var waterfallChartData = google.visualization.arrayToDataTable([
    ['Open', 0, 0, 19, 19],
    ['Out to Bid', 19, 19, 39, 39],
    ['Awaiting Approval', 39, 39, 44, 44],
    ['Scheduling', 44, 44, 55, 55],
    ['Parts on Order', 55, 55, 58, 58],
    ['Completed', 58, 58, 82, 82]
  ], true);

  // options
  var waterfallChartOptions = {
    title: 'Rollout By Stage',
    legend: 'none',
    height: 200,
    width: 700,
    bar: { groupWidth: '100%' },
    colors : ['#99ff33']
  };

  // draw chart
  var waterfallChart = new google.visualization.CandlestickChart(document.getElementById('waterfallChart'));
  waterfallChart.draw(waterfallChartData, waterfallChartOptions);
}


/* PIE CHART */
function drawPieChart() {

  // data
  var pieChartData = new google.visualization.DataTable();
  pieChartData.addColumn('string', 'Description');
  pieChartData.addColumn('number', 'Units');
  pieChartData.addRows([
    ['In Progress: Dispatch Confirmed', 335],
    ['In Progress: Waiting for Approval', 21],
    ['In Progress: On Site', 19],
    ['In Progress: Parts on Order', 3],
    ['Not Available', 118]
  ]);

  // options
  var pieChartOptions = {title:'Total Open by Status',
   width: '80%',
   height:300,
   pieSliceText:'value'
  };

  // draw chart
  var pieChart = new google.visualization.PieChart(document.getElementById('pieChart'));
  pieChart.draw(pieChartData, pieChartOptions);


}

/* STACKED BAR CHART */
function drawStackedBarChart() {
  var stackedBarChartData = google.visualization.arrayToDataTable([
    ['Totals', 
      'Total In Progress', { role: 'annotation' },
      'Total Not In Progress', { role: 'annotation'},
      'Unavailable', { role: 'annotation' } 
    ],
    ['Repair', 73, '73', 3, '3', 0, '0'],
    ['Parent-bundle', 70, '70', 0, '0', 100, '100'],
    ['Maintenance', 27, '27', 36, '36', 0, '0'],
    ['Capex', 14, '14', 0, '0', 91, '91']
  ]);

  var stackedBarChartOptions = {
    title: 'Percent of Open Work Orders in Progress by Category',
    width: '80%',
    height: 200,
    legend: { position: 'right', maxLines: 3 },
    bar: { groupWidth: '75%' },
    series: {
      0: { axis: 'status' }
    },
    axes: {
      x: {
        status: { label: 'Status' }
      }
    },
    isStacked: true
  };

   var stackedBarChart = new google.visualization.BarChart(document.getElementById('barChart'));
  stackedBarChart.draw(stackedBarChartData, stackedBarChartOptions);
}

function drawLineChart() {
  var lineChartData = google.visualization.arrayToDataTable([
    ['Week Of', 'Total Calls', 'Total Missed'],
    ['11/30/2015', 330, 0],
    ['12/14/2015', 300, 0],
    ['12/21/2015', 290, 0],
    ['12/28/2015', 170, 0],
    ['1/4/2016', 450, 80],
    ['1/11/2016', 375, 0],
    ['1/18/2016', 375, 0],
    ['1/25/2016', 525, 0],
    ['2/1/2016', 330, 0],
    ['2/8/2016', 450, 0]
  ]);

  var lineChartOptions = {
    title: 'Number of WOs with Missed ETAs by Week',
    series: {
      0: { axis: 'weekOf' }
    },
    axes: {
      x: {
        weekOf: { label: 'Week Of' }
      }
    },
    legend: {position: 'right'},
    width: '80%',
    height: 200,
    colors: ['#00FF00', '#FF0000']
  };

  var lineChart = new google.visualization.LineChart(document.getElementById('lineChart'));
  lineChart.draw(lineChartData, lineChartOptions);
}
