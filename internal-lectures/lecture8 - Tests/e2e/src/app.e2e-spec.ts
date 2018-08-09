import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should have brand name', () => {
    page.navigateTo();
    const brandLink = page.getElementByCss('a.navbar-brand');
    expect(brandLink.getText()).toEqual('Angular');
  });

  it('should have Products and Orders menu', () => {
    page.navigateTo();
    const orderLink = page.getElementByCss('[routerlink="orders"]');
    const productsLink = page.getElementByCss('[routerlink="products"]');

    expect(orderLink.getText()).toEqual('Orders');
    expect(productsLink.getText()).toEqual('Products');
  });

  it('should display orders on the Order page', () => {
    page.navigateTo();
    const orderLink = page.getElementByCss('[routerlink="orders"]');

    orderLink.click();

    const bbbb = page.getElementsByCss('app-order-details');
    bbbb.count().then((b) => console.log(b));

  });

});
