import { Injectable } from '@angular/core'
import { Sorting } from '../../enums/sorting.enum'
import { ChemicalElement } from '../models/chemical-element.model'

/**
 * A services that handles operations on sorting elements.
 */
@Injectable({
  providedIn: 'root'
})
export class ElementSorter {
  constructor() {
  }

  /**
   * Sorts a collection of chemical elements.
   * @param collection The array of elements to be sorted.
   * @param sorting The sorting method.
   * @param descending True to reverse the sorting.
   */
  public sort = (
    collection: ChemicalElement[],
    sorting: Sorting,
    descending: boolean = false
  ): void => {
    collection.sort(function (a: ChemicalElement, b: ChemicalElement) {
      switch (sorting) {
        case Sorting.ByZ: return descending
          ? b.atomicNumber - a.atomicNumber
          : a.atomicNumber - b.atomicNumber

        case Sorting.ByName: return descending
          ? b.name.localeCompare(a.name)
          : a.name.localeCompare(b.name)

        case Sorting.BySymbol: return descending
          ? b.symbol.localeCompare(a.symbol)
          : a.symbol.localeCompare(b.symbol)

        case Sorting.ByWeight: return descending
          ? b.atomicMass - a.atomicMass
          : a.atomicMass - b.atomicMass

        case Sorting.ByDensity: return descending
          ? b.density - a.density
          : a.density - b.density

        case Sorting.ByClassification: return descending
          ? b.classification - a.classification
          : a.classification - b.classification

        case Sorting.ByRadiation: return descending
          ? (a.isRadioactive === b.isRadioactive) ? 0 : b.isRadioactive ? -1 : 1
          : (a.isRadioactive === b.isRadioactive) ? 0 : a.isRadioactive ? -1 : 1

        case Sorting.ByMeltingPoint: return descending
          ? (b.meltingPoint ?? Infinity) - (a.meltingPoint ?? Infinity)
          : (a.meltingPoint ?? Infinity) - (b.meltingPoint ?? Infinity)

        case Sorting.ByBoilingPoint: return descending
          ? (b.boilingPoint ?? Infinity) - (a.boilingPoint ?? Infinity)
          : (a.boilingPoint ?? Infinity) - (b.boilingPoint ?? Infinity)

        case Sorting.ByBlock: return descending
          ? b.block.index - a.block.index
          : a.block.index - b.block.index

        case Sorting.ByGroup: return descending
          ? (b.group?.index ?? 0) - (a.group?.index ?? 0)
          : (a.group?.index ?? 0) - (b.group?.index ?? 0)

        case Sorting.ByPeriod: return descending
          ? b.period.index - a.period.index
          : a.period.index - b.period.index

        default: return 0;
      }
    })
  }
}