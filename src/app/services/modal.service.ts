import { Injectable } from '@angular/core'
import { ModalComponent } from '../modal/modal.component'
import {
  BlockModalInformation,
  ElementModalInformation,
  GroupModalInformation,
  ModalInformation,
  PeriodModalInformation
} from '../models/modal-information.model'
import { ElementSelector } from './element-selector.service'
import { ModeService } from './mode.service'
import { ChemicalElement } from '../models/chemical-element.model'
import { Mode } from '../../enums/mode.enum'

/**
 * A service for handling operations between the modal component and the
 * chemical elements.
 */
@Injectable({
  providedIn: 'root'
})
export class ModalService {
  constructor(
    private elementSelector: ElementSelector,
    private modeService: ModeService) {
  }

  /** An instance of the single {@linkcode ModalComponent} of the application.*/
  private component!: ModalComponent

  /**
   * Sets the instance of the {@linkcode ModalComponent}.
   * @param component
   */
  public connectComponent = (component: ModalComponent): void => {
    this.component = component
  }

  /**
   * Shows the modal.
   */
  public open = () => {
    const element = this.elementSelector.selectedElement
    if (element) {
      const info = this.getInfo(element)
      this.component.open(info)
    }
  }

  /**
   * Get the {@linkcode ModalInformation} of a particular chemical element, based on
   * the current {@linkcode Mode}.
   * @param element The element to draw information from.
   * @returns A derived class of the {@linkcode ModalInformation} class, whose type is
   * determined by the current {@linkcode Mode}.
   */
  private getInfo = (element: ChemicalElement) : ModalInformation => {
    const mode = this.modeService.getMode()
    switch (mode) {
      case Mode.Blocks: return new BlockModalInformation(element)
      case Mode.Groups: return new GroupModalInformation(element)
      case Mode.Periods: return new PeriodModalInformation(element)
      default: return new ElementModalInformation(element)
    }
  }
}