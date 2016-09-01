import { CintiaCliPage } from './app.po';

describe('cintia-cli App', function() {
  let page: CintiaCliPage;

  beforeEach(() => {
    page = new CintiaCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
