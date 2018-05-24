import { Entrainement2Angular2Page } from './app.po';

describe('entrainement2-angular2 App', function() {
  let page: Entrainement2Angular2Page;

  beforeEach(() => {
    page = new Entrainement2Angular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
