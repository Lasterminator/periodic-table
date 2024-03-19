import { Classification } from "../../enums/classification.enum"
import { ChemicalElement } from "./chemical-element.model"

/** Represents chemical information to be shown on the modal. */
export abstract class ModalInformation {
    constructor(element: ChemicalElement) {
        this.element = element
    }

    /** The element to draw information from. */
    public element: ChemicalElement

    /** Gets the title section of the modal information. */
    abstract getTitle(): string
    /** Gets the subtitle section of modal information. */
    abstract getSubTitle(): string
    /** Gets the details section of modal information. */
    abstract getDetails(): [string, string][]
    /** Gets the description section of modal information. */
    abstract getDescription(): string
    /** Gets the url for the image section of modal information. */
    abstract getImageUrl(): string | null

    /** True if there is information to show. */
    public hasInfo = (): boolean => !!this.getTitle() && !!this.getDescription()
}

/** Represents chemical information of an element to be shown on the modal. */
export class ElementModalInformation extends ModalInformation {
    getTitle = (): string => this.element.symbol
    getSubTitle = (): string => this.element.name
    getDetails = (): [string, string][] => getElementDetails(this.element)
    getDescription = (): string => this.element.description
    getImageUrl = (): string | null => {
        const path = '../../../assets/images/chemical-elements/chemical_element_'
        const suffix = '.jpg'
        return path + this.element.atomicNumber + suffix
    }
}
/** Represents chemical information of an element block to be shown on the modal. */
export class BlockModalInformation extends ModalInformation {
    getTitle = (): string => `${this.element.block.name}-block`
    getSubTitle = (): string => ''
    getDetails = (): [string, string][] => []
    getDescription = (): string => this.element.block.description
    getImageUrl = (): string | null => null
}
/** Represents chemical information of an element group to be shown on the modal. */
export class GroupModalInformation extends ModalInformation {
    getTitle = (): string => this.element.group.name
    getSubTitle = (): string => this.element.group.trivialName ?? ''
    getDetails = (): [string, string][] => []
    getDescription = (): string => this.element.group.description
    getImageUrl = (): string | null => null
}
/** Represents chemical information of an element period to be shown on the modal. */
export class PeriodModalInformation extends ModalInformation {
    getTitle = (): string => `Period ${this.element.period.index}`
    getSubTitle = (): string => ''
    getDetails = (): [string, string][] => []
    getDescription = (): string => this.element.period.description
    getImageUrl = (): string | null => null
}

/**
 * Returns the details of a given element.
 * @param element The chemical element to get the details from.
 * @returns An array of [string, string] tuples.
 * The first tuple item is the name of the detail, while the
 * second is the value.
 */
function getElementDetails(element: ChemicalElement): [string, string][] {
    let details: [string, string][] = []
    const getTemperaturePointOrUnknown = (temperature: number | null): string =>
        temperature ? `${temperature} K` : '?' // Returns '?' if unknown

    details.push(['Atomic Number', element.atomicNumber.toString()])
    details.push(['Atomic Mass', `${element.atomicMass} Da`])
    details.push(['Density', `${element.density} g/cm3`])
    details.push(['Classification', Classification[element.classification]])
    details.push(['Melting Point', getTemperaturePointOrUnknown(element.meltingPoint)])
    details.push(['Boiling Point', getTemperaturePointOrUnknown(element.boilingPoint)])
    details.push(['Radioactive', element.isRadioactive ? 'True' : 'False'])

    details.push(['Block', element.block.name])

    element.group
        ? element.group.trivialName
            ? details.push(['Group', `${element.group.name} (${element.group.trivialName})`])
            : details.push(['Group', element.group.name])
        : details.push(['Group', '-'])

    details.push(['Period', element.period.index.toString()])

    return details
}