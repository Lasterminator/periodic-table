import { ElementSelector } from "../services/element-selector.service"
import { ModalService } from "../services/modal.service"
import { ChemicalElement } from "./chemical-element.model"

/**
 * Represents a component that has information about a single chemical element.
 */
export abstract class ElementalComponent {
  constructor(
    protected elementSelector: ElementSelector,
    private modalService: ModalService) {
  }

  /** Represents a chemical element that and its chemical properties and
    * its place in the periodic table. */
  public element!: ChemicalElement

  /**
   * Sets this element as selected.
   */
  public select = () => this.elementSelector.select(this.element.atomicNumber)

  /**
   * Replaces this element with null as the selected one.
   */
  public unselect = () => this.elementSelector.select(null)

  /**
 * Opens the modal window.
 */
  public openModal = (): void => {
    this.modalService.open()
  }
}