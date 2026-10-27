import { Component, Input } from '@angular/core';
import { Pessoa } from '../../Models/Pessoa';
@Component({
  imports: [],
  selector: 'app-card-pessoas-dashboard',
  styleUrl: './card-pessoas-dashboard.css',
  templateUrl: './card-pessoas-dashboard.html',
})
export class CardPessoasDashboard {
  @Input({required: true}) pessoa!: Pessoa;
}
