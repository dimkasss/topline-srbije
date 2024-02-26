import ReactDOM from "react-dom/client";
import "./i18n.ts";
import "./index.css";
import { Main } from "./main.tsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.hydrateRoot(
  document.getElementById("root")!,
  <BrowserRouter>
    <Main />
  </BrowserRouter>
);
