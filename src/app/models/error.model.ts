/**
 * Represents an error describing invalid atomic number input.
 */
export class AtomicNumberError extends Error {
    /**
     * Initializes a new instance of the {@linkcode AtomicNumberError} class.
     * @param input The invalid atomic number input that caused the error.
     */
    constructor(input: number) {
        const message = `There's no known element with atomic number '${input}' in the universe.`
        super(message)
    }
}
/**
 * Represents an error describing invalid grid type input.
 */
export class GridTypeError extends Error {
    /**
     * Initializes a new instance of the {@linkcode GridTypeError} class.
     * @param input The grid type input that caused the error.
     */
    constructor(input: string) {
        const message = `Invalid grid type '${input}'. Can only be 'top' or 'bottom'.`
        super(message)
    }
}
/**
 * Represents an error describing invalid tooltip type input.
 */
export class TooltipTypeError extends Error {
    /**
     * Initializes a new instance of the {@linkcode TooltipTypeError} class.
     * @param input The tooltip type input that caused the error.
     */
    constructor(input: string) {
        const message = `Invalid tooptip type input '${input}'.` +
            'Must be: type="auto|elements|groups|periods|blocks".'
        super(message)
    }
}
/**
 * Represents an error describing that temperature value is out of range.
 */
export class TemperatureOutOfRangeError extends Error {
    /**
     * Initializes a new instance of the {@linkcode TemperatureOutOfRangeError} class.
     * @param input The temperature value input that caused the error.
     * @param min The minimum valid value.
     * @param max The maximum valid value.
     */
    constructor(input: number, min: number, max: number) {
        const message = `Invalid temperature value '${input}K'. ` +
            `Must be between ${min}K and ${max}K.`
        super(message)
    }
}

/**
 * Represents an error describing that a number does not correspond to a chemical element classification.
 */
 export class InvalidClassification extends Error {
    /**
     * Initializes a new instance of the {@linkcode InvalidClassification} class.
     * @param input The invalid classification number input.
     */
    constructor(input: number) {
        const message = `${input} does not correspond to a chemical element classification; ` +
            'must be between 0 and 2.'
        super(message)
    }
}