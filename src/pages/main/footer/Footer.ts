export default class Footer {
  private container: HTMLElement;

  constructor(id: string) {
    this.container = document.createElement('footer');
    this.container.id = id;
  }

  createFooter(): void {
    const container = document.createElement('div');
    container.classList.add('container');
    this.container.append(container);
    const rsLinkWrapper = document.createElement('div');
    const rsLink = document.createElement('a');
    rsLink.href = 'https://rs.school/';
    rsLink.target = '_blank';
    rsLink.rel = 'noreffer';
    rsLink.classList.add('rs-link');
    rsLinkWrapper.append(rsLink);
    container.append(rsLinkWrapper);
    const copyLinkWrapper = document.createElement('div');
    const copyLink = document.createElement('a');
    copyLink.href = 'https://rollingscopes.com';
    copyLink.target = '_blank';
    copyLink.rel = 'noreffer';
    copyLink.classList.add('copy-link');
    copyLink.textContent = '© Rolling Scopes School, 2022';
    copyLinkWrapper.append(copyLink);
    container.append(copyLinkWrapper);
  }

  render() {
    this.createFooter();
    return this.container;
  }
}