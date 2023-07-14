import { App } from "./App";
import Page from "./Page";
import { PostgresDatasource } from "~/datasouce/postgres";

const app = new App("My App").setIsPublic(true).setTheme("Classic");
const page = new Page("My Page").setSlug("my-page");
app.addPage(page, true);

const postgresDatasource = new PostgresDatasource("Mock_DB_V2");

const posrgresQuery = postgresDatasource
  .createQuery("getOrders")
  .setBody(
    `SELECT po.*, c.name, c.phone, c.email, l.label, l.address1, COUNT(pop.product_id) as total_product_count
  FROM purchase_order po
  JOIN company c ON po.company_id = c.id
  JOIN location l ON po.location_id = l.id
  LEFT JOIN purchase_order_product pop ON po.id = pop.purchase_order_id
  GROUP BY po.id, po.updated, po.company_id, c.name, c.phone, c.email, l.label, l.address1;
  `
  )
  .setExecuteOnLoad(true)
  .setTimeout(10000);

page.addQuery(posrgresQuery);

app.create();
