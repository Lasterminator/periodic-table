import { TestBed } from '@angular/core/testing'
import { ElementSorter } from './element-sorter.service'

describe('ElementSorterService', () => {
  let service: ElementSorter

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElementSorter)
  });

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})