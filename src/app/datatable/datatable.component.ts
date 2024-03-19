import { Component } from '@angular/core'
import { Sorting } from '../../enums/sorting.enum'
import { ChemicalElement } from '../models/chemical-element.model'
import { ElementalComponent } from '../models/elemental-component'
import { InvalidClassification } from '../models/error.model'
import { ChemicalElementService } from '../services/chemical-element.service'
import { ElementSelector } from '../services/element-selector.service'
import { ElementSorter } from '../services/element-sorter.service'
import { ModalService } from '../services/modal.service'

/**
 * Represents a datatable with information about the chemical elements.
 */
@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.sass']
})
export class DatatableComponent extends ElementalComponent {
  constructor(
    private chemicalElementService: ChemicalElementService,
    private elementSorter: ElementSorter,
    elementSelector: ElementSelector,
    modalService: ModalService) {
    super(elementSelector, modalService)
    this.elements = this.getElements()
  }

  /** An array of chemical elements. */
  elements: ChemicalElement[]
  /** The current sorting method. */
  sorting: Sorting = Sorting.ByZ
  /** True if sorting is reversed. */
  isSortingReversed: boolean = false

  /**
   * Returns all the known chemical elements.
   * @returns A {@linkcode ChemicalElement} array of all the elements.
   */
  public getElements = (): ChemicalElement[] =>
    this.chemicalElementService.getElements()

  /**
   * Returns the classification name that corresponds to the given number.
   * @param classification The number that represents a classification. Must be between 0 and 2.
   * @returns A string that represents a classification name ('nonmetal', 'metaloid' or 'metal').
   */
  public getElementClassification = (classification: number): string => {
    const classificationName: string | undefined =
      this.chemicalElementService.getClassification(classification)

    if (!classificationName) {
      throw new InvalidClassification(classification)
    }
    return classificationName
  }

  /**
   * Sets the given element as selected.
   * @param element The chemical element to be set as selected.
   */
  public selectElement = (element: ChemicalElement): void => {
    this.element = element
    this.select()
  }

  /**
   * Gets the html for a given chemical element's row on the datatable.
   * @param element The element that corresponds to a datatable row.
   * @returns A string of value 'selected' if the given element is selected,
   * empty string otherwise.
   */
  public getRowHtmlClass = (element: ChemicalElement): string =>
    this.isSelected(element) ? 'selected' : ''

  /**
   * Sorts the elements.
   * @param sortBy A number representing the sorting method.
   */
  public sort = (sortBy: number): void => {
    if (this.sorting === sortBy) {
      this.isSortingReversed = !this.isSortingReversed
    }
    else {
      this.isSortingReversed = false
    }
    this.sorting = sortBy
    this.elementSorter.sort(this.elements, this.sorting, this.isSortingReversed)
  } 

  private isSelected = (element: ChemicalElement): boolean =>
    this.elementSelector.selectedElement == element
}