import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-lista',
  templateUrl: './componente-lista.component.html',
  styleUrls: ['./componente-lista.component.css']
})
export class ComponenteListaComponent implements OnInit {

  alumnos = [
    'Exequiel Delgado', 'Julian Rombola', 'Guillermo Federicchi', 'Bart Simpson', 'Pepe Garcia'
  ]
  
  mostrarAlumnos = false;
  

  public porArriba = false;

  constructor() { }

  ngOnInit(): void {
  }

}

