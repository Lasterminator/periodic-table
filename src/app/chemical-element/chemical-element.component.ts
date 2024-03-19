import { Component, Input } from '@angular/core'
import { Classification } from '../../enums/classification.enum'
import { Mode } from '../../enums/mode.enum'
import { ElementalComponent } from '../models/elemental-component'
import { DatatableService } from '../services/datatable.service'
import { ElementSelector } from '../services/element-selector.service'
import { ModalService } from '../services/modal.service'
import { ModeService } from '../services/mode.service'
import { TemperatureService } from '../services/temperature.service'
import { AtomicNumberError } from '../models/error.model'
import { ChemicalElementService } from '../services/chemical-element.service'

/**
 * Represents a single chemical element tile on the periodic table.
 */
@Component({
  selector: 'app-chemical-element[atomicNumber]',
  templateUrl: './chemical-element.component.html',
  styleUrls: ['./chemical-element.component.sass'],
})
export class ChemicalElementComponent extends ElementalComponent {
  constructor(
    private chemicalElementService: ChemicalElementService,
    private modeService: ModeService,
    private temperatureService: TemperatureService,
    private datatableService: DatatableService,
    elementSelector: ElementSelector,
    modalService: ModalService) {
    super(elementSelector, modalService)
  }
  ngOnInit() {
    this.element = this.chemicalElementService.getElement(this.atomicNumber)
    if (!this.element) {
      throw new AtomicNumberError(this.atomicNumber)
    }
  }

  @Input()
  atomicNumber!: number

  /**
   * Gets the element tile html class, based on the current mode.
   * @returns A string of the html class name.
   */
  public getElementTileHtmlClass = (): string => {
    let htmlClass = ''

    const getElementsHtmlClass = (): string => ''

    const getBlocksHtmlClass = (): string => {
      let blocksClass: string = ''
      blocksClass += `${this.element.block.name}-block`
      if (this.elementSelector.selectedElement?.block === this.element.block) {
        blocksClass += ' highlighted'
      }
      return blocksClass
    }

    const getGroupsHtmlClass = (): string => {
      let groupsClass: string = ''
      if (this.element.group) {
        groupsClass += this.element.group.index % 2 === 0 ? ' stripe-even' : ' stripe-odd'
        if (this.elementSelector.selectedElement?.group === this.element.group) {
          groupsClass += ' highlighted'
        }
      }
      else {
        groupsClass += ' disabled'
      }
      return groupsClass
    }

    const getPeriodsHtmlClass = (): string => {
      let periodsClass: string = ''
      periodsClass += this.element.period.index % 2 === 0 ? ' stripe-even' : ' stripe-odd'
      if (this.elementSelector.selectedElement?.period === this.element.period) {
        periodsClass += ' highlighted'
      }
      return periodsClass
    }

    const getRadioactiveHtmlClass = (): string =>
      this.element.isRadioactive ? 'radioactive-true' : 'radioactive-false'

    const getStateHtmlClass = (): string => {
      const temperature = this.temperatureService.getTemperature()
      if (!this.element.meltingPoint || temperature < this.element.meltingPoint) {
        return 'state-solid'
      }
      if (!this.element.boilingPoint || temperature < this.element.boilingPoint) {
        return 'state-liquid'
      }
      return 'state-vapour'
    }

    const getClassificationHtmlClass = (): string =>
      'classification-' + Classification[this.element.classification].toString().toLowerCase()

    if (this.isDatatableOpen()) {
      htmlClass += 'minimal '
    }
    if (this.element === this.elementSelector.selectedElement) {
      htmlClass += 'selected '
    }

    switch (this.modeService.getMode()) {
      case Mode.Elements: htmlClass += getElementsHtmlClass(); break
      case Mode.Blocks: htmlClass += getBlocksHtmlClass(); break
      case Mode.Groups: htmlClass += getGroupsHtmlClass(); break
      case Mode.Periods: htmlClass += getPeriodsHtmlClass(); break
      case Mode.Radioactive: htmlClass += getRadioactiveHtmlClass(); break
      case Mode.States: htmlClass += getStateHtmlClass(); break
      case Mode.Classification: htmlClass += getClassificationHtmlClass(); break
    }

    return htmlClass
  }

  /**
   * Returns true if the datatable is currently open, false otherwise.
   */
  public isDatatableOpen = (): boolean =>
    this.datatableService.isVisible()
}