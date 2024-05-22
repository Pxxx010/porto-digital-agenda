import { Component } from '@angular/core';
import { Contato } from './models/contato';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'porto-digital-agenda';

  contatos: Contato[] = [
    {
      nome: "Afonso Estevão Luna",
      telefone: "8190000000",
      email: "fulano@empresa.com.br",
      tipo: 2
    },
    {
      nome: "Luiz Paulo",
      telefone: "8190000000",
      email: "beltrano@empresa.com.br",
      tipo: 2
    },
    {
      nome: "Iago Vieira",
      telefone: "8190000000",
      email: "ciclano@empresa.com.br",
      tipo: 1
    }
  ];

  getContatos(): Contato[] {
    return this.contatos;
  }
}
