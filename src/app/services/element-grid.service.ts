import { Injectable } from '@angular/core'
import { ChemicalElement } from '../models/chemical-element.model'
import { ChemicalElementService } from './chemical-element.service'

/**
 * A service for getting the chemical elements as they are represented on the periodic table.
 */
@Injectable({
  providedIn: 'root'
})
export class ElementGridService {
  constructor(private chemicalElementService: ChemicalElementService) {
  }

  /**
   * A method for getting the chemical elements they are represented on the periodic table.
   * Chain the top() method for getting the main body elements of the periodic table,
   * or the bottom() method for getting the f-block elements. For example:
   * ```typescript
   * const topGrid = getGrid().top()
   * const bottomGrid = getGrid().bottom()
   * ```
   */
  public getGrid() {
    let grid = new Array<ChemicalElement | null>()

    /**
     * Used for adding multiple {@linkcode ChemicalElement} objects to the grid array.
     * @param i The atomic number of the first element to add.
     * @param n The number of elements to add.
     */
    const addElements = (i: number, n: number = 1) =>
      grid.push(...this.chemicalElementService.getElements(i, n))
    /**
     * Used for adding multiple null items to the grid array.
     * @param i The number of null items to be added.
     */
    const addEmptyCells = (i: number) =>
      grid.push(...Array(i).fill(null))

    return {
      /**
       * Returns an array with {@linkcode ChemicalElement} objects from period 1 to 6 excluding
       * the f-block. Some indices contain null values and represent the white space between the
       * elements on the periodic table.
       */
      top: (): (ChemicalElement | null)[] => {
        addElements(1); addEmptyCells(16); addElements(2)          // period 1
        addElements(3, 2); addEmptyCells(10); addElements(5, 6)    // period 2
        addElements(11, 2); addEmptyCells(10); addElements(13, 6)  // period 3
        addElements(19, 18);                                       // period 4
        addElements(37, 18);                                       // period 5
        addElements(55, 2); addElements(71, 16)                    // period 6
        addElements(87, 2); addElements(103, 16)                   // period 6
        return grid;
      },
      /**
       * Returns an array with {@linkcode ChemicalElement} objects that belong in the f-block.
       * Some indices contain null values and represent the white space between the elements on
       * the periodic table.
       */
      bottom: (): (ChemicalElement | null)[] => {
        addEmptyCells(2); addElements(57, 14); addEmptyCells(2);   // Lanthanoids
        addEmptyCells(2); addElements(89, 14); addEmptyCells(2);   // Actinoids
        return grid;
      }
    }
  }
}