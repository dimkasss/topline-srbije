import { meta } from "./metaData.js";

export const getMeta = (url: string) => {
  let lang = "rs";
  if (url.includes("ru/")) {
    lang = "ru";
    url = url.replace("ru/", "");
  } else if (url.includes("rs/")) {
    url = url.replace("rs/", "");
  }

  let title = "";
  let content = "";
  if (lang == "ru") {
    switch (url) {
      case "teplo-serbii":
        title = meta.home.title.ru;
        content = meta.home.content.ru;
        break;
      case "teplo-serbii/service":
        title = meta.service.title.ru;
        content = meta.service.content.ru;
        break;
      case "teplo-serbii/heating":
        title = meta.heating.title.ru;
        content = meta.heating.content.ru;
        break;
      case "teplo-serbii/gas-boilers":
        title = meta.gasBoilers.title.ru;
        content = meta.gasBoilers.content.ru;
        break;
      case "teplo-serbii/heat-pumps":
        title = meta.heatPumps.title.ru;
        content = meta.heatPumps.content.ru;
        break;
      case "teplo-serbii/air-conditioners":
        title = meta.airConditioners.title.ru;
        content = meta.airConditioners.content.ru;
        break;
    }
  } else if (lang == "rs") {
    switch (url) {
      case "teplo-serbii":
        title = meta.home.title.rs;
        content = meta.home.content.rs;
        break;
      case "teplo-serbii/service":
        title = meta.service.title.rs;
        content = meta.service.content.rs;
        break;
      case "teplo-serbii/heating":
        title = meta.heating.title.rs;
        content = meta.heating.content.rs;
        break;
      case "teplo-serbii/gas-boilers":
        title = meta.gasBoilers.title.rs;
        content = meta.gasBoilers.content.rs;
        break;
      case "teplo-serbii/heat-pumps":
        title = meta.heatPumps.title.rs;
        content = meta.heatPumps.content.rs;
        break;
      case "teplo-serbii/air-conditioners":
        title = meta.airConditioners.title.rs;
        content = meta.airConditioners.content.rs;
        break;
    }
  }

  return `
    <title>${title}</title>
    <meta name="descrption" content="${content}"/>
  `;
};
