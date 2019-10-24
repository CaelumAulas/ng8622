import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cmail-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input() destinatario = '';
  @Input() assunto = '';
  @Input() conteudo = '';
  @Input() dataEnvio = '';
  @Output() clicouNaLixeira = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  excluir(){
    this.clicouNaLixeira.emit()
  }

}
