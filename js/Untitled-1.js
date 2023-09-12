setInterval(() => {
                      var value = 43;
                       var res;
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
                        const newData = {
                          current_report: value,
                          voltage_report: 45/* new value for voltage_report */,
                          // Add other reports as per your requirements
                        };

                        const updatedData = chart.w.globals.series.map((series) => {
        const updatedSeries = { ...series };
        updatedSeries.data = [...series.data, newData[series.name]];
        return updatedSeries;
      });
                      chart.updateSeries(updatedData);
                    }, 2000);