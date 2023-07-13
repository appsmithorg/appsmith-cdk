
abstract class Appsmith {
    function toJson();
    function setName();
    function getName();
}

class App implements Appsmith{

    List pages;

    function addPage();
    function getSlug();
    function getPages(); //returns list of pages (with name and id)

}

class Page implements Appsmith {
    addWidget();
    addCustomJSFunc();

}

class Widget implements Appsmith {
    String type;
    

    function getType();
    function setType();

}

class Button extends Widget {
    String text;
    Boolean isDisabled;

    function onClick(func );
    function getText();
    function setText();

    function getIsDisabled();
    function setIsDisabled();
}



app = new App();
page = new Page();


widget = new Widget();
page.addWidget(widget);

app.addPage(page)
