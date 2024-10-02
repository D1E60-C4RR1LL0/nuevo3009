import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApidatosService } from 'src/app/services/apidatos.service';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.page.html',
  styleUrls: ['./recetas.page.scss'],
})
export class RecetasPage implements OnInit {
  titulo:string=""
  constructor(private router:Router, private srv:ApidatosService) { }

  ngOnInit() {
    let nombre_categoria=this.router.getCurrentNavigation()?.extras.state
    if(nombre_categoria!==undefined){
      this.titulo=nombre_categoria['tipofood'];
      this.verComidas(nombre_categoria['tipofood']);
    }    
  }

  verComidas(tipo:string){
    this.srv.getComidasxCategoria(tipo).subscribe(datos=>{
      console.log(datos);
    })

  }

}
