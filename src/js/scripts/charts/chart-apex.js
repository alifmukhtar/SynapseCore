/*=========================================================================================
    File Name: chart-apex.js
    Description: Apexchart Examples
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy  - Vuejs, HTML & Laravel Admin Dashboard Template
    Author: PIXINVENT
    Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

$(function () {
  'use strict';

  var flatPicker = $('.flat-picker'),
    isRtl = $('html').attr('data-textdirection') === 'rtl',
    chartColors = {
      column: {
        series1: '#826af9',
        series2: '#d2b0ff',
        bg: '#f8d3ff'
      },
      success: {
        shade_100: '#7eefc7',
        shade_200: '#06774f'
      },
      donut: {
        series1: '#ffe700',
        series2: '#00d4bd',
        series3: '#826bf8',
        series4: '#2b9bf4',
        series5: '#FFA1A1'
      },
      area: {
        series3: '#a4f8cd',
        series2: '#60f2ca',
        series1: '#2bdac7'
      }
    };

  // heat chart data generator
  function generateDataHeat(count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = 'w' + (i + 1).toString();
      var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push({
        x: x,
        y: y
      });
      i++;
    }
    return series;
  }

  // Init flatpicker
  if (flatPicker.length) {
    var date = new Date();
    flatPicker.each(function () {
      $(this).flatpickr({
        mode: 'range',
        defaultDate: ['2019-05-01', '2019-05-10']
      });
    });
  }

  // Area Chart
  // --------------------------------------------------------------------
  var areaChartEl = document.querySelector('#line-area-chart'),
    areaChartConfig = {
      chart: {
        height: 400,
        type: 'area',
        parentHeightOffset: 0,
        toolbar: {
          show: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: false,
        curve: 'straight'
      },
      legend: {
        show: true,
        position: 'top',
        horizontalAlign: 'start'
      },
      grid: {
        xaxis: {
          lines: {
            show: true
          }
        }
      },
      colors: [chartColors.area.series3, chartColors.area.series2, chartColors.area.series1],
      series: [
        {
          name: 'Visits',
          data: [100, 120, 90, 170, 130, 160, 140, 240, 220, 180, 270, 280, 375]
        },
        {
          name: 'Clicks',
          data: [60, 80, 70, 110, 80, 100, 90, 180, 160, 140, 200, 220, 275]
        },
        {
          name: 'Sales',
          data: [20, 40, 30, 70, 40, 60, 50, 140, 120, 100, 140, 180, 220]
        }
      ],
      xaxis: {
        categories: [
          '7/12',
          '8/12',
          '9/12',
          '10/12',
          '11/12',
          '12/12',
          '13/12',
          '14/12',
          '15/12',
          '16/12',
          '17/12',
          '18/12',
          '19/12',
          '20/12'
        ]
      },
      fill: {
        opacity: 1,
        type: 'solid'
      },
      tooltip: {
        shared: false
      },
      yaxis: {
        opposite: isRtl
      }
    };
  if (typeof areaChartEl !== undefined && areaChartEl !== null) {
    var areaChart = new ApexCharts(areaChartEl, areaChartConfig);
    areaChart.render();
  }

  // Column Chart
  // --------------------------------------------------------------------
  var columnChartEl = document.querySelector('#column-chart'),
    columnChartConfig = {
      chart: {
        height: 400,
        type: 'bar',
        stacked: true,
        parentHeightOffset: 0,
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        bar: {
          columnWidth: '15%',
          colors: {
            backgroundBarColors: [
              chartColors.column.bg,
              chartColors.column.bg,
              chartColors.column.bg,
              chartColors.column.bg,
              chartColors.column.bg
            ],
            backgroundBarRadius: 10
          }
        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: true,
        position: 'top',
        horizontalAlign: 'start'
      },
      colors: [chartColors.column.series1, chartColors.column.series2],
      stroke: {
        show: true,
        colors: ['transparent']
      },
      grid: {
        xaxis: {
          lines: {
            show: true
          }
        }
      },
      series: [
        {
          name: 'Apple',
          data: [90, 120, 55, 100, 80, 125, 175, 70, 88, 180]
        },
        {
          name: 'Samsung',
          data: [85, 100, 30, 40, 95, 90, 30, 110, 62, 20]
        }
      ],
      xaxis: {
        categories: ['7/12', '8/12', '9/12', '10/12', '11/12', '12/12', '13/12', '14/12', '15/12', '16/12']
      },
      fill: {
        opacity: 1
      },
      yaxis: {
        opposite: isRtl
      }
    };
  if (typeof columnChartEl !== undefined && columnChartEl !== null) {
    var columnChart = new ApexCharts(columnChartEl, columnChartConfig);
    columnChart.render();
  }

  // Scatter Chart
  // --------------------------------------------------------------------
  var scatterChartEl = document.querySelector('#scatter-chart'),
    scatterChartConfig = {
      chart: {
        height: 400,
        type: 'scatter',
        zoom: {
          enabled: true,
          type: 'xy'
        },
        parentHeightOffset: 0,
        toolbar: {
          show: false
        }
      },
      grid: {
        xaxis: {
          lines: {
            show: true
          }
        }
      },
      legend: {
        show: true,
        position: 'top',
        horizontalAlign: 'start'
      },
      colors: [window.colors.solid.warning, window.colors.solid.primary, window.colors.solid.success],
      series: [
        {
          name: 'Angular',
          data: [
            [5.4, 170],
            [5.4, 100],
            [6.3, 170],
            [5.7, 140],
            [5.9, 130],
            [7.0, 150],
            [8.0, 120],
            [9.0, 170],
            [10.0, 190],
            [11.0, 220],
            [12.0, 170],
            [13.0, 230]
          ]
        },
        {
          name: 'Vue',
          data: [
            [14.0, 220],
            [15.0, 280],
            [16.0, 230],
            [18.0, 320],
            [17.5, 280],
            [19.0, 250],
            [20.0, 350],
            [20.5, 320],
            [20.0, 320],
            [19.0, 280],
            [17.0, 280],
            [22.0, 300],
            [18.0, 120]
          ]
        },
        {
          name: 'React',
          data: [
            [14.0, 290],
            [13.0, 190],
            [20.0, 220],
            [21.0, 350],
            [21.5, 290],
            [22.0, 220],
            [23.0, 140],
            [19.0, 400],
            [20.0, 200],
            [22.0, 90],
            [20.0, 120]
          ]
        }
      ],
      xaxis: {
        tickAmount: 10,
        labels: {
          formatter: function (val) {
            return parseFloat(val).toFixed(1);
          }
        }
      },
      yaxis: {
        opposite: isRtl
      }
    };
  if (typeof scatterChartEl !== undefined && scatterChartEl !== null) {
    var scatterChart = new ApexCharts(scatterChartEl, scatterChartConfig);
    scatterChart.render();
  }

  // Line Chart
  // --------------------------------------------------------------------
  var lineChartEl = document.querySelector('#line-chart'),
    lineChartConfig = {
      chart: {
        height: 400,
        type: 'line',
        zoom: {
          enabled: false
        },
        parentHeightOffset: 0,
        toolbar: {
          show: false
        }
      },
      series: [
        {
          data: [280, 200, 220, 180, 270, 250, 70, 90, 200, 150, 160, 100, 150, 100, 50]
        }
      ],
      markers: {
        strokeWidth: 7,
        strokeOpacity: 1,
        strokeColors: [window.colors.solid.white],
        colors: [window.colors.solid.warning]
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      colors: [window.colors.solid.warning],
      grid: {
        xaxis: {
          lines: {
            show: true
          }
        },
        padding: {
          top: -20
        }
      },
      tooltip: {
        custom: function (data) {
          return (
            '<div class="px-1 py-50">' +
            '<span>' +
            data.series[data.seriesIndex][data.dataPointIndex] +
            '%</span>' +
            '</div>'
          );
        }
      },
      xaxis: {
        categories: [
          '7/12',
          '8/12',
          '9/12',
          '10/12',
          '11/12',
          '12/12',
          '13/12',
          '14/12',
          '15/12',
          '16/12',
          '17/12',
          '18/12',
          '19/12',
          '20/12',
          '21/12'
        ]
      },
      yaxis: {
        opposite: isRtl
      }
    };
  if (typeof lineChartEl !== undefined && lineChartEl !== null) {
    var lineChart = new ApexCharts(lineChartEl, lineChartConfig);
    lineChart.render();
  }

  // Bar Chart
  // --------------------------------------------------------------------
  var barChartEl = document.querySelector('#bar-chart'),
    barChartConfig = {
      chart: {
        height: 400,
        type: 'bar',
        parentHeightOffset: 0,
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: '30%',
          endingShape: 'rounded'
        }
      },
      grid: {
        xaxis: {
          lines: {
            show: false
          }
        },
        padding: {
          top: -15,
          bottom: -10
        }
      },
      colors: window.colors.solid.info,
      dataLabels: {
        enabled: false
      },
      series: [
        {
          data: [700, 350, 480, 600, 210, 550, 150]
        }
      ],
      xaxis: {
        categories: ['MON, 11', 'THU, 14', 'FRI, 15', 'MON, 18', 'WED, 20', 'FRI, 21', 'MON, 23']
      },
      yaxis: {
        opposite: isRtl
      }
    };
  if (typeof barChartEl !== undefined && barChartEl !== null) {
    var barChart = new ApexCharts(barChartEl, barChartConfig);
    barChart.render();
  }

  // Candlestick Chart
  // --------------------------------------------------------------------
  var candlestickEl = document.querySelector('#candlestick-chart'),
    candlestickChartConfig = {
      chart: {
        height: 400,
        type: 'candlestick',
        parentHeightOffset: 0,
        toolbar: {
          show: false
        }
      },
      series: [
        {
          data: [
            {
              x: new Date(1538778600000),
              y: [150, 170, 50, 100]
            },
            {
              x: new Date(1538780400000),
              y: [200, 400, 170, 330]
            },
            {
              x: new Date(1538782200000),
              y: [330, 340, 250, 280]
            },
            {
              x: new Date(1538784000000),
              y: [300, 330, 200, 320]
            },
            {
              x: new Date(1538785800000),
              y: [320, 450, 280, 350]
            },
            {
              x: new Date(1538787600000),
              y: [300, 350, 80, 250]
            },
            {
              x: new Date(1538789400000),
              y: [200, 330, 170, 300]
            },
            {
              x: new Date(1538791200000),
              y: [200, 220, 70, 130]
            },
            {
              x: new Date(1538793000000),
              y: [220, 270, 180, 250]
            },
            {
              x: new Date(1538794800000),
              y: [200, 250, 80, 100]
            },
            {
              x: new Date(1538796600000),
              y: [150, 170, 50, 120]
            },
            {
              x: new Date(1538798400000),
              y: [110, 450, 10, 420]
            },
            {
              x: new Date(1538800200000),
              y: [400, 480, 300, 320]
            },
            {
              x: new Date(1538802000000),
              y: [380, 480, 350, 450]
            }
          ]
        }
      ],
      xaxis: {
        type: 'datetime'
      },
      yaxis: {
        tooltip: {
          enabled: true
        },
        opposite: isRtl
      },
      grid: {
        xaxis: {
          lines: {
            show: true
          }
        },
        padding: {
          top: -23
        }
      },
      plotOptions: {
        candlestick: {
          colors: {
            upward: window.colors.solid.success,
            downward: window.colors.solid.danger
          }
        },
        bar: {
          columnWidth: '40%'
        }
      }
    };
  if (typeof candlestickEl !== undefined && candlestickEl !== null) {
    var candlestickChart = new ApexCharts(candlestickEl, candlestickChartConfig);
    candlestickChart.render();
  }

  // Heat map chart
  // --------------------------------------------------------------------
  var heatmapEl = document.querySelector('#heatmap-chart'),
    heatmapChartConfig = {
      chart: {
        height: 350,
        type: 'heatmap',
        parentHeightOffset: 0,
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        heatmap: {
          enableShades: false,

          colorScale: {
            ranges: [
              {
                from: 0,
                to: 10,
                name: '0-10',
                color: '#b9b3f8'
              },
              {
                from: 11,
                to: 20,
                name: '10-20',
                color: '#aba4f6'
              },
              {
                from: 21,
                to: 30,
                name: '20-30',
                color: '#9d95f5'
              },
              {
                from: 31,
                to: 40,
                name: '30-40',
                color: '#8f85f3'
              },
              {
                from: 41,
                to: 50,
                name: '40-50',
                color: '#8176f2'
              },
              {
                from: 51,
                to: 60,
                name: '50-60',
                color: '#7367f0'
              }
            ]
          }
        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: true,
        position: 'bottom'
      },
      grid: {
        padding: {
          top: -25
        }
      },
      series: [
        {
          name: 'SUN',
          data: generateDataHeat(24, {
            min: 0,
            max: 60
          })
        },
        {
          name: 'MON',
          data: generateDataHeat(24, {
            min: 0,
            max: 60
          })
        },
        {
          name: 'TUE',
          data: generateDataHeat(24, {
            min: 0,
            max: 60
          })
        },
        {
          name: 'WED',
          data: generateDataHeat(24, {
            min: 0,
            max: 60
          })
        },
        {
          name: 'THU',
          data: generateDataHeat(24, {
            min: 0,
            max: 60
          })
        },
        {
          name: 'FRI',
          data: generateDataHeat(24, {
            min: 0,
            max: 60
          })
        },
        {
          name: 'SAT',
          data: generateDataHeat(24, {
            min: 0,
            max: 60
          })
        }
      ],
      xaxis: {
        labels: {
          show: false
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      }
    };
  if (typeof heatmapEl !== undefined && heatmapEl !== null) {
    var heatmapChart = new ApexCharts(heatmapEl, heatmapChartConfig);
    heatmapChart.render();
  }

  // Radialbar Chart
  // --------------------------------------------------------------------
  var radialBarChartEl = document.querySelector('#radialbar-chart'),
    radialBarChartConfig = {
      chart: {
        height: 350,
        type: 'radialBar'
      },
      colors: [chartColors.donut.series1, chartColors.donut.series2, chartColors.donut.series4],
      plotOptions: {
        radialBar: {
          size: 185,
          hollow: {
            size: '25%'
          },
          track: {
            margin: 15
          },
          dataLabels: {
            name: {
              fontSize: '2rem',
              fontFamily: 'Montserrat'
            },
            value: {
              fontSize: '1rem',
              fontFamily: 'Montserrat'
            },
            total: {
              show: true,
              fontSize: '1rem',
              label: 'Comments',
              formatter: function (w) {
                return '80%';
              }
            }
          }
        }
      },
      grid: {
        padding: {
          top: -35,
          bottom: -30
        }
      },
      legend: {
        show: true,
        position: 'bottom'
      },
      stroke: {
        lineCap: 'round'
      },
      series: [80, 50, 35],
      labels: ['Comments', 'Replies', 'Shares']
    };
  if (typeof radialBarChartEl !== undefined && radialBarChartEl !== null) {
    var radialChart = new ApexCharts(radialBarChartEl, radialBarChartConfig);
    radialChart.render();
  }

  // Radar Chart
  // --------------------------------------------------------------------
  var radarChartEl = document.querySelector('#radar-chart'),
    radarChartConfig = {
      chart: {
        height: 400,
        type: 'radar',
        toolbar: {
          show: false
        },
        parentHeightOffset: 0,
        dropShadow: {
          enabled: false,
          blur: 8,
          left: 1,
          top: 1,
          opacity: 0.2
        }
      },
      legend: {
        show: true,
        position: 'bottom'
      },
      yaxis: {
        show: false
      },
      series: [
        {
          name: 'iPhone 11',
          data: [41, 64, 81, 60, 42, 42, 33, 23]
        },
        {
          name: 'Samsung s20',
          data: [65, 46, 42, 25, 58, 63, 76, 43]
        }
      ],
      colors: [chartColors.donut.series1, chartColors.donut.series3],
      xaxis: {
        categories: ['Battery', 'Brand', 'Camera', 'Memory', 'Storage', 'Display', 'OS', 'Price']
      },
      fill: {
        opacity: [1, 0.8]
      },
      stroke: {
        show: false,
        width: 0
      },
      markers: {
        size: 0
      },
      grid: {
        show: false,
        padding: {
          top: -20,
          bottom: -20
        }
      }
    };
  if (typeof radarChartEl !== undefined && radarChartEl !== null) {
    var radarChart = new ApexCharts(radarChartEl, radarChartConfig);
    radarChart.render();
  }

  // Donut Chart
  // --------------------------------------------------------------------
  var donutChartEl = document.querySelector('#donut-chart'),
    donutChartConfig = {
      chart: {
        height: 350,
        type: 'donut'
      },
      legend: {
        show: true,
        position: 'bottom'
      },
      labels: ['Operational', 'Networking', 'Hiring', 'R&D'],
      series: [85, 16, 50, 50],
      colors: [
        chartColors.donut.series1,
        chartColors.donut.series5,
        chartColors.donut.series3,
        chartColors.donut.series2
      ],
      dataLabels: {
        enabled: true,
        formatter: function (val, opt) {
          return parseInt(val) + '%';
        }
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              name: {
                fontSize: '2rem',
                fontFamily: 'Montserrat'
              },
              value: {
                fontSize: '1rem',
                fontFamily: 'Montserrat',
                formatter: function (val) {
                  return parseInt(val) + '%';
                }
              },
              total: {
                show: true,
                fontSize: '1.5rem',
                label: 'Operational',
                formatter: function (w) {
                  return '31%';
                }
              }
            }
          }
        }
      },
      responsive: [
        {
          breakpoint: 992,
          options: {
            chart: {
              height: 380
            }
          }
        },
        {
          breakpoint: 576,
          options: {
            chart: {
              height: 320
            },
            plotOptions: {
              pie: {
                donut: {
                  labels: {
                    show: true,
                    name: {
                      fontSize: '1.5rem'
                    },
                    value: {
                      fontSize: '1rem'
                    },
                    total: {
                      fontSize: '1.5rem'
                    }
                  }
                }
              }
            }
          }
        }
      ]
    };
  if (typeof donutChartEl !== undefined && donutChartEl !== null) {
    var donutChart = new ApexCharts(donutChartEl, donutChartConfig);
    donutChart.render();
  }
});









// Class definition
var KTFlotchartsDemo = function() {

  // Private functions

  var demo1 = function() {
    var data = [];
    var totalPoints = 250;

    // random data generator for plot charts

    function getRandomData() {
      if (data.length > 0) data = data.slice(1);
      // do a random walk
      while (data.length < totalPoints) {
        var prev = data.length > 0 ? data[data.length - 1] : 50;
        var y = prev + Math.random() * 10 - 5;
        if (y < 0) y = 0;
        if (y > 100) y = 100;
        data.push(y);
      }
      // zip the generated y values with the x values
      var res = [];
      for (var i = 0; i < data.length; ++i) {
        res.push([i, data[i]]);
      }

      return res;
    }

    var d1 = [];
    for (var i = 0; i < Math.PI * 2; i += 0.25)
      d1.push([i, Math.sin(i)]);

    var d2 = [];
    for (var i = 0; i < Math.PI * 2; i += 0.25)
      d2.push([i, Math.cos(i)]);

    var d3 = [];
    for (var i = 0; i < Math.PI * 2; i += 0.1)
      d3.push([i, Math.tan(i)]);

    $.plot($("#kt_flotcharts_1"), [{
      label: "sin(x)",
      data: d1,
      lines: {
        lineWidth: 1,
      },
      shadowSize: 0
    }, {
      label: "cos(x)",
      data: d2,
      lines: {
        lineWidth: 1,
      },
      shadowSize: 0
    }, {
      label: "tan(x)",
      data: d3,
      lines: {
        lineWidth: 1,
      },
      shadowSize: 0
    }], {
      colors: [KTApp.getSettings()['colors']['theme']['base']["success"], KTApp.getSettings()['colors']['theme']['base']["primary"], KTApp.getSettings()['colors']['theme']['base']["danger"]],
      series: {
        lines: {
          show: true,
        },
        points: {
          show: true,
          fill: true,
          radius: 3,
          lineWidth: 1
        }
      },
      xaxis: {
        tickColor: "#eee",
        ticks: [0, [Math.PI / 2, "\u03c0/2"],
          [Math.PI, "\u03c0"],
          [Math.PI * 3 / 2, "3\u03c0/2"],
          [Math.PI * 2, "2\u03c0"]
        ]
      },
      yaxis: {
        tickColor: "#eee",
        ticks: 10,
        min: -2,
        max: 2
      },
      grid: {
        borderColor: "#eee",
        borderWidth: 1
      }
    });
  }

  var demo2 = function() {
    function randValue() {
      return (Math.floor(Math.random() * (1 + 40 - 20))) + 20;
    }
    var pageviews = [
      [1, randValue()],
      [2, randValue()],
      [3, 2 + randValue()],
      [4, 3 + randValue()],
      [5, 5 + randValue()],
      [6, 10 + randValue()],
      [7, 15 + randValue()],
      [8, 20 + randValue()],
      [9, 25 + randValue()],
      [10, 30 + randValue()],
      [11, 35 + randValue()],
      [12, 25 + randValue()],
      [13, 15 + randValue()],
      [14, 20 + randValue()],
      [15, 45 + randValue()],
      [16, 50 + randValue()],
      [17, 65 + randValue()],
      [18, 70 + randValue()],
      [19, 85 + randValue()],
      [20, 80 + randValue()],
      [21, 75 + randValue()],
      [22, 80 + randValue()],
      [23, 75 + randValue()],
      [24, 70 + randValue()],
      [25, 65 + randValue()],
      [26, 75 + randValue()],
      [27, 80 + randValue()],
      [28, 85 + randValue()],
      [29, 90 + randValue()],
      [30, 95 + randValue()]
    ];
    var visitors = [
      [1, randValue() - 5],
      [2, randValue() - 5],
      [3, randValue() - 5],
      [4, 6 + randValue()],
      [5, 5 + randValue()],
      [6, 20 + randValue()],
      [7, 25 + randValue()],
      [8, 36 + randValue()],
      [9, 26 + randValue()],
      [10, 38 + randValue()],
      [11, 39 + randValue()],
      [12, 50 + randValue()],
      [13, 51 + randValue()],
      [14, 12 + randValue()],
      [15, 13 + randValue()],
      [16, 14 + randValue()],
      [17, 15 + randValue()],
      [18, 15 + randValue()],
      [19, 16 + randValue()],
      [20, 17 + randValue()],
      [21, 18 + randValue()],
      [22, 19 + randValue()],
      [23, 20 + randValue()],
      [24, 21 + randValue()],
      [25, 14 + randValue()],
      [26, 24 + randValue()],
      [27, 25 + randValue()],
      [28, 26 + randValue()],
      [29, 27 + randValue()],
      [30, 31 + randValue()]
    ];

    var plot = $.plot($("#kt_flotcharts_2"), [{
      data: pageviews,
      label: "Unique Visits",
      lines: {
        lineWidth: 1,
      },
      shadowSize: 0

    }, {
      data: visitors,
      label: "Page Views",
      lines: {
        lineWidth: 1,
      },
      shadowSize: 0
    }], {
      series: {
        lines: {
          show: true,
          lineWidth: 2,
          fill: true,
          fillColor: {
            colors: [{
              opacity: 0.05
            }, {
              opacity: 0.01
            }]
          }
        },
        points: {
          show: true,
          radius: 3,
          lineWidth: 1
        },
        shadowSize: 2
      },
      grid: {
        hoverable: true,
        clickable: true,
        tickColor: "#eee",
        borderColor: "#eee",
        borderWidth: 1
      },
      colors: [KTApp.getSettings()['colors']['theme']['base']["primary"], KTApp.getSettings()['colors']['theme']['base']["danger"]],
      xaxis: {
        ticks: 11,
        tickDecimals: 0,
        tickColor: "#eee",
      },
      yaxis: {
        ticks: 11,
        tickDecimals: 0,
        tickColor: "#eee",
      }
    });

    function showTooltip(x, y, contents) {
      $('<div id="tooltip">' + contents + '</div>').css({
        position: 'absolute',
        display: 'none',
        top: y + 5,
        left: x + 15,
        border: '1px solid #333',
        padding: '4px',
        color: '#fff',
        'border-radius': '3px',
        'background-color': '#333',
        opacity: 0.80
      }).appendTo("body").fadeIn(200);
    }

    var previousPoint = null;
    $("#chart_2").bind("plothover", function(event, pos, item) {
      $("#x").text(pos.x.toFixed(2));
      $("#y").text(pos.y.toFixed(2));

      if (item) {
        if (previousPoint != item.dataIndex) {
          previousPoint = item.dataIndex;

          $("#tooltip").remove();
          var x = item.datapoint[0].toFixed(2),
            y = item.datapoint[1].toFixed(2);

          showTooltip(item.pageX, item.pageY, item.series.label + " of " + x + " = " + y);
        }
      } else {
        $("#tooltip").remove();
        previousPoint = null;
      }
    });
  }

  var demo3 = function() {
    var sin = [],
      cos = [];
    for (var i = 0; i < 14; i += 0.1) {
      sin.push([i, Math.sin(i)]);
      cos.push([i, Math.cos(i)]);
    }

    var plot = $.plot($("#kt_flotcharts_3"), [{
      data: sin,
      label: "sin(x) = -0.00",
      lines: {
        lineWidth: 1,
      },
      shadowSize: 0
    }, {
      data: cos,
      label: "cos(x) = -0.00",
      lines: {
        lineWidth: 1,
      },
      shadowSize: 0
    }], {
      colors: [KTApp.getSettings()['colors']['theme']['base']["primary"], KTApp.getSettings()['colors']['theme']['base']["warning"]],
      series: {
        lines: {
          show: true
        }
      },
      crosshair: {
        mode: "x"
      },
      grid: {
        hoverable: true,
        autoHighlight: false,
        tickColor: "#eee",
        borderColor: "#eee",
        borderWidth: 1
      },
      yaxis: {
        min: -1.2,
        max: 1.2
      }
    });

    var legends = $("#kt_flotcharts_3 .legendLabel");
    legends.each(function() {
      // fix the widths so they don't jump around
      $(this).css('width', $(this).width());
    });

    var updateLegendTimeout = null;
    var latestPosition = null;

    function updateLegend() {
      updateLegendTimeout = null;

      var pos = latestPosition;

      var axes = plot.getAxes();
      if (pos.x < axes.xaxis.min || pos.x > axes.xaxis.max || pos.y < axes.yaxis.min || pos.y > axes.yaxis.max) return;

      var i, j, dataset = plot.getData();
      for (i = 0; i < dataset.length; ++i) {
        var series = dataset[i];

        // find the nearest points, x-wise
        for (j = 0; j < series.data.length; ++j)
          if (series.data[j][0] > pos.x) break;

        // now interpolate
        var y, p1 = series.data[j - 1],
          p2 = series.data[j];

        if (p1 == null) y = p2[1];
        else if (p2 == null) y = p1[1];
        else y = p1[1] + (p2[1] - p1[1]) * (pos.x - p1[0]) / (p2[0] - p1[0]);

        legends.eq(i).text(series.label.replace(/=.*/, "= " + y.toFixed(2)));
      }
    }

    $("#kt_flotcharts_3").bind("plothover", function(event, pos, item) {
      latestPosition = pos;
      if (!updateLegendTimeout) updateLegendTimeout = setTimeout(updateLegend, 50);
    });
  }

  var demo4 = function() {
    var data = [];
    var totalPoints = 250;

    // random data generator for plot charts

    function getRandomData() {
      if (data.length > 0) data = data.slice(1);
      // do a random walk
      while (data.length < totalPoints) {
        var prev = data.length > 0 ? data[data.length - 1] : 50;
        var y = prev + Math.random() * 10 - 5;
        if (y < 0) y = 0;
        if (y > 100) y = 100;
        data.push(y);
      }
      // zip the generated y values with the x values
      var res = [];
      for (var i = 0; i < data.length; ++i) {
        res.push([i, data[i]]);
      }

      return res;
    }

    //server load
    var options = {
      colors: [KTApp.getSettings()['colors']['theme']['base']["danger"], KTApp.getSettings()['colors']['theme']['base']["primary"]],
      series: {
        shadowSize: 1
      },
      lines: {
        show: true,
        lineWidth: 0.5,
        fill: true,
        fillColor: {
          colors: [{
            opacity: 0.1
          }, {
            opacity: 1
          }]
        }
      },
      yaxis: {
        min: 0,
        max: 100,
        tickColor: "#eee",
        tickFormatter: function(v) {
          return v + "%";
        }
      },
      xaxis: {
        show: false,
      },
      colors: [KTApp.getSettings()['colors']['theme']['base']["primary"]],
      grid: {
        tickColor: "#eee",
        borderWidth: 0,
      }
    };

    var updateInterval = 30;
    var plot = $.plot($("#kt_flotcharts_4"), [getRandomData()], options);

    function update() {
      plot.setData([getRandomData()]);
      plot.draw();
      setTimeout(update, updateInterval);
    }

    update();
  }

  var demo5 = function() {
    var d1 = [];
    for (var i = 0; i <= 10; i += 1)
      d1.push([i, parseInt(Math.random() * 30)]);

    var d2 = [];
    for (var i = 0; i <= 10; i += 1)
      d2.push([i, parseInt(Math.random() * 30)]);

    var d3 = [];
    for (var i = 0; i <= 10; i += 1)
      d3.push([i, parseInt(Math.random() * 30)]);

    var stack = 0,
      bars = true,
      lines = false,
      steps = false;

    function plotWithOptions() {
      $.plot($("#kt_flotcharts_5"),

        [{
          label: "sales",
          data: d1,
          lines: {
            lineWidth: 1,
          },
          shadowSize: 0
        }, {
          label: "tax",
          data: d2,
          lines: {
            lineWidth: 1,
          },
          shadowSize: 0
        }, {
          label: "profit",
          data: d3,
          lines: {
            lineWidth: 1,
          },
          shadowSize: 0
        }], {
          colors: [KTApp.getSettings()['colors']['theme']['base']["danger"], KTApp.getSettings()['colors']['theme']['base']["primary"]],
          series: {
            stack: stack,
            lines: {
              show: lines,
              fill: true,
              steps: steps,
              lineWidth: 0, // in pixels
            },
            bars: {
              show: bars,
              barWidth: 0.5,
              lineWidth: 0, // in pixels
              shadowSize: 0,
              align: 'center'
            }
          },
          grid: {
            tickColor: "#eee",
            borderColor: "#eee",
            borderWidth: 1
          }
        }
      );
    }

    $(".stackControls input").click(function(e) {
      e.preventDefault();
      stack = $(this).val() == "With stacking" ? true : null;
      plotWithOptions();
    });

    $(".graphControls input").click(function(e) {
      e.preventDefault();
      bars = $(this).val().indexOf("Bars") != -1;
      lines = $(this).val().indexOf("Lines") != -1;
      steps = $(this).val().indexOf("steps") != -1;
      plotWithOptions();
    });

    plotWithOptions();
  }

  var demo6 = function() {
    // bar chart:
    var data = GenerateSeries(0);

    function GenerateSeries(added) {
      var data = [];
      var start = 100 + added;
      var end = 200 + added;

      for (var i = 1; i <= 20; i++) {
        var d = Math.floor(Math.random() * (end - start + 1) + start);
        data.push([i, d]);
        start++;
        end++;
      }

      return data;
    }

    var options = {
      colors: [KTApp.getSettings()['colors']['theme']['base']["success"], KTApp.getSettings()['colors']['theme']['base']["primary"]],
      series: {
        bars: {
          show: true
        }
      },
      bars: {
        barWidth: 0.8,
        lineWidth: 0, // in pixels
        shadowSize: 0,
        align: 'left'
      },

      grid: {
        tickColor: "#eee",
        borderColor: "#eee",
        borderWidth: 1
      }
    };

    $.plot($("#kt_flotcharts_6"), [{
      data: data,
      lines: {
        lineWidth: 1,
      },
      shadowSize: 0
    }], options);
  }

  var demo7 = function() {
    // horizontal bar chart:

    var data1 = [
      [10, 10],
      [20, 20],
      [30, 30],
      [40, 40],
      [50, 50]
    ];

    var options = {
      colors: [KTApp.getSettings()['colors']['theme']['base']["primary"]],
      series: {
        bars: {
          show: true
        }
      },
      bars: {
        horizontal: true,
        barWidth: 6,
        lineWidth: 0, // in pixels
        shadowSize: 0,
        align: 'left'
      },
      grid: {
        tickColor: "#eee",
        borderColor: "#eee",
        borderWidth: 1
      }
    };

    $.plot($("#kt_flotcharts_7"), [data1], options);
  }

  var demo8 = function() {
    var data = [
            {label: "CSS", data: 10, color:  KTApp.getSettings()['colors']['theme']['base']["primary"]},
            {label: "HTML5", data: 40, color:  KTApp.getSettings()['colors']['theme']['base']["success"]},
            {label: "PHP", data: 30, color:  KTApp.getSettings()['colors']['theme']['base']["danger"]},
            {label: "Angular", data: 20, color:  KTApp.getSettings()['colors']['theme']['base']["warning"]}
        ];

    $.plot($("#kt_flotcharts_8"), data, {
      series: {
        pie: {
          show: true
        }
      }
    });
  }

  var demo9 = function() {
    var data = [
            {label: "USA", data: 10, color:  KTApp.getSettings()['colors']['theme']['base']["primary"]},
            {label: "Germany", data: 25, color:  KTApp.getSettings()['colors']['theme']['base']["success"]},
            {label: "Norway", data: 30, color:  KTApp.getSettings()['colors']['theme']['base']["danger"]},
            {label: "Malaysia", data: 15, color:  KTApp.getSettings()['colors']['theme']['base']["warning"]},
            {label: "France", data: 10, color:  KTApp.getSettings()['colors']['theme']['base']["info"]}
        ];

    $.plot($("#kt_flotcharts_9"), data, {
      series: {
        pie: {
          show: true
        }
      },
      legend: {
        show: false
      }
    });
  }

  var demo10 = function() {
    var data = [
            {label: "Google", data: 20, color:  KTApp.getSettings()['colors']['theme']['base']["primary"]},
            {label: "Twitter", data: 35, color:  KTApp.getSettings()['colors']['theme']['base']["success"]},
            {label: "Linkedin", data: 20, color:  KTApp.getSettings()['colors']['theme']['base']["danger"]},
            {label: "Instagram", data: 25, color:  KTApp.getSettings()['colors']['theme']['base']["warning"]},
            {label: "Facebook", data: 10, color:  KTApp.getSettings()['colors']['theme']['base']["info"]}
        ];

    $.plot($("#kt_flotcharts_10"), data, {
      series: {
        pie: {
          show: true,
          radius: 1,
          label: {
            show: true,
            radius: 1,
            formatter: function(label, series) {
              return '<div style="font-size:8pt;text-align:center;padding:2px;color:white;">' + label + '<br/>' + Math.round(series.percent) + '%</div>';
            },
            background: {
              opacity: 0.8
            }
          }
        }
      },
      legend: {
        show: false
      }
    });
  }

  var demo11 = function() {
    var data = [
            {label: "Vue", data: 13, color:  KTApp.getSettings()['colors']['theme']['base']["danger"]},
            {label: "Angular", data: 25, color:  KTApp.getSettings()['colors']['theme']['base']["success"]},
            {label: "React", data: 15, color:  KTApp.getSettings()['colors']['theme']['base']["primary"]},
            {label: "Ember", data: 10, color:  KTApp.getSettings()['colors']['theme']['base']["warning"]},
            {label: "Backbone", data: 8, color:  KTApp.getSettings()['colors']['theme']['base']["info"]}
        ];

    $.plot($("#kt_flotcharts_11"), data, {
      series: {
        pie: {
          show: true,
          radius: 1,
          label: {
            show: true,
            radius: 1,
            formatter: function(label, series) {
              return '<div style="font-size:8pt;text-align:center;padding:2px;color:white;">' + label + '<br/>' + Math.round(series.percent) + '%</div>';
            },
            background: {
              opacity: 0.8
            }
          }
        }
      },
      legend: {
        show: false
      }
    });
  }

  return {
    // public functions
    init: function() {
      // default charts
      demo1();
      demo2();
      demo3();
      demo4();
      demo5();
      demo6();
      demo7();

      // pie charts
      demo8();
      demo9();
      demo10();
      demo11();
    }
  };
}();

jQuery(document).ready(function() {
  KTFlotchartsDemo.init();
});

