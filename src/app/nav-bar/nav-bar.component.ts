import { Component } from '@angular/core'
import { ModeService } from '../services/mode.service'

/**
 * Represents the nav bar of the application, with buttons that change the table mode.
 */
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.sass']
})
export class navBarComponent {
  constructor(private modeService: ModeService) {
  }

  /**
   * Sets the mode of the periodic table.
   * @param mode A number that represents a mode.
   */
  public setMode = (mode: number): void =>
    this.modeService.setMode(mode)

  /**
   * Gets the html class of each input and determines wheter or not it is selected.
   */
  public getInputClass = (mode: number): string =>
    this.modeService.getMode() === mode ? 'selected' : ''
}