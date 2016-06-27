import { AngularToDoerPage } from './app.po';

describe('angular-to-doer App', function() {
  let page: AngularToDoerPage;

  beforeEach(() => {
    page = new AngularToDoerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
