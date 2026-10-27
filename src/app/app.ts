import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Main } from './components/main/main';
import { Footer } from './components/footer/footer';
import { CardsDashboard } from './components/cards-dashboard/cards-dashboard';
import { PesquisaDashboard } from './components/pesquisa-dashboard/pesquisa-dashboard';
import { CardPessoasDashboard } from './components/card-pessoas-dashboard/card-pessoas-dashboard';
import { DadosPessoaDashboard } from './components/dados-pessoa-dashboard/dados-pessoa-dashboard';
@Component({
  imports: [RouterOutlet, Header, Main, Footer, CardsDashboard, PesquisaDashboard, CardPessoasDashboard, DadosPessoaDashboard],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('go');
}
