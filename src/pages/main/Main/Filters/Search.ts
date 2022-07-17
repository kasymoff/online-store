export default class Search {
  private container: HTMLElement;

  constructor() {
    this.container = document.createElement('div');
    this.container.classList.add('filterGroup');
  }

  createTitle(): void {
    const title = document.createElement('h4');
    title.textContent = 'Поиск';
    title.classList.add('filtersTitle');
    this.container.append(title);
  }

  createSearchField(): void {
    const searchWrapper = document.createElement('div');
    searchWrapper.classList.add('searchWrapper');
    const input = document.createElement('input');
    input.classList.add('search', 'false');
    input.placeholder = 'Введите текст';
    input.type = 'text';
    searchWrapper.append(input);
    this.container.append(searchWrapper);
  }

  createSortField(): void {
    const sortField = document.createElement('div');
  }

  render() {
    this.createTitle();
    this.createSearchField();
    return this.container
  }
}