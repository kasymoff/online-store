import Header from './header/Header';
import Main from './Main/Main';

class MainPage {
  private container: HTMLElement;
  private header: Header;
  private main: Main;

  constructor(id: string) {
    this.container = document.createElement('div');
    this.container.id = id;
    this.header = new Header('header');
    this.main = new Main('main');
  }

  render() {
    const headerNode = this.header.render();
    const mainNode = this.main.render();
    this.container.append(headerNode);
    this.container.append(mainNode);
    return this.container;
  }
}

export default MainPage;
