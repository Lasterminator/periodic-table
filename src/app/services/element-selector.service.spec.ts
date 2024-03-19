import { Component } from '@angular/core'
import { TestBed } from '@angular/core/testing'
import { ElementSelector } from './element-selector.service'

describe('ElementSelectorService', () => {
  let service: ElementSelector

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElementSelector)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('should select element', () => {
    service.select(1)
    expect(service.selectedElement?.name).toEqual('hydrogen')
    service.select(10)
    expect(service.selectedElement?.name).toEqual('neon')
    service.select(118)
    expect(service.selectedElement?.name).toEqual('oganesson')
    service.select(null)
    expect(service.selectedElement).toBeNull()
  })
})