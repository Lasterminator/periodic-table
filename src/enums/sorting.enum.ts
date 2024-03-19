/**
 * Represents the sorting modes of the chemical element datatable.
 */
export enum Sorting {
    /** Sort by atomic number. */
    ByZ,

    /** Sort by name. */
    ByName,

    /** Sort by atomic symbol. */
    BySymbol,

    /** Sort by atomic mass. */
    ByWeight,

    /** Sort by atomic density. */
    ByDensity,

    /** Sort by classification. */
    ByClassification,

    /** Sort by melting point. */
    ByMeltingPoint,

    /** Sort by boiling point. */
    ByBoilingPoint,

    /** Sort by block. */
    ByBlock,

    /** Sort by group. */
    ByGroup,

    /** Sort by period. */
    ByPeriod,

    /** Sort by radiation. */
    ByRadiation,
}