export default class ValueFilter {

  private container: HTMLElement;
  private valueWrapper: HTMLElement;

  constructor() {
    this.container = document.createElement('div');
    this.container.classList.add('filterGroup');
    this.valueWrapper = document.createElement('div');
    this.valueWrapper.id = 'valueWrapper';
  }

  createTitle(): void {
    const title = document.createElement('h4');
    title.textContent = 'Фильтры по значению';
    title.classList.add('filtersTitle');
    this.container.append(title);
  }

  createFiltersWrapper(): void {
    this.container.append(this.valueWrapper);
  }

  createShapeFilter(): void {
    const filterByShape = document.createElement('div');
    filterByShape.classList.add('FilterByShape');
    filterByShape.textContent = 'Производитель:';
    const list = document.createElement('ul');
    const vendors: string[] = ['Samsung', 'Apple', 'Xiaomi'];
    for (let i = 0; i < vendors.length; i++) {
      const btn = document.createElement('button');
      btn.classList.add(`button`, vendors[i]);
      btn.textContent = `${vendors[i]}`;
      list.append(btn);
    }
    filterByShape.append(list);
    this.valueWrapper.append(filterByShape);
  }

  createSizeFilter(): void {
    const filterBySize = document.createElement('div');
    filterBySize.classList.add('FilterBySize');
    filterBySize.textContent = 'Количество камер:';
    const list = document.createElement('ul');
    const size: string[] = ['3', '2', '1'];
    for (let i = 0; i < size.length; i++) {
      const btn = document.createElement('button');
      btn.classList.add(`button`, `camera-${size[i]}`);
      btn.textContent = `${size[i]}`;
      list.append(btn);
    }
    filterBySize.append(list);
    this.valueWrapper.append(filterBySize);
  }

  createColorFilter(): void {
    const filterByColor = document.createElement('div');
    filterByColor.classList.add('FilterByColor');
    filterByColor.textContent = 'Цвет:';
    const list = document.createElement('ul');
    const colors: string[] = ['white', 'yellow', 'red'];
    for (let i = 0; i < colors.length; i++) {
      const btn = document.createElement('button');
      btn.classList.add(`button`, colors[i]);
      btn.textContent = `${colors[i]}`;
      list.append(btn);
    }
    filterByColor.append(list);
    this.valueWrapper.append(filterByColor);
  }

  createFavFilter(): void {
    const favFilter = document.createElement('div');
    favFilter.classList.add('FilterByFav');
    favFilter.textContent = 'Только популярные:';
    const wrapper = document.createElement('div');
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.classList.add('fav-input');
    input.id = 'fav-input';
    const label = document.createElement('label');
    label.setAttribute('for', 'checkbox');
    label.classList.add('fav-input-label');
    wrapper.append(input);
    wrapper.append(label);
    favFilter.append(wrapper);
    this.valueWrapper.append(favFilter);
  }

  render() {
    this.createTitle();
    this.createFiltersWrapper();
    this.createShapeFilter();
    this.createSizeFilter();
    this.createColorFilter();
    this.createFavFilter();
    return this.container;
  }

}