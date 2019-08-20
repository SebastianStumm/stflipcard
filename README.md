# stflipcard module

A simple flipcard module for Angular 8+.

## Installation

npm install stflipcard --save

## Usage

### Basic Usage

```
<st-flipcard>
    <st-flipcard-front>
       your content for the front side of the flipcard
    </st-flipcard-front>
    <st-flipcard-back>
         your content for the back side of the flipcard
    </st-flipcard-back>
</st-flipcard>
```

### Detailed Example
```
...
<st-flipcard *ngFor="let tile of tiles" [height]="tile.height" [width]="tile.width">
    <st-flipcard-front>
        <div class="language-logo-container-front" [style.background-color]="tile.bgcolor" [style.color]="tile.fontcolor">
            <div class="language-logo-front">
                <fa-icon [icon]="tile.icon" size="8x"></fa-icon>
            </div>
        </div>
    </st-flipcard-front>
    <st-flipcard-back>
        <div class="language-logo-container-back">
            <div class="language-logo-back">{{tile.text}}</div>
        </div>
    </st-flipcard-back>
</st-flipcard>
...
```

```
...
public tiles: Array<CodeTile> = [
    { height: 200, width: 200, icon: faJs, fontcolor: '#303030', bgcolor: '#ffd000', text: 'Javascript is language.' },
    { height: 200, width: 200, icon: faAngular, fontcolor: '#e9e9e9', bgcolor: '#c00000', text: 'Angular is a framework.' }
  ];
...
```

## Attributes

Attribute | Input
------------ | -------------
[height]| height for the card in px.
[width] | width for the card in px.

## License

This module uses the MIT licence.
