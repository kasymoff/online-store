import Header from './header/Header';
import { Main } from './Main/Main';
import Footer from './footer/Footer';

export default class MainPage {
  private container: HTMLElement;
  private header: Header;
  private main: Main;
  private footer: Footer;

  constructor(id: string) {
    this.container = document.createElement('div');
    this.container.id = id;
    this.header = new Header('header');
    this.main = new Main('main');
    this.footer = new Footer('footer');
  }

  render() {
    const headerNode = this.header.render();
    const mainNode = this.main.render();
    const footerNode = this.footer.render();
    this.container.append(headerNode);
    this.container.append(mainNode);
    this.container.append(footerNode);
    return this.container;
  }
}
