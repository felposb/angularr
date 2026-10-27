import { Component, Input } from '@angular/core';
import { DadosPessoa } from '../../Models/DadosPessoa';

@Component({
  imports: [],
  selector: 'app-dados-pessoa-dashboard',
  styleUrl: './dados-pessoa-dashboard.css',
  templateUrl: './dados-pessoa-dashboard.html',
})
export class DadosPessoaDashboard {
  @Input({required: true}) dadoPessoa!: DadosPessoa;
}
