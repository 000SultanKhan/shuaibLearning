import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/app/core/services';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  panelOpenState = false;
  events = [];
  items = [
    {id: 1, name: 'Python'},
    {id: 2, name: 'Node Js'},
    {id: 3, name: 'Java'},
    {id: 4, name: 'PHP', disabled: true},
    {id: 5, name: 'Django'},
    {id: 6, name: 'Angular'},
    {id: 7, name: 'Vue'},
    {id: 8, name: 'ReactJs'},
  ];
  selected = [
    {id: 2, name: 'Node Js'},
    {id: 8, name: 'ReactJs'}
  ];

  toppings = new FormControl();
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];


  
  constructor(public baseService: BaseService) { }
  ngOnInit() {
   
  }
  async getFaq() {
    let responseData = await this.baseService.getFaq();
    for (let i = 0; i < responseData.data.rows.length; i++) {
      let model = {
        event_number: responseData.data.rows[i].number,
        question: responseData.data.rows[i].question,
        answer: responseData.data.rows[i].answer,
      }
      this.events.push(model);
    }
  }
}
