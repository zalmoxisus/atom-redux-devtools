'use babel';

import HtmlTabView from './htmlTabView';

export default class HtmlTab {
  constructor(tabTitle) {
    this.tabTitle = tabTitle;
  }
  getTitle() {
    return this.tabTitle;
  };
  getViewClass() {
    return HtmlTabView;
  };
}
