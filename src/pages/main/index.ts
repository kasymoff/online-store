class MainPage {
  private container: HTMLElement;

  static TextObject = {
    MainTitle: 'Online Store soon to be here...',
  };

  constructor(id: string) {
    this.container = document.createElement('div');
  };

  private createHeaderTitle(text: string) {
    const headerTitle = document.createElement('h1');
    headerTitle.innerText = text;
    return headerTitle;
  }

  render() {
    const title = this.createHeaderTitle(MainPage.TextObject.MainTitle);
    this.container.append(title);
    return this.container;
  }
}

export default MainPage;