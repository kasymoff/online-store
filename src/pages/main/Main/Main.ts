import ValueFilter from './Filters/FiltersByValue';
import RangeFilter from './Filters/FiltersByRange';
import Search from './Filters/Search';

export default class Main {
  private container: HTMLElement;
  private valueFilter: ValueFilter;
  private containerWrapper: HTMLElement;
  private rangeFilter: RangeFilter;
  private search: Search;

  constructor(id: string) {
    this.container = document.createElement('main');
    this.container.id = id;
    this.containerWrapper = document.createElement('div');
    this.valueFilter = new ValueFilter();
    this.rangeFilter = new RangeFilter();
    this.search = new Search();
  }

  createContainerClass(): void {
    this.containerWrapper.classList.add('container');
  }

  createFilters() {
    const filtersWrapper = document.createElement('div');
    filtersWrapper.classList.add('filtersWrapper');
    const valFilters = this.valueFilter.render();
    const ranFilters = this.rangeFilter.render();
    const sear = this.search.render();
    filtersWrapper.append(valFilters);
    filtersWrapper.append(ranFilters);
    filtersWrapper.append(sear);
    return filtersWrapper;
  }

  createListing() {
    const listOfItems = document.createElement('div');
  }

  createListItem() {

  }

  render() {
    this.createContainerClass()
    const filters = this.createFilters();
    this.containerWrapper.append(filters);
    this.container.append(this.containerWrapper);
    return this.container;
  }
}