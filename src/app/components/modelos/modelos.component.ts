import { Component, OnInit, ViewChild, Renderer2, ElementRef } from '@angular/core';
import { ApiEgoService } from 'src/app/services/api-ego.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-modelos',
  templateUrl: './modelos.component.html',
  styleUrls: ['./modelos.component.css']
})
export class ModelosComponent implements OnInit {

  @ViewChild('botonUno') botonUno: ElementRef;
  @ViewChild('botonDos') botonDos: ElementRef;
  @ViewChild('botonTres') botonTres: ElementRef;
  @ViewChild('botonCuatro') botonCuatro: ElementRef;

  @ViewChild('btnUno') btnUno: ElementRef;
  @ViewChild('btnDos') btnDos: ElementRef;
  @ViewChild('btnTres') btnTres: ElementRef;
  @ViewChild('btnCuatro') btnCuatro: ElementRef;
  @ViewChild('btnCinco') btnCinco: ElementRef;


  constructor(
    private egoService: ApiEgoService,
    private _router: Router,
    private renderer : Renderer2
  ) {
        this.result = [];
        this.filtroUno = false;
        this.filtroDos = false;

   }

  ngOnInit(): void {
      this.obtenerResultados();
      this.obtenerTodosLosResultados();

  }



  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    this.leerActual();
  }



  obtenerTodosLosResultados (){

    this.egoService.query().subscribe(
      response =>{
          return this.filtro = response;
      },
      error =>{
        console.log(error);
      }
   )
   return this.filtro;
  }

  obtenerResultados(){
     this.egoService.query().subscribe(
        response =>{
             this.result = response.filter( res => res.id <= 8);
        },
        error =>{
          console.log(error);
        }
     )
  }

  toFicha(i){
      this._router.navigateByUrl('ficha/' + i);
  }

  changeUno(){
      if(!this.filtroUno) return this.filtroUno = true;
      if(this.filtroUno) return this.filtroUno = false;
  }

  changeDos(){
      if(!this.filtroDos) return this.filtroDos = true;
      if(this.filtroDos)return this.filtroDos = false;
  }

  toggleAction(e){
      if(e === 2){
        this.renderer.addClass(this.botonDos.nativeElement, 'active');
        this.renderer.removeClass(this.botonUno.nativeElement, 'active');
        this.renderer.removeClass(this.botonTres.nativeElement, 'active');
        this.renderer.removeClass(this.botonCuatro.nativeElement, 'active');
        this.filtraPorAuto();

      }else if( e === 3){
        this.renderer.addClass(this.botonTres.nativeElement, 'active');
        this.renderer.removeClass(this.botonUno.nativeElement, 'active');
        this.renderer.removeClass(this.botonCuatro.nativeElement, 'active');
        this.renderer.removeClass(this.botonDos.nativeElement, 'active');
        this.filtrarPorPickup();

      }else if(e === 4){
        this.renderer.addClass(this.botonCuatro.nativeElement, 'active');
        this.renderer.removeClass(this.botonUno.nativeElement, 'active');
        this.renderer.removeClass(this.botonTres.nativeElement, 'active');
        this.renderer.removeClass(this.botonDos.nativeElement, 'active');
        this.fitrarPorSuvs();
      }else if(e === 1){
        this.renderer.addClass(this.botonUno.nativeElement, 'active');
        this.renderer.removeClass(this.botonCuatro.nativeElement, 'active');
        this.renderer.removeClass(this.botonTres.nativeElement, 'active');
        this.renderer.removeClass(this.botonDos.nativeElement, 'active');
        this.obtenerResultados();
      }
  }

  toggleActiontwo(e){
      if(e === 1){
        this.renderer.addClass(this.btnUno.nativeElement, 'active');
        this.renderer.removeClass(this.btnDos.nativeElement, 'active');
        this.renderer.removeClass(this.btnTres.nativeElement, 'active');
        this.renderer.removeClass(this.btnCuatro.nativeElement, 'active');
        this.renderer.removeClass(this.btnCinco.nativeElement, 'active');
      }else if(e === 2){
        this.renderer.addClass(this.btnDos.nativeElement, 'active');
        this.renderer.removeClass(this.btnUno.nativeElement, 'active');
        this.renderer.removeClass(this.btnTres.nativeElement, 'active');
        this.renderer.removeClass(this.btnCuatro.nativeElement, 'active');
        this.renderer.removeClass(this.btnCinco.nativeElement, 'active');
        this.menorMayor();
      }else if(e === 3){
        this.renderer.addClass(this.btnTres.nativeElement, 'active');
        this.renderer.removeClass(this.btnUno.nativeElement, 'active');
        this.renderer.removeClass(this.btnDos.nativeElement, 'active');
        this.renderer.removeClass(this.btnCuatro.nativeElement, 'active');
        this.renderer.removeClass(this.btnCinco.nativeElement, 'active');
        this.mayorMenor();
      }else if(e === 4){
        this.renderer.addClass(this.btnCuatro.nativeElement, 'active');
        this.renderer.removeClass(this.btnUno.nativeElement, 'active');
        this.renderer.removeClass(this.btnDos.nativeElement, 'active');
        this.renderer.removeClass(this.btnTres.nativeElement, 'active');
        this.renderer.removeClass(this.btnCinco.nativeElement, 'active');
        this.masNuevo();
      }else if(e === 5){
        this.renderer.addClass(this.btnCinco.nativeElement, 'active');
        this.renderer.removeClass(this.btnUno.nativeElement, 'active');
        this.renderer.removeClass(this.btnDos.nativeElement, 'active');
        this.renderer.removeClass(this.btnTres.nativeElement, 'active');
        this.renderer.removeClass(this.btnCuatro.nativeElement, 'active');
        this.masViejo();

      }
  }

  filtraPorAuto(){
      return this.result = this.filtro.filter( res => res.segment === 'Autos');

  }

  filtrarPorPickup(){
    return this.result = this.filtro.filter( res => res.segment === 'Pickups y Comerciales');
  }

  fitrarPorSuvs(){
    return this.result = this.filtro.filter( res => res.segment === 'SUVs y Crossovers');
  }

  menorMayor(){
    this.filtroActual(2);
    return this.result.sort((a, b) => a.price - b.price);
  }

  mayorMenor(){
    this.filtroActual(3);
    return  this.result.sort((a, b) => a.price - b.price).reverse();
  }

  masNuevo(){
    this.filtroActual(4);
    return  this.result.sort((a, b) => a.year - b.year).reverse();
  }

  masViejo(){
    this.filtroActual(5);
    return this.result.sort((a, b) => a.year - b.year);
  }

  filtroActual(actual){
      return this.actual = actual;
  }

  leerActual(){
    if(this.actual === 2){
      this.menorMayor();
    }else if(this.actual === 3){
      this.mayorMenor()
    }else if(this.actual === 4){
      this.masNuevo();
    }else if(this.actual === 5){
      this.masViejo();
    }
  }


  public actual: number;
  public filtro: Array<any>;
  public result: Array<any>;
  public filtroUno: boolean;
  public filtroDos: boolean;


}
