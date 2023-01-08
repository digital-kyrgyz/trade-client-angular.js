import { Component } from '@angular/core';
import { CustomtoastrService, ToastrMessageType, ToastrPosition } from './services/ui/customtoastr.service';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private toastrService: CustomtoastrService) {
    toastrService.message("Melis", "Gencay", {
      messageType: ToastrMessageType.Info,
      position: ToastrPosition.TopCenter
    });
  }
  title = 'TradeClient';
}
