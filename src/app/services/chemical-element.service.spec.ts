import { TestBed } from '@angular/core/testing'
import { ChemicalElementService } from './chemical-element.service'

describe('ChemicalElementService', () => {
  let service: ChemicalElementService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(ChemicalElementService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('should get elements', () => {
    expect(service.getElement(1).name).toEqual('hydrogen')
    expect(service.getElement(79).name).toEqual('gold')
    expect(service.getElement(118).name).toEqual('oganesson')
  })

  it('should return undefined on invalid get element input', () => {
    const invalidInputs = [NaN, Infinity, 0, 119, -5]
    for (const input of invalidInputs) {
      expect(service.getElement(input)).toBeUndefined()
    }
  })

  it('should get multiple elements', () => {
    const getElements = (i: number, n: number): string[] =>
      service.getElements(i, n).map(element => element.name)

    expect(getElements(1, 0)).toEqual([])
    expect(getElements(1, 1)).toEqual(['hydrogen'])
    expect(getElements(1, 2)).toEqual(['hydrogen', 'helium'])
    expect(getElements(5, 4)).toEqual([
      'boron', 'carbon', 'nitrogen', 'oxygen'])
    expect(getElements(110, 9)).toEqual([
      'darmstadtium', 'roentgenium', 'copernicium', 'nihonium', 'flerovium',
      'moscovium', 'livermorium', 'tennessine', 'oganesson'])
  })

  it('should get groups', () => {
    expect(service.getGroup(1).name).toEqual('lithium family')
    expect(service.getGroup(6).name).toEqual('chromium family')
    expect(service.getGroup(18).name).toEqual('helium family')
  })

  it('should get periods', () => {
    expect(service.getPeriod(1).index).toEqual(1)
    expect(service.getPeriod(4).index).toEqual(4)
    expect(service.getPeriod(8).index).toEqual(8)
  })

  it('should get blocks', () => {
    expect(service.getBlock(1).index).toEqual(1)
    expect(service.getBlock(2).index).toEqual(2)
    expect(service.getBlock(3).index).toEqual(3)
    expect(service.getBlock(4).index).toEqual(4)
    expect(service.getBlock(5).index).toEqual(5)
  })

  it('should get classification name or undefined', () => {
    const expectedOutputs = ['nonmetal', 'metaloid', 'metal']
    const wrongInputs = [NaN, Infinity, -1, 3, 1000]
    const len = expectedOutputs.length

    for (let i = 0; i < len; i++) {
      expect(service.getClassification(i)).toEqual(expectedOutputs[i])
    }
    for (const input of wrongInputs) {
      expect(service.getClassification(input)).toBeUndefined
    }
  })
})