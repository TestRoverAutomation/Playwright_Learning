import { test as base, createBdd } from "playwright-bdd";
import { LoginPage } from "../page/loginPage";


type Myfixtures ={
    logInPage: LoginPage;
}

export const test = base.extend<Myfixtures>({
    logInPage: async({page}, use)=>{
        const loginObj = new LoginPage(page);
        await use(loginObj);
    }
})

