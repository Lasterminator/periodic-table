import { Component, HostListener, OnInit } from '@angular/core'
import { ModalInformation } from '../models/modal-information.model'
import { ModalService } from '../services/modal.service'

/**
 * Represents a modal that shows chemical element information.
 */
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass']
})
export class ModalComponent implements OnInit {
  constructor(private modalService: ModalService) {
  }
  ngOnInit(): void {
    this.modalService.connectComponent(this)
  }

  /** True if this modal should render. */
  public isVisible = false

  /** The information that will appear on the modal. */
  public info!: ModalInformation | null

  /** True if this modal has any image to render. */
  public hasImage = true

  /**
   * Shows the modal.
   */
  public open = (info: ModalInformation): void => {
    this.info = info
    this.hasImage = !!info.getImageUrl
    
    if (this.info.hasInfo()) {
      this.isVisible = true
    }
  }

  /**
   * Hides the modal.
   */
  public close = (): void => {
    this.isVisible = false
  }
  
  // Closes the modal on ESCAPE key press.
  @HostListener('document:keyup', ['$event'])
  handleCloseKeyEvent = (event: KeyboardEvent): void => {
    if(event.key === 'Escape') {
      this.close()
    }
  }
}