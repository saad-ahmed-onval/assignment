import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2 *ngIf='displayName2; else elseBlock1'> Welcome</h2>

    <ng-template #elseBlock1>
      <h2> Name is hidden </h2>
    </ng-template>

<!--ascs-->

    <div [ngSwitch]="color">
      <div *ngSwitchCase="'red'">you picked red</div>
      <div *ngSwitchCase="'green'">you picked green</div>
      <div *ngSwitchCase="'blue'">you picked blue</div>
      <div *ngSwitchDefault>Click Again</div>

    </div>

    `,
  styles: []
})

export class TestComponent implements OnInit {

  public color = 'sadfsv';



  constructor() { }

  ngOnInit() {
  }

}
