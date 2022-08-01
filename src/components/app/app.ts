import MainPage from '../main/index';

class App {
  private container: HTMLElement;
  private initialPage: MainPage;

  constructor() {
    this.container = document.body;
    this.initialPage = new MainPage('root');
  }

  run() {
    const mainPageHTML = this.initialPage.render();
    this.container.append(mainPageHTML);

    
  }
}

export default App;
