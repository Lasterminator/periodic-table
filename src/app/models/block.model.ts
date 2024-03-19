/**
 * Represents a block of chemical elements in the periodic table.
 */
export interface Block {
    /** A number representing the block in the periodic table. */
    index: number
    /** The name of the block. */
    name: string,
    /** A brief description of the block. */
    description: string,
}