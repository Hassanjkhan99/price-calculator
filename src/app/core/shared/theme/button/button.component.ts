import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'cw-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone:true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, MatButtonModule]
})
export class ButtonComponent implements OnInit {

  @Input() type: 'warn' | 'primary' | 'accent' = 'primary'
  constructor() { }

  ngOnInit(): void {
  }

}
