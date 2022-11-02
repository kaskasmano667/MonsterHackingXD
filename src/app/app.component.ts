import { Component, Input } from '@angular/core';
import { hack } from './interfaces/hack-interface';
import { HackService } from './services/hack.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MosnterHacking';

  @Input() nuevoHack:hack = {
    nombre: '',
    base: '',
    descripcion: '',
    calificacion: ''
  }

  constructor(private hackService:HackService) { }

  get paisLocal():hack[]{
    return this.hackService.hackLocal;
  }

  agregar(){
    this.hackService.agregarHack(this.nuevoHack);
    this.nuevoHack={
      nombre: '',
      base: '',
      descripcion: '',
      calificacion: ''
    }
  }
}
