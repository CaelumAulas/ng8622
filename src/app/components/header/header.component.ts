import { Component } from '@angular/core';
import { PageDataService } from 'src/app/services/page-data.service';

@Component({
  selector: 'cmail-header',
  templateUrl: './header.component.html',
  styleUrls: [
    './header.component.css',
    './header-search.css',
  ]
})
export class HeaderComponent {

  isMenuOpen = false;
  tituloHeader = "";

  constructor(private pageDataService: PageDataService){
    this.pageDataService
        .titulo
        .subscribe(
          (novoTitulo) => {
            this.tituloHeader = novoTitulo
          }
        )
  }

  toggleMenu () {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
