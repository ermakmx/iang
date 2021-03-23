import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  public heroes: string[] = ['spiderman', 'ironman', 'hulk', 'thor'];
  public heroesBorrados: string[] = [];
  borrarHeroe() {
    let herotemp: string = this.heroes.pop() || '';
    this.heroesBorrados.push(herotemp);
  }
}
