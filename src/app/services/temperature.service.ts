import { Injectable } from '@angular/core';
import { TemperatureOutOfRangeError } from '../models/error.model'

/**
 * A service that gets and sets the global temperature variable of the application.
 */
@Injectable({
  providedIn: 'root'
})
export class TemperatureService {
  constructor() {
  }

  /** The minumum temperature allowed in Kelvin. */
  public readonly minTemperature = 0
  /** The maximum temperature allowed within the program in Kelvin. */
  public readonly maxTemperature = 6000
  /** 0°C in Kelvin constant */
  private readonly zeroCelsius = 273.15
  /** The global temperature in Kelvin. */
  private temperature: number = this.zeroCelsius

  /** Gets the global temperature in Kelvin. */
  public getTemperature = (): number => this.temperature

  /** Sets the global temperature in Kelvin. */
  public setTemperature = (value: number): void => {
    const isInRange = value >= this.minTemperature && value <= this.maxTemperature
    if (!isInRange) {
      throw new TemperatureOutOfRangeError(value, this.minTemperature, this.maxTemperature)
    }
    this.temperature = value
  }

  /**
   * Gets the global temperature in Celsius.
   */
  public getTemperatureInCelsius = (): number =>
    Math.round(this.temperature - this.zeroCelsius)
}