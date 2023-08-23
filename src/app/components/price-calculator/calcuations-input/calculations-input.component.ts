import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSelectModule} from "@angular/material/select";
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {ProjectType} from "@shared/enum/calculations.enum";
import {SelectComponent} from "@theme/select/select.component";

@Component({
  selector: 'cw-calculations-input',
  standalone: true,
  imports: [CommonModule, MatSelectModule, ReactiveFormsModule, SelectComponent],
  templateUrl: './calculations-input.component.html',
  styleUrls: ['./calculations-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalculationsInputComponent implements OnInit {

  calculationsForm : FormGroup;

  projectTypeOptions: Option[] = [{label: 'Basic', value: ProjectType.Basic},{label: 'Advanced', value: ProjectType.Advanced},{label: 'Complex', value: ProjectType.Complex}]
  constructor(private readonly fb: FormBuilder) {
    this.calculationsForm = this.fb.group({
      project: ProjectType.Basic
    })
  }

  ngOnInit(): void {
  }

  protected readonly ProjectTypeEnum = ProjectType;
}

interface Option {
  value: string;
  label: string;
}
