import {Text} from "~/widgets/Text";
import {Input} from "~/widgets/Input";
import {Button} from "~/widgets/Button";

const header = new Text("header")
header.setText("Login").setTextAlign("CENTER").setFontSize("2rem")

const emailField = new Input("emailField")
emailField
    .setLabel("Email")
    .setInputType("EMAIL")
    .setAlignment("center")
    .setPlaceholderText("Enter your email")
    .setAutoFocus(true)
    .setIsRequired(true)


const passwordField = new Input("passwordField")
passwordField
    .setLabel("Password")
    .setInputType("PASSWORD")
    .setAlignment("center")
    .setPlaceholderText("Enter your password")
    .setIsRequired(true)


const submitButton = new Button("submitButton")
submitButton
    .setVariant("PRIMARY")
    .setPlacement("CENTER")
    .setAlignment("center")
    .setText("Login")
    .setOnClick("{{ LoginUtils.login() }}")


export { header, emailField, passwordField, submitButton }