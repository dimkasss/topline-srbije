import ReactDOMServer from "react-dom/server";
import * as ReactRouterDom from "react-router-dom/server";
import { Main } from "./main";
import { getMeta } from "./utils/seo";

const { StaticRouter } = ReactRouterDom;

export function render(url: string) {
  const head = getMeta(url);
  const html = ReactDOMServer.renderToString(
    <StaticRouter location={"/" + url}>
      <Main />
    </StaticRouter>
  );
  return { html, head };
}
