import { Component } from '@angular/core'
import { DatatableService } from '../services/datatable.service'

/**
 * A component that contains the main content of the application.
 */
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.sass']
})
export class ContentComponent {
  constructor(private datatableService: DatatableService) {
  }

  /**
   * Returns true if the datatable is open.
   */
  public isDatatableOpen = (): boolean => this.datatableService.isVisible()

  /**
   * Gets the html class of the component.
   * @returns A string of the html class name.
   */
  public getHtmlClass = (): string => this.isDatatableOpen() ? 'datatable-open' : ''
}