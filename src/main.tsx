import App from "./App.tsx";
import Navigation from "./components/Navigation.tsx";
import "./i18n.ts";
import "./index.css";

const Main = () => (
  <>
    <Navigation />
    <App />
  </>
);

export { Main };
