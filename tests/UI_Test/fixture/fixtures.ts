import { test as base, createBdd } from "playwright-bdd";
import * as Pages from "../page/index";


type Myfixtures ={
    logInPage: Pages.LoginPage;
}

export const test = base.extend<Myfixtures>({
    logInPage: async({page}, use)=>{
        const loginObj = new Pages.LoginPage(page);
        await use(loginObj);
    }
})

