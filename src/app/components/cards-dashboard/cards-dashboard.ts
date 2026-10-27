import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-cards-dashboard',
  styleUrl: './cards-dashboard.css',
  templateUrl: './cards-dashboard.html',
})
export class CardsDashboard {
  @Input() nome = '';
  @Input() valor = 0;
}
