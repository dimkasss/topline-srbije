import ReactDOMServer from "react-dom/server";
import * as ReactRouterDom from "react-router-dom/server";
import { Main } from "./main";
import { getMeta } from "./utils/seo";

const { StaticRouter } = ReactRouterDom;

export function render(url: string) {
  const head = getMeta(url);
  console.log("@@", head);
  // TODO: создать файлик в utils, который в зав-ти от url и языка из переменной lang выше, будет возвращать мета-данные для нужной странички через переменную head

  const html = ReactDOMServer.renderToString(
    <StaticRouter location={"/" + url}>
      <Main />
    </StaticRouter>
  );
  // console.log("@render", html);
  return { html, head };
}
