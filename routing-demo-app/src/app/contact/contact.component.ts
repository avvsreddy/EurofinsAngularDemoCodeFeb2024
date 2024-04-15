import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { ICanDeactivate } from '../guards/secure.guards';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements ICanDeactivate {
canLeave(): boolean {
  if(this.email.length > 0 || this.name.length > 0 || this.message.length > 0)
    {
        return false
    }
    return true;
}


name:string='';
email:string='';
message:string='';



}
