import { Component, OnInit, Input, Directive, ElementRef } from '@angular/core';

@Component({
  selector: 'st-flipcard',
  template: `
    <div class="flipcard-container" [ngStyle]="{'height.px': height.toString(), 'width.px': width.toString()}" (click)="rotate()">
      <div class="flipcard-content">
        <div class="front">
          <ng-content select="st-flipcard-front"></ng-content>
        </div>
        <div class="back">
          <ng-content select="st-flipcard-back"></ng-content>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./flipcard.scss']
})
export class FlipcardComponent implements OnInit {

  @Input() width: number;
  @Input() height: number;

  constructor() { }

  ngOnInit() {
  }

  public rotate() {

  }

}

@Directive({
  selector: 'st-flipcard-front'
})
export class FrontDirective implements OnInit {
  constructor(private element: ElementRef) { }

  ngOnInit() {

  }
}

@Directive({
  selector: 'st-flipcard-back'
})
export class BackDirective implements OnInit {
  constructor(private element: ElementRef) { }

  ngOnInit() {

  }
}
