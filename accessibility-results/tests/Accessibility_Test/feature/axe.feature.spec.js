// Generated from: tests\Accessibility_Test\feature\axe.feature
import { test } from "playwright-bdd";

test.describe('Accessibility Testing', () => {

  test.beforeEach('Background: Navigate to home page', async ({ Given, page, baseURL }) => {
    await Given('I navigate to the ecommerce homepage', null, { page, baseURL }); 
  });
  
  test('Main Header accessibility validation', { tag: ['@axe-core'] }, async ({ When, page, Then }) => { 
    await When('I scan the main header section for accessibility issues', null, { page }); 
    await Then('there should be no accessibility violations'); 
  });

  test('Navigation Header accessibility validation', { tag: ['@axe-core'] }, async ({ When, page, Then }) => { 
    await When('I scan the navigation header section for accessibility issues', null, { page }); 
    await Then('there should be no accessibility violations'); 
  });

  test('Footer accessibility validation', { tag: ['@axe-core'] }, async ({ When, page, Then }) => { 
    await When('I scan the footer section for accessibility issues', null, { page }); 
    await Then('there should be no accessibility violations'); 
  });

  test.describe('Accessibility scan for important "<pages>"', () => {

    test('Accessibility scan for important "/"', { tag: ['@axe-core'] }, async ({ Given, page, baseURL, When, Then }) => { 
      await Given('I navigate ecommerce  to "/"', null, { page, baseURL }); 
      await When('I run accessibility scan', null, { page }); 
      await Then('there should be no accessibility violations'); 
    });

    test('Accessibility scan for important "/index.php?route=product/special"', { tag: ['@axe-core'] }, async ({ Given, page, baseURL, When, Then }) => { 
      await Given('I navigate ecommerce  to "/index.php?route=product/special"', null, { page, baseURL }); 
      await When('I run accessibility scan', null, { page }); 
      await Then('there should be no accessibility violations'); 
    });

    test('Accessibility scan for important "/index.php?route=extension/maza/blog/home"', { tag: ['@axe-core'] }, async ({ Given, page, baseURL, When, Then }) => { 
      await Given('I navigate ecommerce  to "/index.php?route=extension/maza/blog/home"', null, { page, baseURL }); 
      await When('I run accessibility scan', null, { page }); 
      await Then('there should be no accessibility violations'); 
    });

    test('Accessibility scan for important "/index.php?route=account/login"', { tag: ['@axe-core'] }, async ({ Given, page, baseURL, When, Then }) => { 
      await Given('I navigate ecommerce  to "/index.php?route=account/login"', null, { page, baseURL }); 
      await When('I run accessibility scan', null, { page }); 
      await Then('there should be no accessibility violations'); 
    });

  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('tests\\Accessibility_Test\\feature\\axe.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":14,"tags":["@axe-core"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I navigate to the ecommerce homepage","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"When I scan the main header section for accessibility issues","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Then there should be no accessibility violations","stepMatchArguments":[]}]},
  {"pwTestLine":15,"pickleLine":18,"tags":["@axe-core"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I navigate to the ecommerce homepage","isBg":true,"stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":19,"keywordType":"Action","textWithKeyword":"When I scan the navigation header section for accessibility issues","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":20,"keywordType":"Outcome","textWithKeyword":"Then there should be no accessibility violations","stepMatchArguments":[]}]},
  {"pwTestLine":20,"pickleLine":22,"tags":["@axe-core"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I navigate to the ecommerce homepage","isBg":true,"stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":23,"keywordType":"Action","textWithKeyword":"When I scan the footer section for accessibility issues","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":24,"keywordType":"Outcome","textWithKeyword":"Then there should be no accessibility violations","stepMatchArguments":[]}]},
  {"pwTestLine":27,"pickleLine":41,"tags":["@axe-core"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I navigate to the ecommerce homepage","isBg":true,"stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":34,"keywordType":"Context","textWithKeyword":"Given I navigate ecommerce  to \"/\"","stepMatchArguments":[{"group":{"start":25,"value":"\"/\"","children":[{"start":26,"value":"/","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":29,"gherkinStepLine":35,"keywordType":"Action","textWithKeyword":"When I run accessibility scan","stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":36,"keywordType":"Outcome","textWithKeyword":"Then there should be no accessibility violations","stepMatchArguments":[]}]},
  {"pwTestLine":33,"pickleLine":42,"tags":["@axe-core"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I navigate to the ecommerce homepage","isBg":true,"stepMatchArguments":[]},{"pwStepLine":34,"gherkinStepLine":34,"keywordType":"Context","textWithKeyword":"Given I navigate ecommerce  to \"/index.php?route=product/special\"","stepMatchArguments":[{"group":{"start":25,"value":"\"/index.php?route=product/special\"","children":[{"start":26,"value":"/index.php?route=product/special","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":35,"gherkinStepLine":35,"keywordType":"Action","textWithKeyword":"When I run accessibility scan","stepMatchArguments":[]},{"pwStepLine":36,"gherkinStepLine":36,"keywordType":"Outcome","textWithKeyword":"Then there should be no accessibility violations","stepMatchArguments":[]}]},
  {"pwTestLine":39,"pickleLine":43,"tags":["@axe-core"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I navigate to the ecommerce homepage","isBg":true,"stepMatchArguments":[]},{"pwStepLine":40,"gherkinStepLine":34,"keywordType":"Context","textWithKeyword":"Given I navigate ecommerce  to \"/index.php?route=extension/maza/blog/home\"","stepMatchArguments":[{"group":{"start":25,"value":"\"/index.php?route=extension/maza/blog/home\"","children":[{"start":26,"value":"/index.php?route=extension/maza/blog/home","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":41,"gherkinStepLine":35,"keywordType":"Action","textWithKeyword":"When I run accessibility scan","stepMatchArguments":[]},{"pwStepLine":42,"gherkinStepLine":36,"keywordType":"Outcome","textWithKeyword":"Then there should be no accessibility violations","stepMatchArguments":[]}]},
  {"pwTestLine":45,"pickleLine":44,"tags":["@axe-core"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I navigate to the ecommerce homepage","isBg":true,"stepMatchArguments":[]},{"pwStepLine":46,"gherkinStepLine":34,"keywordType":"Context","textWithKeyword":"Given I navigate ecommerce  to \"/index.php?route=account/login\"","stepMatchArguments":[{"group":{"start":25,"value":"\"/index.php?route=account/login\"","children":[{"start":26,"value":"/index.php?route=account/login","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":47,"gherkinStepLine":35,"keywordType":"Action","textWithKeyword":"When I run accessibility scan","stepMatchArguments":[]},{"pwStepLine":48,"gherkinStepLine":36,"keywordType":"Outcome","textWithKeyword":"Then there should be no accessibility violations","stepMatchArguments":[]}]},
]; // bdd-data-end