import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(relativePath?: string) {
    if (!relativePath) {
      relativePath = '/';
    }

    return browser.get(relativePath);
  }

  getElementByCss(selector: string) {
    return element(by.css(selector));
  }

  getElementsByCss(selector: string) {
    return element.all(by.css(selector));
  }
}
