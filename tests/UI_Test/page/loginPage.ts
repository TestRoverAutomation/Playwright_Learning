import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";


export class LoginPage extends BasePage{
    readonly my_account_Btn: Locator;
    readonly email_box: Locator;
    readonly password_box: Locator;
    readonly submit_btn: Locator;

    constructor(page:Page){
        super(page);
        this.my_account_Btn = page.getByRole('button', { name: 'My account' });
        this.email_box = page.getByPlaceholder('E-Mail Address');
        this.password_box = page.getByPlaceholder('Password');
        this.submit_btn = page.locator("input[value='Login']");
    }

    async navigateToURL(url:string){
        await this.page.goto(url);
    }

    async clickMYAccount(){
        await this.my_account_Btn.click();
    }

    async enterEmailAddress(emailAdd: string){
        await this.email_box.fill(emailAdd);
    }

    async enterPassword(password: string){
        await this.password_box.fill(password);
    }

    async submitForm(){
        await this.submit_btn.click();
    }
}