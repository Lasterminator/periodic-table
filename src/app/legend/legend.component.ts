import { Component } from '@angular/core'
import { Mode } from '../../enums/mode.enum'
import { ModeService } from '../services/mode.service'

/**
 * Represents a visual explanation of the colors that are used to describe the elements.
 */
@Component({
  selector: 'app-legend',
  templateUrl: './legend.component.html',
  styleUrls: ['./legend.component.sass']
})
export class LegendComponent {
  constructor(private modeService: ModeService) {
    this.items = this.getItems()
    modeService.subscribe(this, () => this.items = this.getItems())
  }

  /** The names of the features that are present in this legend. */
  public items!: string[]

  /**
   * Returns true if this legend has any features.
   * @returns True if the map has items, false otherwise.
   */
  public hasContent = (): boolean => this.items.length > 0

  // Gets the items of this legend, based on the current mode.
  private getItems = (): string[] => {
    const mode: Mode = this.modeService.getMode()
    switch (mode) {
      case Mode.Blocks: return [
        's-block',
        'p-block',
        'd-block',
        'f-block',
      ]
      case Mode.Radioactive: return [
        'non-radioactive',
        'radioactive',
      ]
      case Mode.States: return [
        'solid',
        'liquid',
        'vapour',
      ]
      case Mode.Classification: return [
        'nonmetal',
        'metaloid',
        'metal',
      ]
      default: return []
    }
  }
}