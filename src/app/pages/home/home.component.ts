import { Component } from '@angular/core';

import homeContent from '../../../assets/data/homeContent.json'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
    public homeContent = homeContent
}
