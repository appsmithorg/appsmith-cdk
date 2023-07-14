import {App} from "~/App";
import { page as LoginPage } from "./Login";
import { page as OrdersPage } from "./Orders";

const app = new App("Inventory management system").setIsPublic(true).setTheme("Classic");

app.addPage(LoginPage, true);
app.addPage(OrdersPage, false);


app.create();