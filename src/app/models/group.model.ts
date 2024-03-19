/**
 * Represents a column of chemical elements in the periodic table.
 */
export interface Group {
    /** The number of group column in the periodic table. */
    index: number,
    /** The name by element of the group (e.g. 'lithium family'). */
    name: string,
    /** The trivial name of the group (e.g. 'alkaline earth metals'). */
    trivialName: string,
    /** A brief description of the group. */
    description: string,
}