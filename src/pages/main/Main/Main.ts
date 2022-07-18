import ValueFilter from './Filters/FiltersByValue';
import RangeFilter from './Filters/FiltersByRange';
import Search from './Filters/Search';

type itemObj = {
  id: number;
  name: string;
  image: string;
  quantity: number;
  yearOfRelease: number;
  vendor: string;
  color: string;
  qCamera: number;
  popular: string;
}

export const arrayOfItems: itemObj[] = [
  {id: 1, name: 'Apple iPhone 11', image: 'assets/db/7.png', quantity: 12, yearOfRelease: 2018, vendor: 'Apple', color: 'белый', qCamera: 3, popular: 'да'},
  {id: 2, name: 'Apple iPhone 12', image: 'assets/db/9.png', quantity: 2, yearOfRelease: 2010, vendor: 'Apple', color: 'желтый', qCamera: 3, popular: 'нет'},
  {id: 3, name: 'Apple iPhone 13', image: 'assets/db/8.png', quantity: 10, yearOfRelease: 2009, vendor: 'Apple', color: 'красный', qCamera: 3, popular: 'нет'},
  {id: 4, name: 'Apple iPhone SE', image: 'assets/db/10.png', quantity: 7, yearOfRelease: 2004, vendor: 'Apple', color: 'белый', qCamera: 1, popular: 'нет'},
  {id: 5, name: 'Samsung Galaxy A03', image: 'assets/db/2.png', quantity: 5, yearOfRelease: 2000, vendor: 'Samsung', color: 'красный', qCamera: 2, popular: 'нет'},
  {id: 6, name: 'Samsung Galaxy S20', image: 'assets/db/3.png', quantity: 3, yearOfRelease: 2022, vendor: 'Samsung', color: 'желтый', qCamera: 1, popular: 'нет'},
  {id: 7, name: 'Samsung Galaxy S21', image: 'assets/db/1.png', quantity: 2, yearOfRelease: 2019, vendor: 'Samsung', color: 'белый', qCamera: 3, popular: 'нет'},
  {id: 8, name: 'Xiaomi Poco X4 pro', image: 'assets/db/4.png', quantity: 1, yearOfRelease: 2014, vendor: 'Xiaomi', color: 'желтый', qCamera: 2, popular: 'нет'},
  {id: 9, name: 'Xiaomi Redmi 9C 3/64gb', image: 'assets/db/6.png', quantity: 6, yearOfRelease: 2010, vendor: 'Xiaomi', color: 'красный', qCamera: 2, popular: 'нет'},
  {id: 10, name: 'Xiaomi Redmi Note 11', image: 'assets/db/5.png', quantity: 4, yearOfRelease: 2012, vendor: 'Xiaomi', color: 'белый', qCamera: 1, popular: 'да'}, 
]
export class Main {
  static container: HTMLElement;
  static valueFilter: ValueFilter;
  static containerWrapper: HTMLElement;
  static rangeFilter: RangeFilter;
  static search: Search;
  static listingWrapper: HTMLElement;
  static itemsArray: itemObj[];

  constructor(id: string) {
    Main.container = document.createElement('main');
    Main.container.id = id;
    Main.containerWrapper = document.createElement('div');
    Main.valueFilter = new ValueFilter();
    Main.rangeFilter = new RangeFilter();
    Main.search = new Search();
    Main.listingWrapper = document.createElement('div');
    Main.itemsArray = arrayOfItems;
  }

  static createContainerClass(): void {
    Main.containerWrapper.classList.add('container');
  }

  static createFilters() {
    const filtersWrapper = document.createElement('div');
    filtersWrapper.classList.add('filtersWrapper');
    const valFilters = Main.valueFilter.render();
    const ranFilters = Main.rangeFilter.render();
    const sear = Main.search.render();
    filtersWrapper.append(valFilters);
    filtersWrapper.append(ranFilters);
    filtersWrapper.append(sear);
    return filtersWrapper;
  }

  static createListing(array: itemObj[]): void {
    Main.listingWrapper.classList.add('listingWrapper');
    Main.listingWrapper.innerHTML = '';
    for (let i = 0; i < array.length; i++) {
      const item = Main.createListItem(array[i]);
      Main.listingWrapper.append(item);
    }
    Main.containerWrapper.append(Main.listingWrapper);
  }

  static createListItem(obj: itemObj) {
    const item = document.createElement('div');
    item.classList.add('listItem');
    const title = document.createElement('h4');
    title.classList.add('itemTitle');
    title.textContent = obj.name;
    item.append(title);
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('imageContainer');
    const img = document.createElement('img');
    img.classList.add('item-img');
    img.src = obj.image;
    imageContainer.append(img);
    item.append(imageContainer);
    const infoArray: string[] = [
      `Количество: ${obj.quantity}`, 
      `Год выхода: ${obj.yearOfRelease}`, 
      `Производитель: ${obj.vendor}`, 
      `Цвет: ${obj.color}`, 
      `Количество камер: ${obj.qCamera}`, 
      `Популярность: ${obj.popular}`
    ]
    const itemInfo = document.createElement('ul');
    itemInfo.classList.add('listInfo');
    for (let i = 0; i < infoArray.length; i++) {
      const listItem = document.createElement('li');
      listItem.textContent = infoArray[i];
      itemInfo.append(listItem)
    }
    item.append(itemInfo);
    return item;
  }

  static clearFilters() {
    Main.itemsArray = arrayOfItems;
    Main.clearFilters();
    Main.createListing(Main.itemsArray);
  }

  render() {
    Main.createContainerClass();
    const filters = Main.createFilters();
    Main.containerWrapper.append(filters);
    Main.container.append(Main.containerWrapper);
    Main.createListing(Main.itemsArray);
    return Main.container;
  }
}