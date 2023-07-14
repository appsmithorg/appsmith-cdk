import Widget, {WidgetType} from "./Widget";

class Table extends Widget {
    boxShadow = "{{appsmith.theme.boxShadow.appBoxShadow}}"
    borderColor = "#E0DEDE"
    isVisibleDownload: boolean = true
    isSortable = true
    dynamicBindingPathList = [
        {
            "key": "accentColor"
        },
        {
            "key": "borderRadius"
        },
        {
            "key": "boxShadow"
        },
    ]
    needsHeightForContent = true
    delimiter = ","
    defaultSelectedRowIndex = 0
    accentColor = "{{appsmith.theme.colors.primaryColor}}"
    isVisibleFilters = true
    enableClientSideSearch = true
    version = 2.0
    totalRecordsCount = 0
    childStylesheet = {
        "button": {
            "buttonColor": "{{appsmith.theme.colors.primaryColor}}",
            "borderRadius": "{{appsmith.theme.borderRadius.appBorderRadius}}",
            "boxShadow": "none"
        },
        "menuButton": {
            "menuColor": "{{appsmith.theme.colors.primaryColor}}",
            "borderRadius": "{{appsmith.theme.borderRadius.appBorderRadius}}",
            "boxShadow": "none"
        },
        "iconButton": {
            "buttonColor": "{{appsmith.theme.colors.primaryColor}}",
            "borderRadius": "{{appsmith.theme.borderRadius.appBorderRadius}}",
            "boxShadow": "none"
        },
        "editActions": {
            "saveButtonColor": "{{appsmith.theme.colors.primaryColor}}",
            "saveBorderRadius": "{{appsmith.theme.borderRadius.appBorderRadius}}",
            "discardButtonColor": "{{appsmith.theme.colors.primaryColor}}",
            "discardBorderRadius": "{{appsmith.theme.borderRadius.appBorderRadius}}"
        }
    }
    borderRadius = "{{appsmith.theme.borderRadius.appBorderRadius}}"
    columnUpdatedAt = 1.689316917836E12
    defaultSelectedRowIndices = [0.0]
    defaultPageSize = 10
    columnOrder = []
    dynamicPropertyPathList = []
    columnWidthMap = {}
    borderWidth: "1"
    primaryColumns = {}
    canFreezeColumn = true
    textSize = "0.875rem"
    tableData = ""
    label = "Data"
    searchKey: ""
    horizontalAlignment = "LEFT"
    isVisibleSearch = true
    isVisiblePagination = true
    verticalAlignment = "CENTER"
    constructor(name: string) {
        super(name, WidgetType.TABLE);
        this.setHeight(37);
    }

    setTableData(data: string, columnNames?: string[]) {
        this.tableData = data;
        this.dynamicPropertyPathList.push({
            "key": "tableData"
        })
        this.dynamicBindingPathList.push({
            "key": "tableData"
        })
        if(columnNames) {
            columnNames.forEach((column, i) => {
                this.columnOrder = columnNames
                this.primaryColumns[column] = {
                    "allowCellWrapping": false,
                    "allowSameOptionsInNewRow": true,
                    "index": i,
                    "width": 150.0,
                    "originalId": column,
                    "id": column,
                    "alias": column,
                    "horizontalAlignment": "LEFT",
                    "verticalAlignment": "CENTER",
                    "columnType": "text",
                    "textColor": "",
                    "textSize": "0.875rem",
                    "fontStyle": "",
                    "enableFilter": true,
                    "enableSort": true,
                    "isVisible": true,
                    "isDisabled": false,
                    "isCellEditable": false,
                    "isEditable": false,
                    "isCellVisible": true,
                    "isDerived": false,
                    "label": column,
                    "isSaveVisible": true,
                    "isDiscardVisible": true,
                    "computedValue": `{{${this.name}.processedTableData.map((currentRow, currentIndex) => ( currentRow[\"${column}\"]))}}`,
                    "sticky": "",
                    "validation": {},
                    "cellBackground": ""
                }
                this.dynamicBindingPathList.push({
                    "key": `primaryColumns.${column}.computedValue`
                })
            });
        }

    }

}

export default Table;