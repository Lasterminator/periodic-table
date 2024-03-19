/**
 * Represents the visual modes of the periodic table in this application.
 */
export enum Mode {
    /** Each element is represented by the same color. */
    Elements,

    /** Each chemical element block is represented by a different color. */
    Blocks,

    /** Chemical element groups are represented by vertical stripes */
    Groups,

    /** Chemical element periods are represented by horizontal stripes */
    Periods,

    /** Chemical elements' state of matter are represented, depending on the temperature. */
    States,

    /** Classification of the chemicals elements represented by different colors. */
    Classification,

    /** Radioactive chemical elements are highlighted. */
    Radioactive,
}