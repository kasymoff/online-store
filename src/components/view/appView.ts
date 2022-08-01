import noUiSliders from "noUiSlider";

export class AppView {
  public slider1: HTMLElement;
  public slider2: HTMLElement;

  constructor() {
    this.slider1 = document.getElementById('slider1') as HTMLElement;
    this.slider2 = document.getElementById('slider2') as HTMLElement;
  }

  createSliders() {
    noUiSlider.create(this.slider1, {
      start: [40],
      connect: [true, false],
      range: {
        min: 0,
        max: 100
      }
    });

    noUiSlider.create(this.slider2, {
      start: [20, 60],
      connect: [false, true, false],
      range: {
        min: 0,
        max: 100
      }
    });
  }
}