import noUiSlider from 'nouislider';

export default class RangeFilter {
  private container: HTMLElement;

  constructor() {
    this.container = document.createElement('div');
    this.container.classList.add('filterGroup');
  }

  createTitle(): void {
    const title = document.createElement('h4');
    title.textContent = 'Фильтры по диапазону';
    title.classList.add('filtersTitle');
    this.container.append(title);
  }

  createRange(title: string, lowRange: number, highRange: number, id: string): void {
    const slider = document.createElement('div');
    slider.classList.add('range');
    const tit = document.createElement('h5');
    tit.textContent = title;
    slider.append(tit);
    const wrapper = document.createElement('div');
    wrapper.classList.add('range-wrapper');
    const lowRan = document.createElement('div');
    const highRan = document.createElement('div');
    lowRan.classList.add('rangeNums');
    highRan.classList.add('rangeNums');
    wrapper.prepend(lowRan);
    const rangeLine = document.createElement('div');
    rangeLine.id = id;
    rangeLine.classList.add('rangeSlider');
    noUiSlider.create(rangeLine, {
      start: [lowRange, highRange],
      connect: true,
      step: 1,
      range: {
        'min': lowRange,
        'max': highRange
      },
      behaviour: 'unconstrained-tap',
    });
    wrapper.append(rangeLine);
    wrapper.append(highRan);
    lowRan.textContent = String(lowRange);
    highRan.textContent = String(highRange);
    slider.append(wrapper);
    this.container.append(slider);
  }

  render() {
    this.createTitle();
    this.createRange('Количество на складе', 1, 12, 'quantity');
    this.createRange('Год выхода на рынок', 2000, 2022, 'year');
    return this.container;
  }
}