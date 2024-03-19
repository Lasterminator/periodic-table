import { Component } from '@angular/core';
import { DatatableService } from '../services/datatable.service'

/**
 * Represents a button that shows/hides the datatable.
 */
@Component({
  selector: 'app-datatable-toggle',
  templateUrl: './datatable-toggle.component.html',
  styleUrls: ['./datatable-toggle.component.sass']
})
export class DatatableToggleComponent {
  constructor(private datatableService: DatatableService) {
  }

  /**
   * Shows/hides the datatable.
   */
  public toogle = (): void => {
    this.datatableService.toogle()
  }

  /**
   * Returns the text of the button.
   */
  public getButtonText = (): string =>
    this.datatableService.isVisible()
      ? 'Close Datatable'
      : 'Open Datatable'
}