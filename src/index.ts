import { Button } from "~/widgets/Button";

const button = new Button("SubmitButton");

button.setText("Submit")
.setVariant("SECONDARY");

console.log({ button });