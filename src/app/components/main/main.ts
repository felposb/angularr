import { Component } from '@angular/core';
import type { Cards } from '../../Models/Cards';
import { CardsDashboard } from '../cards-dashboard/cards-dashboard';
import { PesquisaDashboard } from '../pesquisa-dashboard/pesquisa-dashboard';
import { Pessoa } from '../../Models/Pessoa';
import { CardPessoasDashboard } from '../card-pessoas-dashboard/card-pessoas-dashboard';
import { DadosPessoa } from '../../Models/DadosPessoa';
import { DadosPessoaDashboard } from '../dados-pessoa-dashboard/dados-pessoa-dashboard';
@Component({
  imports: [CardsDashboard, PesquisaDashboard, CardPessoasDashboard, DadosPessoaDashboard],
  selector: 'app-main',
  styleUrl: './main.css',
  templateUrl: './main.html',
})
export class Main {
  card: Cards[] = [{
    id:1,
    nome: 'Total alunos',
    valor: 4000
  },{
    id:2,
    nome: 'Total Ativos',
    valor: 3200
  },{
    id:3,
    nome: 'Total Inativos',
    valor: 800
  },{
    id:4,
    nome: 'Total Funcionaros',
    valor: 120
  },{
    id:5,
    nome: 'Funcionarios Ativos',
    valor: 99
  },{
    id:6,
    nome: 'Funcionarios Inativos',
    valor: 21
  },{
    id:7,
    nome: 'Total Salas',
    valor: 30
  },{
    id:8,
    nome: 'Total Turmas',
    valor: 45
  }]
  pessoas: Pessoa[] = [{
    id: 1,
    nome: 'Felipe',
    cpf: '12345678910',
    status: 'Ativo'
  },{
    id: 2,
    nome: 'Jorge',
    cpf: '1',
    status: 'Ativo'
  }]
  dadosPessoas: DadosPessoa[] = [{
    id: 1,
    nome: 'Felipe',
    cpf: '123141424',
    rua: 'taltaltal',
    numero: '2132',
    telefone: '3242342',
    cartao: '432423',
    status: 'Ativo',
    matricula: '134242',
    cidade: 'Toledo',
    uf: 'PR'
  },{
    id: 2,
    nome: 'Jorge',
    cpf: '123141424',
    rua: 'taltaltal',
    numero: '2132',
    telefone: '3242342',
    cartao: '432423',
    status: 'Ativo',
    matricula: '134242',
    cidade: 'Toledo',
    uf: 'PR'
  },]
  pessoaSelecionada: number = 0;
}
