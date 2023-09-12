/**
* Template Name: NiceAdmin
* Updated: Aug 30 2023 with Bootstrap v5.3.1
* Template URL: https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    if (all) {
      select(el, all).forEach(e => e.addEventListener(type, listener))
    } else {
      select(el, all).addEventListener(type, listener)
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Sidebar toggle
   */
  if (select('.toggle-sidebar-btn')) {
    on('click', '.toggle-sidebar-btn', function(e) {
      select('body').classList.toggle('toggle-sidebar')
    })
  }

  /**
   * Search bar toggle
   */
  if (select('.search-bar-toggle')) {
    on('click', '.search-bar-toggle', function(e) {
      select('.search-bar').classList.toggle('search-bar-show')
    })
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Initiate tooltips
   */
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })

  /**
   * Initiate quill editors
   */
  if (select('.quill-editor-default')) {
    new Quill('.quill-editor-default', {
      theme: 'snow'
    });
  }

  if (select('.quill-editor-bubble')) {
    new Quill('.quill-editor-bubble', {
      theme: 'bubble'
    });
  }

  if (select('.quill-editor-full')) {
    new Quill(".quill-editor-full", {
      modules: {
        toolbar: [
          [{
            font: []
          }, {
            size: []
          }],
          ["bold", "italic", "underline", "strike"],
          [{
              color: []
            },
            {
              background: []
            }
          ],
          [{
              script: "super"
            },
            {
              script: "sub"
            }
          ],
          [{
              list: "ordered"
            },
            {
              list: "bullet"
            },
            {
              indent: "-1"
            },
            {
              indent: "+1"
            }
          ],
          ["direction", {
            align: []
          }],
          ["link", "image", "video"],
          ["clean"]
        ]
      },
      theme: "snow"
    });
  }

  /**
   * Initiate TinyMCE Editor
   */
  const useDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isSmallScreen = window.matchMedia('(max-width: 1023.5px)').matches;

  tinymce.init({
    selector: 'textarea.tinymce-editor',
    plugins: 'preview importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons',
    editimage_cors_hosts: ['picsum.photos'],
    menubar: 'file edit view insert format tools table help',
    toolbar: 'undo redo | bold italic underline strikethrough | fontfamily fontsize blocks | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl',
    toolbar_sticky: true,
    toolbar_sticky_offset: isSmallScreen ? 102 : 108,
    autosave_ask_before_unload: true,
    autosave_interval: '30s',
    autosave_prefix: '{path}{query}-{id}-',
    autosave_restore_when_empty: false,
    autosave_retention: '2m',
    image_advtab: true,
    link_list: [{
        title: 'My page 1',
        value: 'https://www.tiny.cloud'
      },
      {
        title: 'My page 2',
        value: 'http://www.moxiecode.com'
      }
    ],
    image_list: [{
        title: 'My page 1',
        value: 'https://www.tiny.cloud'
      },
      {
        title: 'My page 2',
        value: 'http://www.moxiecode.com'
      }
    ],
    image_class_list: [{
        title: 'None',
        value: ''
      },
      {
        title: 'Some class',
        value: 'class-name'
      }
    ],
    importcss_append: true,
    file_picker_callback: (callback, value, meta) => {
      /* Provide file and text for the link dialog */
      if (meta.filetype === 'file') {
        callback('https://www.google.com/logos/google.jpg', {
          text: 'My text'
        });
      }

      /* Provide image and alt text for the image dialog */
      if (meta.filetype === 'image') {
        callback('https://www.google.com/logos/google.jpg', {
          alt: 'My alt text'
        });
      }

      /* Provide alternative source and posted for the media dialog */
      if (meta.filetype === 'media') {
        callback('movie.mp4', {
          source2: 'alt.ogg',
          poster: 'https://www.google.com/logos/google.jpg'
        });
      }
    },
    templates: [{
        title: 'New Table',
        description: 'creates a new table',
        content: '<div class="mceTmpl"><table width="98%%"  border="0" cellspacing="0" cellpadding="0"><tr><th scope="col"> </th><th scope="col"> </th></tr><tr><td> </td><td> </td></tr></table></div>'
      },
      {
        title: 'Starting my story',
        description: 'A cure for writers block',
        content: 'Once upon a time...'
      },
      {
        title: 'New list with dates',
        description: 'New List with dates',
        content: '<div class="mceTmpl"><span class="cdate">cdate</span><br><span class="mdate">mdate</span><h2>My List</h2><ul><li></li><li></li></ul></div>'
      }
    ],
    template_cdate_format: '[Date Created (CDATE): %m/%d/%Y : %H:%M:%S]',
    template_mdate_format: '[Date Modified (MDATE): %m/%d/%Y : %H:%M:%S]',
    height: 600,
    image_caption: true,
    quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote quickimage quicktable',
    noneditable_class: 'mceNonEditable',
    toolbar_mode: 'sliding',
    contextmenu: 'link image table',
    skin: useDarkMode ? 'oxide-dark' : 'oxide',
    content_css: useDarkMode ? 'dark' : 'default',
    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }'
  });

  /**
   * Initiate Bootstrap validation check
   */
  var needsValidation = document.querySelectorAll('.needs-validation')

  Array.prototype.slice.call(needsValidation)
    .forEach(function(form) {
      form.addEventListener('submit', function(event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })

  /**
   * Initiate Datatables
   */
  const datatables = select('.datatable', true)
  datatables.forEach(datatable => {
    new simpleDatatables.DataTable(datatable);
  })

  /**
   * Autoresize echart charts
   */






  window.Apex = {
    chart: {
      foreColor: "#fff",
      toolbar: {
        show: false
      }
    },
    colors: ["#FCCF31", "#17ead9", "#f02fc2"],
    stroke: {
      width: 3
    },
    dataLabels: {
      enabled: false
    },
    grid: {
      borderColor: "#40475D"
    },
    xaxis: {
      axisTicks: {
        color: "#333"
      },
      axisBorder: {
        color: "#333"
      }
    },
    fill: {
      type: "gradient",
      gradient: {
        gradientToColors: ["#F55555", "#6078ea", "#6094ea"]
      }
    },
    tooltip: {
      theme: "dark",
      x: {
        formatter: function (val) {
          return moment(new Date(val)).format("HH:mm:ss");
        }
      }
    },
    yaxis: {
      decimalsInFloat: 2,
      opposite: true,
      labels: {
        offsetX: -10
      }
    }
  };
  
  var trigoStrength = 3;
  var iteration = 11;
  
  function getRandom() {
    var i = iteration;
    return (
      (Math.sin(i / trigoStrength) * (i / trigoStrength) +
        i / trigoStrength +
        1) *
      (trigoStrength * 2)
    );
  }
  
  function getRangeRandom(yrange) {
    return Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
  }
  
  function generateMinuteWiseTimeSeries(baseval, count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = baseval;
      var y =
        (Math.sin(i / trigoStrength) * (i / trigoStrength) +
          i / trigoStrength +
          1) *
        (trigoStrength * 2);
  
      series.push([x, y]);
      baseval += 300000;
      i++;
    }
    return series;
  }
  
  function getNewData(baseval, yrange) {
    var newTime = baseval + 300000;
    return {
      x: newTime,
      y: Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
    };
  }
  
  var optionsColumn = {
    chart: {
      height: 350,
      type: "bar",
      animations: {
        enabled: false
      },
      events: {
        animationEnd: function (chartCtx) {
          const newData = chartCtx.w.config.series[0].data.slice();
          newData.shift();
          window.setTimeout(function () {
            chartCtx.updateOptions(
              {
                series: [
                  {
                    data: newData
                  }
                ],
                xaxis: {
                  min: chartCtx.minX,
                  max: chartCtx.maxX
                },
                subtitle: {
                  text:
                    parseInt(getRangeRandom({ min: 1, max: 20 })).toString() + "%"
                }
              },
              false,
              false
            );
          }, 300);
        }
      },
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: 0
    },
    series: [
      {
        name: "Load Average",
        data: generateMinuteWiseTimeSeries(
          new Date("12/12/2016 00:20:00").getTime(),
          12,
          {
            min: 10,
            max: 110
          }
        )
      }
    ],
    title: {
      text: "Load Average",
      align: "left",
      style: {
        fontSize: "12px"
      }
    },
    subtitle: {
      text: "20%",
      floating: true,
      align: "right",
      offsetY: 0,
      style: {
        fontSize: "22px"
      }
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "vertical",
        shadeIntensity: 0.5,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 0.8,
        stops: [0, 100]
      }
    },
    xaxis: {
      type: "datetime",
      range: 2700000
    },
    legend: {
      show: true
    }
  };
  
  var chartColumn = new ApexCharts(
    document.querySelector("#columnchart"),
    optionsColumn
  );
  chartColumn.render();
  
  var optionsLine = {
    chart: {
      height: 350,
      type: "line",
      stacked: true,
      animations: {
        enabled: true,
        easing: "linear",
        dynamicAnimation: {
          speed: 1000
        }
      },
      dropShadow: {
        enabled: true,
        opacity: 0.3,
        blur: 5,
        left: -7,
        top: 22
      },
      events: {
        animationEnd: function (chartCtx) {
          const newData1 = chartCtx.w.config.series[0].data.slice();
          newData1.shift();
          const newData2 = chartCtx.w.config.series[1].data.slice();
          newData2.shift();
          window.setTimeout(function () {
            chartCtx.updateOptions(
              {
                series: [
                  {
                    data: newData1
                  },
                  {
                    data: newData2
                  }
                ],
                subtitle: {
                  text: parseInt(getRandom() * Math.random()).toString()
                }
              },
              false,
              false
            );
          }, 300);
        }
      },
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: "straight",
      width: 5
    },
    grid: {
      padding: {
        left: 0,
        right: 0
      }
    },
    markers: {
      size: 0,
      hover: {
        size: 0
      }
    },
    series: [
      {
        name: "Running",
        data: generateMinuteWiseTimeSeries(
          new Date("12/12/2016 00:20:00").getTime(),
          12,
          {
            min: 30,
            max: 110
          }
        )
      },
      {
        name: "Waiting",
        data: generateMinuteWiseTimeSeries(
          new Date("12/12/2016 00:20:00").getTime(),
          12,
          {
            min: 30,
            max: 110
          }
        )
      }
    ],
    xaxis: {
      type: "datetime",
      range: 2700000
    },
    title: {
      text: "Processes",
      align: "left",
      style: {
        fontSize: "12px"
      }
    },
    subtitle: {
      text: "20",
      floating: true,
      align: "right",
      offsetY: 0,
      style: {
        fontSize: "22px"
      }
    },
    legend: {
      show: true,
      floating: true,
      horizontalAlign: "left",
      onItemClick: {
        toggleDataSeries: false
      },
      position: "top",
      offsetY: -33,
      offsetX: 60
    }
  };
  
  var chartLine = new ApexCharts(
    document.querySelector("#linechart"),
    optionsLine
  );
  chartLine.render();
  
  var optionsCircle = {
    chart: {
      type: "radialBar",
      height: 250,
      offsetX: 0
    },
    plotOptions: {
      radialBar: {
        inverseOrder: false,
        hollow: {
          margin: 5,
          size: "48%",
          background: "transparent"
        },
        track: {
          show: true,
          background: "#40475D",
          strokeWidth: "10%",
          opacity: 1,
          margin: 3 // margin is in pixels
        }
      }
    },
    series: [71, 63],
    labels: ["Device 1", "Device 2"],
    legend: {
      show: true,
      position: "left",
      offsetX: -30,
      offsetY: -10,
      formatter: function (val, opts) {
        return val + " - " + opts.w.globals.series[opts.seriesIndex] + "%";
      }
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "horizontal",
        shadeIntensity: 0.5,
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100]
      }
    }
  };
  
  var chartCircle = new ApexCharts(
    document.querySelector("#circlechart"),
    optionsCircle
  );
  chartCircle.render();
  
  var optionsProgress1 = {
    chart: {
      height: 70,
      type: "bar",
      stacked: true,
      sparkline: {
        enabled: true
      }
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "20%",
        colors: {
          backgroundBarColors: ["#40475D"]
        }
      }
    },
    stroke: {
      width: 0
    },
    series: [
      {
        name: "Process 1",
        data: [44]
      }
    ],
    title: {
      floating: true,
      offsetX: -10,
      offsetY: 5,
      text: "Process 1"
    },
    subtitle: {
      floating: true,
      align: "right",
      offsetY: 0,
      text: "44%",
      style: {
        fontSize: "20px"
      }
    },
    tooltip: {
      enabled: false
    },
    xaxis: {
      categories: ["Process 1"]
    },
    yaxis: {
      max: 100
    },
    fill: {
      opacity: 1
    }
  };
  
  var chartProgress1 = new ApexCharts(
    document.querySelector("#progress1"),
    optionsProgress1
  );
  chartProgress1.render();
  
  var optionsProgress2 = {
    chart: {
      height: 70,
      type: "bar",
      stacked: true,
      sparkline: {
        enabled: true
      }
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "20%",
        colors: {
          backgroundBarColors: ["#40475D"]
        }
      }
    },
    colors: ["#17ead9"],
    stroke: {
      width: 0
    },
    series: [
      {
        name: "Process 2",
        data: [80]
      }
    ],
    title: {
      floating: true,
      offsetX: -10,
      offsetY: 5,
      text: "Process 2"
    },
    subtitle: {
      floating: true,
      align: "right",
      offsetY: 0,
      text: "80%",
      style: {
        fontSize: "20px"
      }
    },
    tooltip: {
      enabled: false
    },
    xaxis: {
      categories: ["Process 2"]
    },
    yaxis: {
      max: 100
    },
    fill: {
      type: "gradient",
      gradient: {
        inverseColors: false,
        gradientToColors: ["#6078ea"]
      }
    }
  };
  
  var chartProgress2 = new ApexCharts(
    document.querySelector("#progress2"),
    optionsProgress2
  );
  chartProgress2.render();
  var value = 43;
  var res;
  setInterval(() => {
 
    var xhttp;  

    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
      res  = this.responseText;
        value = parseFloat(res);


    document.getElementById("temp").innerHTML = res;

    }

        
      };

      xhttp.open("GET", "main_ajax.php?val=temp", true);
      xhttp.send();
     

});
   
  }, 2000);
  
  var optionsProgress3 = {
    chart: {
      height: 70,
      type: "bar",
      stacked: true,
      sparkline: {
        enabled: true
      }
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "20%",
        colors: {
          backgroundBarColors: ["#40475D"]
        }
      }
    },
    colors: ["#f02fc2"],
    stroke: {
      width: 0
    },
    series: [
      {
        name: "Process 3",
        data: [value]
      }
    ],
    fill: {
      type: "gradient",
      gradient: {
        gradientToColors: ["#6094ea"]
      }
    },
    title: {
      floating: true,
      offsetX: -10,
      offsetY: 5,
      text: "Process 3"
    },
    subtitle: {
      floating: true,
      align: "right",
      offsetY: 0,
      text: "74%",
      style: {
        fontSize: "20px"
      }
    },
    tooltip: {
      enabled: false
    },
    xaxis: {
      categories: ["Process 3"]
    },
    yaxis: {
      max: 100
    }
  };
  
  var chartProgress3 = new ApexCharts(
    document.querySelector("#progress3"),
    optionsProgress3
  );
  chartProgress3.render();





  //progress4&5

  var optionsProgress4 = {
    chart: {
      height: 70,
      type: "bar",
      stacked: true,
      sparkline: {
        enabled: true
      }
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "20%",
        colors: {
          backgroundBarColors: ["#40475D"]
        }
      }
    },
    colors: ["#17ead9"],
    stroke: {
      width: 0
    },
    series: [
      {
        name: "Process 4",
        data: [80]
      }
    ],
    title: {
      floating: true,
      offsetX: -10,
      offsetY: 5,
      text: "Process 4"
    },
    subtitle: {
      floating: true,
      align: "right",
      offsetY: 0,
      text: "80%",
      style: {
        fontSize: "20px"
      }
    },
    tooltip: {
      enabled: false
    },
    xaxis: {
      categories: ["Process 4"]
    },
    yaxis: {
      max: 100
    },
    fill: {
      type: "gradient",
      gradient: {
        inverseColors: false,
        gradientToColors: ["#6078ea"]
      }
    }
  };
  
  var chartProgress4 = new ApexCharts(
    document.querySelector("#progress4"),
    optionsProgress4
  );
  chartProgress4s.render();




  //end progress4&5
  
  window.setInterval(function () {
    iteration++;
  
    chartColumn.updateSeries([
      {
        data: [
          ...chartColumn.w.config.series[0].data,
          [chartColumn.w.globals.maxX + 300000, getRandom()]
        ]
      }
    ]);
  
    chartLine.updateSeries([
      {
        data: [
          ...chartLine.w.config.series[0].data,
          [chartLine.w.globals.maxX + 300000, getRandom()]
        ]
      },
      {
        data: [
          ...chartLine.w.config.series[1].data,
          [chartLine.w.globals.maxX + 300000, getRandom()]
        ]
      }
    ]);
  
    chartCircle.updateSeries([
      getRangeRandom({ min: 10, max: 100 }),
      getRangeRandom({ min: 10, max: 100 })
    ]);
  
    var p1Data = getRangeRandom({ min: 10, max: 100 });
    chartProgress1.updateOptions({
      series: [
        {
          data: [p1Data]
        }
      ],
      subtitle: {
        text: p1Data + "%"
      }
    });
  
    var p2Data = getRangeRandom({ min: 10, max: 100 });
    chartProgress2.updateOptions({
      series: [
        {
          data: [p2Data]
        }
      ],
      subtitle: {
        text: p2Data + "%"
      }
    });
  
    var p3Data = getRangeRandom({ min: 10, max: 100 });
    chartProgress3.updateOptions({
      series: [
        {
          data: [p3Data]
        }
      ],
      subtitle: {
        text: p3Data + "%"
      }
    });
  }, 3000);
  
  const mainContainer = select('#main');
  if (mainContainer) {
    setTimeout(() => {
      new ResizeObserver(function() {
        select('.echart', true).forEach(getEchart => {
          echarts.getInstanceByDom(getEchart).resize();
        })
      }).observe(mainContainer);
    }, 200);
  }

;