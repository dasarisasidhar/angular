import { Component, OnInit, Input} from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Chart } from 'chart.js';
import { CharData } from "../../service/char-data"

@Component({
  selector: 'app-main-window',
  templateUrl: './main-window.component.html',
  styleUrls: ['./main-window.component.css']
})
export class MainWindowComponent implements OnInit {
    // details:{details:any}[] = [];
  // d = this.sendData.detais;

    post_data:any ;
    data: CharData[];
    test:any = [];
    barchart = [];

  constructor(private http: HttpClient ) {}

arrayData(details:any){
  this.getServerData(details)
}

getServerData(data:any){
  console.log(data)
  this.http.get("http://127.0.0.1:5000/process", { params: {
    x: data["x"],
    y: data["y"],
    bins: data["bins"],
    startDate : data["startDate"],
    endDate : data["endtDate"]
  },
  observe: 'response'
  }).subscribe( res => { var data: any  = res.body;
            this.chat(data["labels"], data["values"]);
  return data});
}

  chat(x:any, y:any){
    // for(var i = 0;i<x.length;i++) {
    //   console.log(x[i])
    //   console.log(y[i])
    // }
    let dataLabels = x;
    let dataValues = y;
    console.log(dataLabels)
    console.log(dataValues)
      this.barchart = new Chart('canvas', {
        type: 'bar', // change chart type as your per your requirement
        data: {
          labels: dataLabels,
          datasets: [
            {
              data: dataValues,
              borderColor: '#3cba9f',
              backgroundColor: [
                "#3cb371",
                "#0000FF",
                "#9966FF",
                "#4C4CFF",
                "#00FFFF",
                "#f990a7",
                "#aad2ed",
                "#FF00FF",
                "Blue",
                "Red",
                "Blue"
              ],
              fill: true
            }
          ]
        },
        options: {
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              display: true
            }],
            yAxes: [{
              display: true
            }],
          }
        }
      });
  }

  ngOnInit(): void {

  }


}


