export default class Header {
  private container: HTMLElement;

  constructor (id: string) {
    this.container = document.createElement('header');
    this.container.id = id;
  }

  createLogo() {
    const logo = document.createElement('a');
    logo.classList.add('logo');
    logo.href = '#';
    return logo;
  }

  createNav() {
    const title = document.createElement('h1');
    title.textContent = 'Online Store';
    const nav = document.createElement('nav');
    nav.classList.add('navbar');
    nav.append(title);
    return nav;
  }

  createFav() {
    const fav = document.createElement('div');
    const span = document.createElement('span');
    span.textContent = '0';
    fav.classList.add('fav');
    fav.append(span);
    return fav;
  }

  render() {
    const container = document.createElement('div');
    container.classList.add('container');
    const logo = this.createLogo();
    const nav = this.createNav();
    const fav = this.createFav();
    container.append(logo, nav, fav);
    this.container.append(container);
    return this.container;
  }
}