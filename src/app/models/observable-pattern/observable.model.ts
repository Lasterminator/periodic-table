import { Observer } from "./observer.model"

/**
 * Represents an object whose changes that can be detected by {@linkcode Observer} objects,
 * following the 'observable pattern'.
 */
export abstract class Observable {

    constructor(params: () => any) {
        this.params = params
    }

    /** The parameters that this observable requires on observer handle method. */
    protected params: () => any

    /** The observer objects that are currently observing this object. */
    protected observers: Observer[] = new Array()

    /**
     * Subscribes an object as an observer to this observable.
     * @param observer The object of type {@linkcode Observer} to be subscribed.
     * @param handle The callback method of the observer to be excecuted on notification.
     */
    public subscribe = (observer: object, handle: (params: any) => void) =>
        this.observers.push({observer, handle})

    /**
     * Unsubscribes an object from an observer to this observable.
     * @param component The object of type {@linkcode Observer} to be unsubscribed.
     */
    public unsubscribe = (component: object) =>
        this.observers = this.observers.filter(o => o.observer !== component)
    
    /**
     * Calls the handle method of each observer that is subscribed to this observable.
     */
    protected notifyObservers = (): void =>
        this.observers.forEach(sub => sub.handle(this.params()))
}