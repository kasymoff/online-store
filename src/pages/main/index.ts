import Header from './header/Header';

class MainPage {
  private container: HTMLElement;
  private header: Header;

  constructor(id: string) {
    this.container = document.createElement('div');
    this.container.id = id;
    this.header = new Header('header');
  }

  render() {
    const headerNode = this.header.render();
    this.container.append(headerNode);
    return this.container;
  }
}

export default MainPage;
