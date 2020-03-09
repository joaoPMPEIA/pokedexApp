import { Component, OnInit } from '@angular/core';
import { DadosService } from '../servicos/dados.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dados-pokemon',
  templateUrl: './dados-pokemon.page.html',
  styleUrls: ['./dados-pokemon.page.scss'],
})
export class DadosPokemonPage implements OnInit {

  public pokemon;

  constructor(public dadosService: DadosService, public router: Router) { 
    this.pokemon = this.dadosService.getDados('dadosPokemon')
    
    if(!this.pokemon){
      //volta para lista se nao tiver os dados do pokemon
      this.router.navigateByUrl('/home');
    }
  }

  ngOnInit() {
  }

}
