import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TeamsComponent } from '../teams/teams.component';
import { CompanyComponent } from '../company/company.component';
import { ServicesComponent } from '../services/services.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink,RouterOutlet,TeamsComponent,CompanyComponent, ServicesComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
