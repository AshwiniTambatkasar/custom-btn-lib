import { Component, Input, HostBinding, HostListener } from '@angular/core';

import { Enum } from './enum';

@Component({
  selector: 'lib-button-lib',
  template: '<ng-content></ng-content>',
  styleUrls: ['./button-lib.component.scss'],
})
export class ButtonLibComponent {
  @Input() public style?: Enum.ButtonStyle;
  @Input() public size?: Enum.ButtonSize;

  @Input() public shape?: Enum.ButtonShape;

  @Input() public color?: Enum.ButtonColor;

  @Input() public effect?: Enum.ButtonEffect;

  @Input() public disabled?: string;

  @HostBinding('class')
  get classes(): string {
    return `${this.style} ${this.size} ${this.shape} ${this.color} ${
      this.disabled ? 'disabled' : ''
    } ${this.effect ? this.effect : ''} `;
  }
}
