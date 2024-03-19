import { TestBed } from '@angular/core/testing'
import { Mode } from '../enums/mode.enum'

import { ModeService } from './mode.service'

describe('ModeServiceService', () => {
  let service: ModeService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(ModeService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('should get and set mode', () => {
    expect(service.getMode()).toEqual(Mode.Elements) // default uppon initialization

    service.setMode(2)
    expect(service.getMode()).toEqual(Mode.Groups)
  })
})