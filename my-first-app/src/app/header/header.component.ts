import { Component } from "@angular/core";
import { MenuComponent } from "../menu/menu.component";


@Component({
    selector:'app-header',
    templateUrl:'header.component.html',
    styleUrl:'header.component.css',
    standalone:true,
    imports:[MenuComponent]
})
export class HeaderComponent{

}