import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatatableService {
  constructor() {
  }

  private isHidden: boolean = true

  public isVisible = (): boolean => !this.isHidden

  public toogle = (): void => {
    this.isHidden = !this.isHidden
  }
}