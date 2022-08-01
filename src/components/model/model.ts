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

export class AppModel {
  items: itemObj[];

  constructor() {
    this.items = arrayOfItems;
  }
}