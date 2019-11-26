import { getAddProjectButton, getProjects } from '../support/app.po';

describe('Permaculture-PlannerApps', () => {
  beforeEach(() => cy.visit('/'));

  it('should display projects', () => {
    getProjects().should(t => expect(t.length).equal(0));
    getAddProjectButton();
  });
});