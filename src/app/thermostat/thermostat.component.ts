import { Component, OnInit } from '@angular/core'
import { Mode } from '../../enums/mode.enum'
import { ModeService } from '../services/mode.service'
import { TemperatureService } from '../services/temperature.service'

@Component({
  selector: 'app-thermostat',
  templateUrl: './thermostat.component.html',
  styleUrls: ['./thermostat.component.sass']
})
export class ThermostatComponent implements OnInit {

  constructor(
    private temperatureService: TemperatureService,
    private modeService: ModeService) {
    this.minTemperature = temperatureService.minTemperature
    this.maxTemperature = temperatureService.maxTemperature
  }
  ngOnInit(): void {
  }

  /** The minumum temperature allowed in Kelvin. */
  public readonly minTemperature: number

  /** The maximum temperature allowed within the program in Kelvin. */
  public readonly maxTemperature: number

  /**
   * Sets the value of the global temperature.
   * @param value The new temperature value.
   */
  public setTemperature = (value: string): void => {
    const temperature = parseFloat(value)
    this.temperatureService.setTemperature(temperature)
  }

  /**
   * Gets the temparature text, based on the global temperature.
   * @returns A string of the following format: {temperature in Kelvin}K ({temperature in Celsius}°C)
   */
  public getTemperatureText = (): string =>
    `${this.temperatureService.getTemperature()}K ` +
    `(${this.temperatureService.getTemperatureInCelsius()}°C)`

  /**
   * Returns true if the current mode is 'States', otherwise false.
   * This element should be hidden in other modes.
   */
  public getVisibilityClass = (): string =>
    this.modeService.getMode() === Mode.States ? '' : 'hidden'
}