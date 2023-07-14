import Page from "~/Page";
import {ordersTable} from "~/demo/Orders/widgets";
import {dataUtilsJs} from "~/demo/Orders/actions";
import {header} from "~/demo/Orders/widgets";

const page = new Page("OrdersPage").setSlug("order-page");

page.addWidget(header)
page.addWidget(ordersTable)
page.addJsObject(dataUtilsJs)

export { page };