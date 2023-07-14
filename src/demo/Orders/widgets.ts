import Table from "~/widgets/Table";
import {Text} from "~/widgets/Text";

const header = new Text("header")
header.setText("Orders").setTextAlign("CENTER").setFontSize("2rem")

const ordersTable = new Table("ordersTable");

ordersTable.setTableData("{{ DataUtils.getData() }}", [
    "id",
    "company_id",
    "location_id",
    "order_date",
    "tax",
    "status",
    "updated",
    "name",
    "phone",
    "email",
    "label",
    "address1"
    ]
)

export { header, ordersTable }