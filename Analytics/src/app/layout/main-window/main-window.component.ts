import { Component, OnInit, Input} from '@angular/core';
import * as CanvasJS from './canvasjs.min';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-main-window',
  templateUrl: './main-window.component.html',
  styleUrls: ['./main-window.component.css']
})
export class MainWindowComponent implements OnInit {
  @Input() Message: string;
  post_data = {
      x_label : "CREATED DATE",
      y_label : "DELIVERY CHARGES BASE",
      bins : "ORDER URGENCY TYPE"
  }
  myData: any = {};
  dataPoints: any = {};
  map = new Map();

  constructor(private http: HttpClient) {
  }

  get_data(){
    let data: Object = {};
    // this.http.post(this.url, this.post_data).toPromise().then(data =>{console.log(data)});
   return this.http.get("http://127.0.0.1:5000/process", {
      params: {
        x: this.post_data["x_label"],
        y: this.post_data["y_label"],
        bins: this.post_data["bins"]
      },
      observe: 'response'
    }).subscribe(data =>{
      for (let i in data.body){
        for (var j=0; j<i.length; j++){
            let label = data.body.labels[j]
            let value = data.body.values[j]
            this.map.set(label, value);
            // console.log(this.map)
        }
      }
      console.log(this.map)
    });
  }

  chat(){
    let i:any
    for (i in this.myData) {
      this.dataPoints.push({ label: i });
      // console.log("i",i)
    }
    let chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Demo"
      },
      data:[
        {
        dataPoints: this.dataPoints
        },
       ],

      });
    chart.render();
  }

  ngOnInit(): void {
    this.get_data()
    this.chat()
    console.log(this.map)
    // console.log(this.myData)

    // for ( var i = 0; i < this.myLabels.length; i++ ) {
    //     console.log(JSON.stringify(this.myLabels[i]))
    //     console.log(this.myLabels[i])
    // }
    // var dataJson = JSON.stringify(this.myLabels[0]);
    // console.log(dataJson)
    // this.dataList = JSON.parse(dataJson);

    // console.log(this.dataList)



  }


}


