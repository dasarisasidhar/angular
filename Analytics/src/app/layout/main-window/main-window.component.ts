import { Component, OnInit } from '@angular/core';
import * as CanvasJS from './canvasjs.min';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-main-window',
  templateUrl: './main-window.component.html',
  styleUrls: ['./main-window.component.css']
})
export class MainWindowComponent implements OnInit {
  cols = ['AGENT NAME', "CREATED DATE", "ORDER TYPE", "ORDER URGENCY TYPE","DELIVERY CHARGES BASE"]
  post_data = {
      x_label : "CREATED DATE",
      y_label : "DELIVERY CHARGES BASE",
      bins : "ORDER URGENCY TYPE"
  }
  myLabels: any = {};
  myValues: any = {};

  constructor(private http: HttpClient) {
    let data: Object = {};
    // this.http.post(this.url, this.post_data).toPromise().then(data =>{console.log(data)});
   let value = this.http.get("http://127.0.0.1:5000/process", {
      params: {
        x: this.post_data["x_label"],
        y: this.post_data["y_label"],
        bins: this.post_data["bins"]
      },
      observe: 'response'
    }).subscribe(data =>{console.log(data.body["labels"]), console.log(data.body["values"]),
     this.myLabels = data.body["labels"], this.myValues = data.body["values"];});
  }
x
  ngOnInit(): void {

    let x_label = "test"
    let y_label = ""
    let bins = ""
    let start_date = ""
    let end_date = ""
    let chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Demo"
      },
      data:[
        {
          y:this.myLabels[1]
        },

        {label:this.myLabels[1]
        },

       ],

      });
    //   data:
    //   [{
    //     type: "column",
    //     dataPoints: [
    //       { y: 71, label: "Apple" },
    //       { y: 55, label: "Mango" },
    //       { y: 50, label: "Orange" },
    //       { y: 65, label: "Banana" },
    //       { y: 95, label: "Pineapple" },
    //       { y: 68, label: "Pears" },
    //       { y: 28, label: "Grapes" },
    //       { y: 34, label: "Lychee" },
    //       { y: 14, label: "Jackfruit" }
    //     ]
    //   }]
    // });
    console.log(x_label)
    chart.render();
  }

}
