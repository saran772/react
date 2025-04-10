//its look like html but actually its a another form of react.createElement()

import {createElement as ce} from "react";
import ReactDOM from "react-dom/client";


const head=ce("h1",{id:"hel",key:"lo"},"namaste")
const ind=<h1 id="hel" key="lo">namaste</h1>


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(head);