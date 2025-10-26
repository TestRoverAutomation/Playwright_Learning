// Generated from: tests\UI_Test\feature\login.feature
import { test } from "../../../../tests/UI_Test/fixture/fixtures.ts";

test.describe('Verify login', () => {

  test.beforeEach('Background: Navigate to eco login page', async ({ Given, logInPage }) => {
    await Given('I navigate to "https://ecommerce-playground.lambdatest.io/"', null, { logInPage }); 
  });
  
  test('Verify user is able to login with valid credentials', { tag: ['@login'] }, async ({ And, logInPage, When, Then, page }) => { 
    await And('I click on My account', null, { logInPage }); 
    await And('I enter E-Mail Address "pranav@testroverautomation.com"', null, { logInPage }); 
    await And('I enter password "Test1234"', null, { logInPage }); 
    await When('I click on submit button', null, { logInPage }); 
    await Then('I should verify url contains "route=account/login"', null, { page }); 
  });

  test.describe('Verify user is not able login with following "<emailaddress>" & "<password>"', () => {

    test('Verify user is not able login with following "xzy@gmail.com" & "TesMeTest"', { tag: ['@login'] }, async ({ And, logInPage, When, Then, page }) => { 
      await And('I click on My account', null, { logInPage }); 
      await And('I enter E-Mail Address "xzy@gmail.com"', null, { logInPage }); 
      await And('I enter password "TesMeTest"', null, { logInPage }); 
      await When('I click on submit button', null, { logInPage }); 
      await Then('I should verify user is not able to login and url contains "route=account/login"', null, { page }); 
    });

    test('Verify user is not able login with following "srk@testroverautomation.com" & "Jawan123"', { tag: ['@login'] }, async ({ And, logInPage, When, Then, page }) => { 
      await And('I click on My account', null, { logInPage }); 
      await And('I enter E-Mail Address "srk@testroverautomation.com"', null, { logInPage }); 
      await And('I enter password "Jawan123"', null, { logInPage }); 
      await When('I click on submit button', null, { logInPage }); 
      await Then('I should verify user is not able to login and url contains "route=account/login"', null, { page }); 
    });

    test('Verify user is not able login with following "testerrgreat@123.com" & "Tesrxzy123"', { tag: ['@login'] }, async ({ And, logInPage, When, Then, page }) => { 
      await And('I click on My account', null, { logInPage }); 
      await And('I enter E-Mail Address "testerrgreat@123.com"', null, { logInPage }); 
      await And('I enter password "Tesrxzy123"', null, { logInPage }); 
      await When('I click on submit button', null, { logInPage }); 
      await Then('I should verify user is not able to login and url contains "route=account/login"', null, { page }); 
    });

    test('Verify user is not able login with following "srk_jawan@test.com" & "great123"', { tag: ['@login'] }, async ({ And, logInPage, When, Then, page }) => { 
      await And('I click on My account', null, { logInPage }); 
      await And('I enter E-Mail Address "srk_jawan@test.com"', null, { logInPage }); 
      await And('I enter password "great123"', null, { logInPage }); 
      await When('I click on submit button', null, { logInPage }); 
      await Then('I should verify user is not able to login and url contains "route=account/login"', null, { page }); 
    });

    test('Verify user is not able login with following "SalmanDabang@gmail.com" & "test 123"', { tag: ['@login'] }, async ({ And, logInPage, When, Then, page }) => { 
      await And('I click on My account', null, { logInPage }); 
      await And('I enter E-Mail Address "SalmanDabang@gmail.com"', null, { logInPage }); 
      await And('I enter password "test 123"', null, { logInPage }); 
      await When('I click on submit button', null, { logInPage }); 
      await Then('I should verify user is not able to login and url contains "route=account/login"', null, { page }); 
    });

  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('tests\\UI_Test\\feature\\login.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":10,"tags":["@login"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given I navigate to \"https://ecommerce-playground.lambdatest.io/\"","isBg":true,"stepMatchArguments":[{"group":{"start":14,"value":"\"https://ecommerce-playground.lambdatest.io/\"","children":[{"start":15,"value":"https://ecommerce-playground.lambdatest.io/","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"And I click on My account","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"And I enter E-Mail Address \"pranav@testroverautomation.com\"","stepMatchArguments":[{"group":{"start":23,"value":"\"pranav@testroverautomation.com\"","children":[{"start":24,"value":"pranav@testroverautomation.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":13,"gherkinStepLine":13,"keywordType":"Context","textWithKeyword":"And I enter password \"Test1234\"","stepMatchArguments":[{"group":{"start":17,"value":"\"Test1234\"","children":[{"start":18,"value":"Test1234","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":14,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"When I click on submit button","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then I should verify url contains \"route=account/login\"","stepMatchArguments":[{"group":{"start":29,"value":"\"route=account/login\"","children":[{"start":30,"value":"route=account/login","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":20,"pickleLine":26,"tags":["@login"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given I navigate to \"https://ecommerce-playground.lambdatest.io/\"","isBg":true,"stepMatchArguments":[{"group":{"start":14,"value":"\"https://ecommerce-playground.lambdatest.io/\"","children":[{"start":15,"value":"https://ecommerce-playground.lambdatest.io/","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":21,"gherkinStepLine":18,"keywordType":"Context","textWithKeyword":"And I click on My account","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":19,"keywordType":"Context","textWithKeyword":"And I enter E-Mail Address \"xzy@gmail.com\"","stepMatchArguments":[{"group":{"start":23,"value":"\"xzy@gmail.com\"","children":[{"start":24,"value":"xzy@gmail.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":23,"gherkinStepLine":20,"keywordType":"Context","textWithKeyword":"And I enter password \"TesMeTest\"","stepMatchArguments":[{"group":{"start":17,"value":"\"TesMeTest\"","children":[{"start":18,"value":"TesMeTest","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":24,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"When I click on submit button","stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"Then I should verify user is not able to login and url contains \"route=account/login\"","stepMatchArguments":[{"group":{"start":59,"value":"\"route=account/login\"","children":[{"start":60,"value":"route=account/login","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":28,"pickleLine":27,"tags":["@login"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given I navigate to \"https://ecommerce-playground.lambdatest.io/\"","isBg":true,"stepMatchArguments":[{"group":{"start":14,"value":"\"https://ecommerce-playground.lambdatest.io/\"","children":[{"start":15,"value":"https://ecommerce-playground.lambdatest.io/","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":29,"gherkinStepLine":18,"keywordType":"Context","textWithKeyword":"And I click on My account","stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":19,"keywordType":"Context","textWithKeyword":"And I enter E-Mail Address \"srk@testroverautomation.com\"","stepMatchArguments":[{"group":{"start":23,"value":"\"srk@testroverautomation.com\"","children":[{"start":24,"value":"srk@testroverautomation.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":31,"gherkinStepLine":20,"keywordType":"Context","textWithKeyword":"And I enter password \"Jawan123\"","stepMatchArguments":[{"group":{"start":17,"value":"\"Jawan123\"","children":[{"start":18,"value":"Jawan123","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":32,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"When I click on submit button","stepMatchArguments":[]},{"pwStepLine":33,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"Then I should verify user is not able to login and url contains \"route=account/login\"","stepMatchArguments":[{"group":{"start":59,"value":"\"route=account/login\"","children":[{"start":60,"value":"route=account/login","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":36,"pickleLine":28,"tags":["@login"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given I navigate to \"https://ecommerce-playground.lambdatest.io/\"","isBg":true,"stepMatchArguments":[{"group":{"start":14,"value":"\"https://ecommerce-playground.lambdatest.io/\"","children":[{"start":15,"value":"https://ecommerce-playground.lambdatest.io/","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":37,"gherkinStepLine":18,"keywordType":"Context","textWithKeyword":"And I click on My account","stepMatchArguments":[]},{"pwStepLine":38,"gherkinStepLine":19,"keywordType":"Context","textWithKeyword":"And I enter E-Mail Address \"testerrgreat@123.com\"","stepMatchArguments":[{"group":{"start":23,"value":"\"testerrgreat@123.com\"","children":[{"start":24,"value":"testerrgreat@123.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":39,"gherkinStepLine":20,"keywordType":"Context","textWithKeyword":"And I enter password \"Tesrxzy123\"","stepMatchArguments":[{"group":{"start":17,"value":"\"Tesrxzy123\"","children":[{"start":18,"value":"Tesrxzy123","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":40,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"When I click on submit button","stepMatchArguments":[]},{"pwStepLine":41,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"Then I should verify user is not able to login and url contains \"route=account/login\"","stepMatchArguments":[{"group":{"start":59,"value":"\"route=account/login\"","children":[{"start":60,"value":"route=account/login","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":44,"pickleLine":29,"tags":["@login"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given I navigate to \"https://ecommerce-playground.lambdatest.io/\"","isBg":true,"stepMatchArguments":[{"group":{"start":14,"value":"\"https://ecommerce-playground.lambdatest.io/\"","children":[{"start":15,"value":"https://ecommerce-playground.lambdatest.io/","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":45,"gherkinStepLine":18,"keywordType":"Context","textWithKeyword":"And I click on My account","stepMatchArguments":[]},{"pwStepLine":46,"gherkinStepLine":19,"keywordType":"Context","textWithKeyword":"And I enter E-Mail Address \"srk_jawan@test.com\"","stepMatchArguments":[{"group":{"start":23,"value":"\"srk_jawan@test.com\"","children":[{"start":24,"value":"srk_jawan@test.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":47,"gherkinStepLine":20,"keywordType":"Context","textWithKeyword":"And I enter password \"great123\"","stepMatchArguments":[{"group":{"start":17,"value":"\"great123\"","children":[{"start":18,"value":"great123","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":48,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"When I click on submit button","stepMatchArguments":[]},{"pwStepLine":49,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"Then I should verify user is not able to login and url contains \"route=account/login\"","stepMatchArguments":[{"group":{"start":59,"value":"\"route=account/login\"","children":[{"start":60,"value":"route=account/login","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":52,"pickleLine":30,"tags":["@login"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given I navigate to \"https://ecommerce-playground.lambdatest.io/\"","isBg":true,"stepMatchArguments":[{"group":{"start":14,"value":"\"https://ecommerce-playground.lambdatest.io/\"","children":[{"start":15,"value":"https://ecommerce-playground.lambdatest.io/","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":53,"gherkinStepLine":18,"keywordType":"Context","textWithKeyword":"And I click on My account","stepMatchArguments":[]},{"pwStepLine":54,"gherkinStepLine":19,"keywordType":"Context","textWithKeyword":"And I enter E-Mail Address \"SalmanDabang@gmail.com\"","stepMatchArguments":[{"group":{"start":23,"value":"\"SalmanDabang@gmail.com\"","children":[{"start":24,"value":"SalmanDabang@gmail.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":55,"gherkinStepLine":20,"keywordType":"Context","textWithKeyword":"And I enter password \"test 123\"","stepMatchArguments":[{"group":{"start":17,"value":"\"test 123\"","children":[{"start":18,"value":"test 123","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":56,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"When I click on submit button","stepMatchArguments":[]},{"pwStepLine":57,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"Then I should verify user is not able to login and url contains \"route=account/login\"","stepMatchArguments":[{"group":{"start":59,"value":"\"route=account/login\"","children":[{"start":60,"value":"route=account/login","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end