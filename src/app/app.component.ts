import { Component } from '@angular/core';
import { CustomtoastrService, ToastrMessageType, ToastrPosition } from './services/ui/customtoastr.service';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'TradeClient';
  constructor() { }
}

// $.get("https://localhost:7077/api/products", data => {
//   console.log(data);        
// });