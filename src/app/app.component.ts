import { Component } from '@angular/core';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from './services/ui/custom-toastr.service';
declare var $: any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ETicaretClient';
  
  constructor(private toastrService: CustomToastrService){
    toastrService.message("Merhaba", "Kenan", {
      messageType: ToastrMessageType.Info, 
      position: ToastrPosition.BottomRight
    });
    toastrService.message("Sagol", "Kenan", {
      messageType: ToastrMessageType.Success, 
      position: ToastrPosition.TopLeft
    });
    toastrService.message("Axsamin xeyir", "Kenan", {
      messageType: ToastrMessageType.Error, 
      position: ToastrPosition.BottomRight
    });
  }
}



