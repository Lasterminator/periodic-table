import { Classification } from "../../enums/classification.enum"
import { Block } from "./block.model"
import { Group } from "./group.model"
import { Period } from "./period.model"

/** 
 *  Represents a chemical element that describes its chemical properties and
 *  its place in the periodic table.
 */
export interface ChemicalElement {
    /** The atomic number or nuclear charge number (symbol Z) of a chemical element. */
    atomicNumber: number

    /** The name of the element. */
    name: string

    /** The symbol of the element (e.g. 'He' for Helium). */
    symbol: string

    /** A brief description of the element's properties. */
    description: string

    /** Represents a classification of the chemical elements, based on their metallic properties. */
    classification: Classification

    /** True if the element is radioactive. */
    isRadioactive: boolean

    /** The mass of the element's atom in dalton (u).*/
    atomicMass: number

    /** The mass per volume of the element. */
    density: number

    /** The temperature (in kelvin) at which the element changes
     * state from solid to liquid at standard pressure.
     * Null if the melting point of the element is unknown. */
    meltingPoint: number | null

    /** The temperature (in kelvin) at which the element changes
     * state from liquid to gas at standard pressure.
     * Null if the boiling point of the element is unknown. */
    boilingPoint: number | null

    /** The group in the periodic table this element belongs to. */
    group: Group

    /** The period in the periodic table this element belongs to. */
    period: Period
    
    /** The block in the periodic table this element belongs to. */
    block: Block
}