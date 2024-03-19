import { Injectable } from '@angular/core'
import { ChemicalElement } from '../models/chemical-element.model'
import { Observable } from '../models/observable-pattern/observable.model'
import { Observer } from '../models/observable-pattern/observer.model'
import { ChemicalElementService } from './chemical-element.service'

/**
 * A service for storing the selected element. It uses the observable design pattern
 * to the selected element data to components.
 */
@Injectable({
  providedIn: 'root'
})
export class ElementSelector extends Observable {

  constructor(private chemicalElementService: ChemicalElementService) {
    super(() => this.selectedElement)
  }

  /** The element that the user is hovering the cursor over. */
  public selectedElement: ChemicalElement | null = null

  /**
   * A method to change the selected element and inform the subscribers.
   * @param atomicNumber The atomic number of the selected element.
   * Null if no element is currently selected.
   */
  public select = (atomicNumber: number | null) => {
    this.selectedElement = atomicNumber
      ? this.chemicalElementService.getElement(atomicNumber)
      : null
    this.notifyObservers()
  }
}