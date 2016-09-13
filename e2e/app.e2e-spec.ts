import { SantisProduceWebPage } from './app.po';

describe('santis-produce-web App', function() {
  let page: SantisProduceWebPage;

  beforeEach(() => {
    page = new SantisProduceWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
