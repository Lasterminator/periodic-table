/**
 * Represents an object that detects changes an observable object,
 * following the 'observable pattern'.
 */
export interface Observer {
    /** The object that 'observes' the observable. */
    observer: object,
    /** The callback method on change detection. */
    handle: (params: any) => void,
}