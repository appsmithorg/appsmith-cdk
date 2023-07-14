import Page from "~/Page";
import { header, emailField, passwordField, submitButton  } from "./widgets";
import { loginUtilsJS } from "~/demo/Login/actions";

const page = new Page("Login").setSlug("login");

page.addWidget(header);
page.addWidget(emailField)
page.addWidget(passwordField)
page.addWidget(submitButton)
page.addJsObject(loginUtilsJS)


export { page }