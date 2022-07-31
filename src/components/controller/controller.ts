import { AppView } from '../view/appView';
import { AppModel } from '../model/model';

export default class AppController {
  appView: AppView;
  appModel: AppModel;
  
  constructor() {
    this.appView = new AppView();
    this.appModel = new AppModel();
  }
}