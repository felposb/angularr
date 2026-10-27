import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms'
@Component({
  imports: [FormsModule],
  selector: 'app-pesquisa-dashboard',
  styleUrl: './pesquisa-dashboard.css',
  templateUrl: './pesquisa-dashboard.html',
})
export class PesquisaDashboard {
  tipoPessoa: string = '';
  status: string = '';
}
