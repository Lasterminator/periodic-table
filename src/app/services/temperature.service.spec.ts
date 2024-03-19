import { TestBed } from '@angular/core/testing'
import { TemperatureOutOfRangeError } from '../models/error.model'
import { TemperatureService } from './temperature.service'

describe('ThermostatService', () => {
  let service: TemperatureService
  let min: number, max: number, zeroCelsius: number

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(TemperatureService)
    min = service.minTemperature
    max = service.maxTemperature
    zeroCelsius = service['zeroCelsius']
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('should get and set temperature', () => {
    expect(service.getTemperature()).toEqual(zeroCelsius) // default uppon initialization

    service.setTemperature(0)
    expect(service.getTemperature()).toEqual(0)

    service.setTemperature(100)
    expect(service.getTemperature()).toEqual(100)
  })

  it('should throw error on out of range temperature input', () => {
    const error = (input: number) => new TemperatureOutOfRangeError(input, min, max)
    const invalidInputs = [-100, -1, max + 1, 10_000, NaN, Infinity]

    for (const input of invalidInputs) {
      expect(() => service.setTemperature(input)).toThrow(error(input))
    }
  })

  it('should get temperature in Celcius', () => {
    expect(service.getTemperatureInCelsius()).toEqual(0) // default uppon initialization

    service.setTemperature(0)
    expect(service.getTemperatureInCelsius()).toEqual(-273)

    service.setTemperature(100)
    expect(service.getTemperatureInCelsius()).toEqual(-173)

    service.setTemperature(1521)
    expect(service.getTemperatureInCelsius()).toEqual(1248)
  })
})