import { MyloPage } from './app.po';

describe('mylo App', function() {
  let page: MyloPage;

  beforeEach(() => {
    page = new MyloPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
