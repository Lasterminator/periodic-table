import { TestBed } from '@angular/core/testing'
import { ElementGridService } from './element-grid.service'

describe('ElementGridService', () => {
  let service: ElementGridService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(ElementGridService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})