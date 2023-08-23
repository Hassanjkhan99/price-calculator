import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CalculationsViewerComponent} from "./caluations-viewer/calculations-viewer.component";
import {CalculationsInputComponent} from "./calcuations-input/calculations-input.component";
import {MatCardModule} from "@angular/material/card";

@Component({
  selector: 'cw-price-calculator',
  standalone: true,
  imports: [CommonModule, CalculationsViewerComponent, CalculationsInputComponent, MatCardModule],
  templateUrl: './price-calculator.component.html',
  styleUrls: ['./price-calculator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PriceCalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
