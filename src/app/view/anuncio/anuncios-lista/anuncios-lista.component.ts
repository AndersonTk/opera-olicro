import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Anuncio } from '../anuncio';
import { AnunciosService } from '../anuncios.service';


@Component({
  selector: 'app-anuncios-lista',
  templateUrl: './anuncios-lista.component.html',
  styleUrls: ['./anuncios-lista.component.css']
})
export class AnunciosListaComponent implements OnInit {

  anuncios: Anuncio[];

  constructor(
    private service: AnunciosService,
    private router : Router,
    private route: ActivatedRoute
    ) { 
    this.anuncios = [];
  }

  ngOnInit(): void{
    this.service.list().subscribe(dados => this.anuncios = dados);
  }

  onEdit(id: any){
    this.router.navigate(['anuncio/editar', id]);
  }

}
