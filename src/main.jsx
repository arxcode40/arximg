import { render } from "preact";
import "./index.scss";
import { App } from "./app.jsx";
import AOS from "aos";

render(<App />, document.getElementById("app"));
AOS.init({
    duration: 700,
    ease: "ease-in-out-quart",
    once: true,
});
