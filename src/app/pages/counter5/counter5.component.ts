import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from 'src/app/core/services';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-counter5',
  templateUrl: './counter5.component.html',
  styleUrls: ['./counter5.component.css']
})
export class Counter5Component implements OnInit {

  // all-mat-select start
  reports: any[] = [];
  metrics: any[] = [];
  datatypes: any[] = [];
  accesstypes: any[] = [];
  accessmethods: any[] = [];
  selectedReport: string;
  selectedMetric: string;
  selectedDatatype: string;
  selectedAccesstype: string;
  selectedAccessmethod: string;
  // all-mat-select end


  //multi-select start
  toppings = new FormControl();
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  //multi-select end


  constructor(public baseService: BaseService, private http: HttpClient) { }

  ngOnInit(): void {
    this.get_reporttype_data()

  }


  async get_reporttype_data() {

    let responseData = await this.baseService.get_reportType();
    for (let index = 0; index < responseData.data.rows.length; index++) {
      let model = { report: responseData.data.rows[index].report }
      this.reports.push(model);
    }

  }


  //----EVENT FUNCTION START---- //
  async onSelectReport(selectedReport) {
    let report = selectedReport;
    let payload = { report: report }

    // GETTING METRIC TYPES
    let responseData = await this.baseService.get_metricType(payload);
    for (let index = 0; index < responseData.data.rows.length; index++) {
      let model = { metric_type: responseData.data.rows[index].metric_type }
      this.metrics.push(model);
    }

    // GETTING DATA TYPES
    let responseData2 = await this.baseService.get_dataType(payload);
    for (let index = 0; index < responseData2.data.rows.length; index++) {
      let model = { data_type: responseData2.data.rows[index].data_type }
      this.datatypes.push(model);
    }

    // GETTING ACCESS TYPES
    let responseData3 = await this.baseService.get_accessType(payload);
    for (let index = 0; index < responseData3.data.rows.length; index++) {
      let model = { access_type: responseData3.data.rows[index].access_type }
      this.accesstypes.push(model);

    }

    // GETTING ACCESS METHODS


    let responseData4 = await this.baseService.get_accessMethod(payload);
    for (let index = 0; index < responseData4.data.rows.length; index++) {
      let model = { access_method: responseData4.data.rows[index].access_method }
      this.accessmethods.push(model);

    }



  }
  //----EVENT FUNCTION END---- //





}


