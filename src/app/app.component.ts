import { Component } from '@angular/core';
import { faJs, faAngular, IconDefinition } from '@fortawesome/free-brands-svg-icons';

interface CodeTile {
  height: number;
  width: number;
  icon: IconDefinition;
  fontcolor: string;
  bgcolor: string;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public faJs = faJs;
  public faAngular = faAngular;

  public tiles: Array<CodeTile> = [
    { height: 200, width: 200, icon: faJs, fontcolor: '#303030', bgcolor: '#ffd000', text: 'Javascript is language.' },
    { height: 200, width: 200, icon: faAngular, fontcolor: '#e9e9e9', bgcolor: '#c00000', text: 'Angular is a framework.' }
  ];

}
