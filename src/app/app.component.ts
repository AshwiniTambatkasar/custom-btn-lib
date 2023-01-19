import { Component } from '@angular/core';

import { Enum } from 'projects/button-lib/src/lib/enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-library';
  // ButtonStyle = Enum.ButtonStyle;
  // ButtonSize = Enum.ButtonSize;
  // ButtonShape = Enum.ButtonShape;
  // ButtonColor = Enum.ButtonColor;
  // ButtonIcon = Enum.ButtonIcon;
  // ButtonEffect = Enum.ButtonEffect;
  enum = Enum;
}
