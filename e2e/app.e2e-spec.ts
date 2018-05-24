import { DatProjetPage } from './app.po';

describe('dat-projet App', function() {
  let page: DatProjetPage;

  beforeEach(() => {
    page = new DatProjetPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
