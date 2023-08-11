import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonComponent} from "@shared/theme/button/button.component";
import {OverlayContainer} from "@angular/cdk/overlay";

@Component({
  selector: 'cw-calculations-viewer',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './calculations-viewer.component.html',
  styleUrls: ['./calculations-viewer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalculationsViewerComponent implements OnInit {

  constructor(private overlayContainer: OverlayContainer, private readonly cdr: ChangeDetectorRef) {}

  toggleTheme() {
    console.log('test')
    const overlayContainerElement = this.overlayContainer.getContainerElement();
    const themeWrapperClassList = overlayContainerElement.classList;
    themeWrapperClassList.contains('dark-theme')
      ? themeWrapperClassList.remove('dark-theme')
      : themeWrapperClassList.add('dark-theme');
    console.log({themeWrapperClassList})
    this.cdr.detectChanges();
  }

  ngOnInit(): void {
  }

}
