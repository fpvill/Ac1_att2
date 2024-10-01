import { Component } from '@angular/core';

interface Produto {
  nome: string;
  preco: number;
  descricao: string;
  emEstoque: boolean;
}

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
})
export class ProdutoComponent {
  produtos: Produto[] = [
    { nome: 'Paco Rabanne', preco: 690, descricao: 'PERFUME RABANNE PHANTOM MASCULINO EAU DE TOILETTE', emEstoque: true },
    { nome: 'Dior Sauvage', preco: 900, descricao: 'Refil Sauvage Dior Perfume Masculino Parfum - 300ml', emEstoque: false },
    { nome: 'Versace Eros', preco: 700, descricao: 'Versace Eros Eau de Parfum 200ml', emEstoque: true },
  ];
}
