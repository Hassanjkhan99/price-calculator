import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cw-calcuations-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calcuations-input.component.html',
  styleUrls: ['./calcuations-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalcuationsInputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
