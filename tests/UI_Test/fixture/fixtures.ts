import { test as base, createBdd } from 'playwright-bdd';
import * as Pages from '../page/index';
import { Page } from '@playwright/test';

type Myfixtures = {
  logInPage: Pages.LoginPage;
};

/**
 * 1st:-
 * Imagine you’re making a film.
You have actors (Page Objects), a filmset (Playwright’s page), and a director (createTestFunction)
 who makes sure the right actor walks onto the right stage before filming starts.
** director is const createTestFunction =
Think of this as a director who’s in charge of:
Taking a special kind of actor (Page Class)
Giving them the right set
Sending them to the scene (the test) ready to perform

* 2nd:-
The generic type <T ...>

***<T extends new (page: Page) => InstanceType<T>>

This is the casting rules for the actor you’re hiring:

T is a placeholder for "a class that I will give you later".
It’s not a real class yet — it’s a type variable, waiting to be filled.
extends new (page: Page) → means:
“This class must be creatable with the new keyword, and must take a page as its only parameter.”
=> InstanceType<T> → means:
“When I make an object from that class, I get the correct type of object — 
with all the real methods from that page class.”
Example:
If I pass LoginPage:
T becomes the LoginPage class type (the blueprint).
InstanceType<T> becomes an actual LoginPage object (the actor).

3rd:-
The first arrow function
(PageClass: T) => 
This is like telling the director:
“Here’s the kind of actor I want for this test.”
Example:
If you call:
createTestFunction(LoginPage)
PageClass now represents the LoginPage class (not an object, but the class itself).

4th:-
The returned function
({ page }: { page: Page }, use: (fixture: InstanceType<T>) => Promise<void>) =>
This is what the director gives you back — a function that Playwright will call during your test.
{ page }: { page: Page } → Playwright hands in the stage where the actor will perform.
use(...) → A special Playwright callback that says:
“Here, give me your prepared actor and I’ll hand them to the test.”

5th:-
The final line
use(new PageClass(page));
Here’s the magic moment:
new PageClass(page) → Creates a brand new actor (page object) from the blueprint, putting them on the correct stage.
use(...) → Sends that actor straight into your test code.


 */

const createTestFunction =
  <T extends new (page: Page) => InstanceType<T>>(PageClass: T) =>
  (
    { page }: { page: Page },
    use: (fixture: InstanceType<T>) => Promise<void>
  ) =>
    use(new PageClass(page));

export const test = base.extend<Myfixtures>({
  logInPage: createTestFunction(Pages.LoginPage),
});
