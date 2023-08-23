import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, Renderer2} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonComponent} from "@shared/theme/button/button.component";
import {OverlayContainer} from "@angular/cdk/overlay";
import {MatButtonModule} from "@angular/material/button";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'cw-calculations-viewer',
  standalone: true,
  imports: [CommonModule, ButtonComponent, MatButtonModule],
  templateUrl: './calculations-viewer.component.html',
  styleUrls: ['./calculations-viewer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalculationsViewerComponent implements OnInit {

  constructor(private readonly cdr: ChangeDetectorRef) {}


  toggleTheme() {
    const body = document.querySelector('html')!;
    body.classList.toggle('dark-theme');
    this.cdr.detectChanges();
  }
  ngOnInit() {

  }

}
