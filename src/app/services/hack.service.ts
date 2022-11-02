import { Injectable } from '@angular/core';
import { hack } from '../interfaces/hack-interface';

@Injectable({
  providedIn: 'root'
})
export class HackService {

  private _hack: hack[]=[
    {
      nombre: 'Pokémon Clover',
      base: 'GBA',
      descripcion: 'Es un hack hecho por la gente de 4chan, con un humor negro',
      calificacion: 'chido'
    }
  ]

  get hackLocal():hack[]{
    return [...this._hack];
  }

  agregarHack( pais: hack ) {
    this._hack.push( pais );
}

  constructor() { }
}
