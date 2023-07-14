import { JsObject } from "~/JsObject";
import { PostgresDatasource } from "~/datasouce/postgres";

const dataUtilsJs = new JsObject("DataUtils", "./DataUtils.ts");
const postgresDatasource = new PostgresDatasource("Mock_DB_V2");

const getOrdersQuery = postgresDatasource
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
  .setExecuteOnLoad(false)
  .setTimeout(10000);

export { dataUtilsJs, getOrdersQuery };
