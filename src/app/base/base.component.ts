import { NgxSpinnerService } from "ngx-spinner";

export class BaseComponent {
  constructor(private spinner: NgxSpinnerService) { }

  showSpinner(spinnerNametype: SpinnerType) {
    this.spinner.show(spinnerNametype);
    setTimeout(() => this.hideSpinner(spinnerNametype), 500);
  }
  hideSpinner(spinnerNameType: SpinnerType) {
    this.spinner.hide(spinnerNameType);
  }
}

export enum SpinnerType {
  BallAtom = "slide-one",
  BallScaleMultiple = "slide-two",
  BallSpinClockwiseFadeRotating = "slide-three"
}
