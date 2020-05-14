import { Component, OnInit, Input} from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Chart } from 'chart.js';
import * as CanvasJS from './canvasjs.min';
import { CharData } from "../../service/char-data"

@Component({
  selector: 'app-main-window',
  templateUrl: './main-window.component.html',
  styleUrls: ['./main-window.component.css']
})
export class MainWindowComponent implements OnInit {

  post_data = {
    x_label : "CREATED DATE",
    y_label : "DELIVERY CHARGES BASE",
    bins : "ORDER URGENCY TYPE"
    }
    data: CharData[];
    labels:any = [];
    values:any = [];
    test:any = [];
    barchart = [];

  constructor(private http: HttpClient) {
  }
  chat(x:any, y:any){
    for(var i = 0;i<x.length;i++) {
      console.log(x[i])
      console.log(y[i])
    }
    let dataValues = y
    let dataLabels = x
      this.barchart = new Chart('canvas', {
        type: 'bar',
        data: {
          labels: dataLabels[0],
          datasets: [
            {
              data: dataValues[0],
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

      // console.log(x)
      // console.log(y)
  }

  ngOnInit(): void {
    this.http.get("http://127.0.0.1:5000/process", { params: {
    x: this.post_data["x_label"],
    y: this.post_data["y_label"],
    bins: this.post_data["bins"]
  },
  observe: 'response'
  }).subscribe( res => { var data: any  = res.body;
            this.values.push(data["values"]) ;
            this.labels.push(data["labels"]) ;
            this.chat(this.labels, this.values)

  return data});
  }


}


