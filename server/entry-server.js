import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import ReactDOMServer from "react-dom/server";
import * as ReactRouterDom from "react-router-dom/server.mjs";
import { Link, Routes, Route, useLocation } from "react-router-dom";
import { useTranslation, initReactI18next } from "react-i18next";
import { Suspense } from "react";
import { Navbar } from "flowbite-react";
import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
const Section = ({ children, header, smaller, doubledHeader, className }) => {
  return /* @__PURE__ */ jsx("div", { className: `pb-20 text-justify w-4/5 xl:w-[50%] ${className}
      ${header ? "text-2xl !text-center indent-0 font-bold !pb-4 xl:w-3/5" : ""} ${smaller ? "text-xl !text-left indent-10 font-semibold !pb-2" : ""} ${doubledHeader ? "text-3xl font-extrabold !text-center" : ""}
      `, children });
};
const PageWrapper = ({ children }) => {
  const { t } = useTranslation();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return /* @__PURE__ */ jsxs("div", { className: "main flex flex-col justify-center items-center pt-14 w-full", id: "pageTop", children: [
    children,
    /* @__PURE__ */ jsx(Section, { header: true, children: /* @__PURE__ */ jsx("a", { onClick: scrollToTop, className: "text-xl cursor-pointer anchor border-b-2 border-black", children: t("в начало") }) })
  ] });
};
const Main1 = "/teplo-serbii/assets/main-1-Fd-y3YJf.svg";
const Image = ({ img, width, alt }) => {
  return /* @__PURE__ */ jsx("div", { className: "flex justify-center py-4", children: /* @__PURE__ */ jsx("img", { src: img, width, alt }) });
};
const MainPage = () => {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxs(PageWrapper, { children: [
    /* @__PURE__ */ jsx(Section, { doubledHeader: true, className: "text-3xl mt-20 pb-5", children: t("тепло сербии") }),
    /* @__PURE__ */ jsx(Image, { img: Main1, alt: "Тепло Сербии", width: "900px" }),
    /* @__PURE__ */ jsx(Section, { header: true, className: "mt-16", children: t("главная-1") }),
    /* @__PURE__ */ jsxs(Section, { children: [
      /* @__PURE__ */ jsx("p", { children: t("главная-2") }),
      /* @__PURE__ */ jsx("p", { children: t("главная-3") }),
      /* @__PURE__ */ jsx("p", { children: t("главная-4") }),
      /* @__PURE__ */ jsx("p", { children: t("главная-5") })
    ] }),
    /* @__PURE__ */ jsx(Section, { header: true, children: t("главная-6") }),
    /* @__PURE__ */ jsxs(Section, { className: "flex flex-col items-center justify-center *:*:px-10 *:*:py-5 *:*:text-xl *:flex", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("li", { children: t("главная-7") }),
        /* @__PURE__ */ jsx("li", { children: t("главная-8") }),
        /* @__PURE__ */ jsx("li", { children: t("главная-9") })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("li", { children: t("главная-10") }),
        /* @__PURE__ */ jsx("li", { children: t("главная-11") })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Section, { className: "flex justify-center", children: /* @__PURE__ */ jsxs("p", { className: "text-xl *:text-xl", children: [
      t("главная-12"),
      /* @__PURE__ */ jsx(Link, { to: "/teplo-serbii/service/", className: "p-0 underline font-bold", children: t("главная-13") })
    ] }) })
  ] });
};
const NotFoundPage = () => {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxs("div", { className: "main flex flex-col justify-center items-center pt-14 w-full", children: [
    /* @__PURE__ */ jsx(Section, { header: true, children: t("страница не найдена-1") }),
    /* @__PURE__ */ jsx(Link, { to: "/teplo-serbii/", className: "p-3 underline", children: t("страница не найдена-2") })
  ] });
};
const GasBoilers1 = "/teplo-serbii/assets/gas-boilers-1-2ypKwhC6.jpg";
const GasBoilers2 = "/teplo-serbii/assets/sys-otopl-1-7yP7n2mD.jpg";
const GasBoilersPage = () => {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxs(PageWrapper, { children: [
    /* @__PURE__ */ jsx(Section, { doubledHeader: true, children: t("газовые котлы") }),
    /* @__PURE__ */ jsx(Image, { img: GasBoilers1, width: "700px", alt: "газовые котлы" }),
    /* @__PURE__ */ jsx(Section, { header: true, children: t("газ-котл-1") }),
    /* @__PURE__ */ jsxs(Section, { children: [
      /* @__PURE__ */ jsx("p", { children: t("газ-котл-2") }),
      /* @__PURE__ */ jsx("p", { children: t("газ-котл-3") }),
      /* @__PURE__ */ jsx("p", { children: t("газ-котл-4") }),
      /* @__PURE__ */ jsx("p", { children: t("газ-котл-5") }),
      /* @__PURE__ */ jsx("p", { children: t("газ-котл-6") }),
      /* @__PURE__ */ jsx("p", { children: t("газ-котл-7") }),
      /* @__PURE__ */ jsx("p", { children: t("газ-котл-8") }),
      /* @__PURE__ */ jsx("p", { children: t("газ-котл-9") })
    ] }),
    /* @__PURE__ */ jsxs(Section, { children: [
      /* @__PURE__ */ jsx("p", { children: t("газ-котл-10") }),
      /* @__PURE__ */ jsx("p", { children: t("газ-котл-11") })
    ] }),
    /* @__PURE__ */ jsx(Image, { img: GasBoilers2, width: "800px", alt: "газовые котлы" }),
    /* @__PURE__ */ jsx(Section, { header: true, children: t("газ-котл-12") }),
    /* @__PURE__ */ jsx(Section, { children: /* @__PURE__ */ jsxs("p", { children: [
      t("газ-котл-13"),
      " ",
      /* @__PURE__ */ jsx(Link, { className: "underline", to: "/teplo-serbii/service", children: t("газ-котл-14") })
    ] }) })
  ] });
};
const TeplovoyNasos = "/teplo-serbii/assets/teplovoy-nasos-2aExVBHM.jpg";
const TeplovoyNasos2 = "/teplo-serbii/assets/teplovoy-nasos2-hZeqvlxj.jpg";
const TeplovoyNasos3 = "/teplo-serbii/assets/teplovoy-nasos-3-lDS0RAYs.jpg";
const TeplovoyNasos4 = "/teplo-serbii/assets/teplovoy-nasos-4-5iwR1Zes.jpg";
const HeatPumpsPage = () => {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxs(PageWrapper, { children: [
    /* @__PURE__ */ jsx(Section, { doubledHeader: true, children: t("тепловой насос") }),
    /* @__PURE__ */ jsx(Section, { smaller: true, children: t("тепл-нас-1") }),
    /* @__PURE__ */ jsx(Section, { children: /* @__PURE__ */ jsx("p", { children: t("тепл-нас-2") }) }),
    /* @__PURE__ */ jsx(Section, { header: true, children: t("тепл-нас-3") }),
    /* @__PURE__ */ jsxs(Section, { children: [
      /* @__PURE__ */ jsx("p", { children: t("тепл-нас-4") }),
      /* @__PURE__ */ jsx("p", { children: t("тепл-нас-5") }),
      /* @__PURE__ */ jsx("p", { children: t("тепл-нас-6") })
    ] }),
    /* @__PURE__ */ jsx(Section, { header: true, children: t("тепл-нас-7") }),
    /* @__PURE__ */ jsxs(Section, { children: [
      /* @__PURE__ */ jsx("p", { children: t("тепл-нас-8") }),
      /* @__PURE__ */ jsxs("ul", { className: "list", children: [
        /* @__PURE__ */ jsx("li", { children: t("тепл-нас-9") }),
        /* @__PURE__ */ jsx("li", { children: t("тепл-нас-10") })
      ] }),
      /* @__PURE__ */ jsx(
        Image,
        {
          width: "700px",
          img: TeplovoyNasos,
          alt: "Устройство системы отопления с насосом"
        }
      )
    ] }),
    /* @__PURE__ */ jsx(Section, { header: true, children: t("тепл-нас-11") }),
    /* @__PURE__ */ jsx(Section, { children: /* @__PURE__ */ jsx("p", { children: t("тепл-нас-12") }) }),
    /* @__PURE__ */ jsx(Section, { header: true, children: t("тепл-нас-13") }),
    /* @__PURE__ */ jsx(Section, { children: /* @__PURE__ */ jsx("p", { children: t("тепл-нас-14") }) }),
    /* @__PURE__ */ jsx(Section, { header: true, children: t("тепл-нас-15") }),
    /* @__PURE__ */ jsxs(Section, { children: [
      /* @__PURE__ */ jsx("p", { children: t("тепл-нас-16") }),
      /* @__PURE__ */ jsx(
        Image,
        {
          width: "700px",
          img: TeplovoyNasos2,
          alt: "ВТН для холодного климата"
        }
      )
    ] }),
    /* @__PURE__ */ jsx(Section, { header: true, children: t("тепл-нас-17") }),
    /* @__PURE__ */ jsx(
      Image,
      {
        width: "700px",
        img: TeplovoyNasos3,
        alt: "Устройство системы отопления с насосом"
      }
    ),
    /* @__PURE__ */ jsx(Section, { children: t("тепл-нас-18") }),
    /* @__PURE__ */ jsx(Section, { header: true, children: t("тепл-нас-19") }),
    /* @__PURE__ */ jsx(Section, { children: /* @__PURE__ */ jsx("p", { children: t("тепл-нас-20") }) }),
    /* @__PURE__ */ jsx(Section, { header: true, children: t("тепл-нас-21") }),
    /* @__PURE__ */ jsxs(Section, { children: [
      /* @__PURE__ */ jsx("p", { children: t("тепл-нас-22") }),
      /* @__PURE__ */ jsx("p", { children: t("тепл-нас-23") })
    ] }),
    /* @__PURE__ */ jsx(Section, { header: true, children: t("тепл-нас-24") }),
    /* @__PURE__ */ jsxs(Section, { children: [
      /* @__PURE__ */ jsx("p", { children: t("тепл-нас-25") }),
      /* @__PURE__ */ jsx("p", { children: t("тепл-нас-26") })
    ] }),
    /* @__PURE__ */ jsx(Section, { header: true, children: t("тепл-нас-27") }),
    /* @__PURE__ */ jsx(
      Image,
      {
        width: "700px",
        img: TeplovoyNasos4,
        alt: "Устройство системы отопления с насосом"
      }
    )
  ] });
};
const Conditioners1 = "/teplo-serbii/assets/conditioners-1-sKmPt6We.jpg";
const Conditioners2 = "/teplo-serbii/assets/conditioners-2-Viy5o1R8.jpg";
const Conditioners3 = "/teplo-serbii/assets/conditioners-3-FWTKMDP7.jpg";
const AirConditionersPage = () => {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(PageWrapper, { children: [
    /* @__PURE__ */ jsx(Section, { doubledHeader: true, children: /* @__PURE__ */ jsx("h1", { children: t("кондиционеры") }) }),
    /* @__PURE__ */ jsx(Image, { img: Conditioners1, width: "700px", alt: "Кондиционер" }),
    /* @__PURE__ */ jsx(Section, { header: true, children: t("конд-1") }),
    /* @__PURE__ */ jsx(Section, { children: /* @__PURE__ */ jsx("p", { children: t("конд-2") }) }),
    /* @__PURE__ */ jsx(Section, { header: true, children: t("конд-3") }),
    /* @__PURE__ */ jsxs(Section, { children: [
      /* @__PURE__ */ jsx("p", { children: t("конд-4") }),
      /* @__PURE__ */ jsx("p", { children: t("конд-5") }),
      /* @__PURE__ */ jsx("p", { children: t("конд-6") }),
      /* @__PURE__ */ jsx("p", { children: t("конд-7") })
    ] }),
    /* @__PURE__ */ jsx(Image, { img: Conditioners2, width: "700px", alt: "Кондиционер" }),
    /* @__PURE__ */ jsx(Section, { header: true, children: t("конд-8") }),
    /* @__PURE__ */ jsx(Section, { children: /* @__PURE__ */ jsx("p", { children: t("конд-9") }) }),
    /* @__PURE__ */ jsx(Section, { header: true, children: t("конд-10") }),
    /* @__PURE__ */ jsxs(Section, { children: [
      /* @__PURE__ */ jsx("p", { children: t("конд-11") }),
      /* @__PURE__ */ jsx("p", { children: t("конд-12") }),
      /* @__PURE__ */ jsx("p", { children: t("конд-13") }),
      /* @__PURE__ */ jsx("p", { children: t("конд-14") })
    ] }),
    /* @__PURE__ */ jsx(Image, { img: Conditioners3, width: "700px", alt: "Кондиционер" })
  ] }) });
};
const HeatingSystems1 = "/teplo-serbii/assets/sys-otopl-1-7yP7n2mD.jpg";
const HeatingSystems2 = "/teplo-serbii/assets/sys-otopl-2-CLFfqeIb.jpg";
const HeatingSystems3 = "/teplo-serbii/assets/sys-otopl-3-uiIDFR-1.jpg";
const HeatingSystems4 = "/teplo-serbii/assets/sys-otopl-4-ImPjIP7n.jpg";
const HeatingSystems5 = "/teplo-serbii/assets/sys-otopl-5-j_qqVv4c.jpg";
const HeatingSystems6 = "/teplo-serbii/assets/sys-otopl-6-VgCzdAJz.jpg";
const HeatingSystems7 = "/teplo-serbii/assets/sys-otopl-7-IlWHE7l8.jpeg";
const HeatingSystems8_ru = "/teplo-serbii/assets/sys-otopl-8-rs-nUdPHB7U.png";
const HeatingSystems8_rs = "/teplo-serbii/assets/sys-otopl-8-rs-nUdPHB7U.png";
const HeatingSystems9 = "/teplo-serbii/assets/sys-otopl-9-iJQKLRni.png";
const HeatingPage = () => {
  const { t, i18n: i18n2 } = useTranslation();
  return /* @__PURE__ */ jsxs(PageWrapper, { children: [
    /* @__PURE__ */ jsx(Section, { doubledHeader: true, children: t("системы отопления") }),
    /* @__PURE__ */ jsxs(Section, { children: [
      /* @__PURE__ */ jsx("p", { children: t("отопление-1") }),
      /* @__PURE__ */ jsx("p", { children: t("отопление-2") })
    ] }),
    /* @__PURE__ */ jsx(Section, { header: true, children: t("отопление-3") }),
    /* @__PURE__ */ jsxs(Section, { children: [
      /* @__PURE__ */ jsx("p", { children: t("отопление-4") }),
      /* @__PURE__ */ jsx("p", { children: t("отопление-5") }),
      /* @__PURE__ */ jsx("p", { children: t("отопление-6") }),
      /* @__PURE__ */ jsx("p", { children: t("отопление-6-1") }),
      /* @__PURE__ */ jsx("p", { children: t("отопление-6-2") })
    ] }),
    /* @__PURE__ */ jsx(Section, { header: true, children: t("отопление-6-3") }),
    /* @__PURE__ */ jsx(Image, { img: HeatingSystems6, width: "700px", alt: "Радиаторное отопление" }),
    /* @__PURE__ */ jsxs(Section, { children: [
      /* @__PURE__ */ jsx("p", { children: t("отопление-6-4") }),
      /* @__PURE__ */ jsxs("ul", { className: "list", children: [
        /* @__PURE__ */ jsx("li", { children: t("отопление-6-5") }),
        /* @__PURE__ */ jsx("li", { children: t("отопление-6-6") }),
        /* @__PURE__ */ jsx("li", { children: t("отопление-6-7") }),
        /* @__PURE__ */ jsx("li", { children: t("отопление-6-8") }),
        /* @__PURE__ */ jsx("li", { children: t("отопление-6-9") }),
        /* @__PURE__ */ jsx("li", { children: t("отопление-6-10") }),
        /* @__PURE__ */ jsx("li", { children: t("отопление-6-11") })
      ] }),
      /* @__PURE__ */ jsx(
        Image,
        {
          img: HeatingSystems7,
          width: "700px",
          alt: "Радиаторное отопление"
        }
      ),
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("p", { children: t("отопление-6-12") }),
      /* @__PURE__ */ jsxs("ul", { className: "list", children: [
        /* @__PURE__ */ jsx("li", { children: t("отопление-6-13") }),
        /* @__PURE__ */ jsx("li", { children: t("отопление-6-14") }),
        /* @__PURE__ */ jsx("li", { children: t("отопление-6-15") }),
        /* @__PURE__ */ jsx("li", { children: t("отопление-6-16") }),
        /* @__PURE__ */ jsx("li", { children: t("отопление-6-17") }),
        /* @__PURE__ */ jsx("li", { children: t("отопление-6-18") }),
        /* @__PURE__ */ jsx("li", { children: t("отопление-6-19") }),
        /* @__PURE__ */ jsx("li", { children: t("отопление-6-20") })
      ] })
    ] }),
    /* @__PURE__ */ jsx(
      Image,
      {
        img: i18n2.language == "ru" ? HeatingSystems8_ru : HeatingSystems8_rs,
        width: "700px",
        alt: "Теплообмен в комнате"
      }
    ),
    /* @__PURE__ */ jsx(Section, { children: /* @__PURE__ */ jsx("p", { children: t("отопление-6-21") }) }),
    /* @__PURE__ */ jsx(Image, { img: HeatingSystems9, width: "700px", alt: "Теплый пол" }),
    /* @__PURE__ */ jsx(Section, { header: true, children: t("отопление-6-22") }),
    /* @__PURE__ */ jsxs(Section, { children: [
      /* @__PURE__ */ jsx("p", { children: t("отопление-6-23") }),
      /* @__PURE__ */ jsx("p", { children: t("отопление-6-24") }),
      /* @__PURE__ */ jsx("p", { children: t("отопление-6-25") }),
      /* @__PURE__ */ jsx("p", { children: t("отопление-6-26") }),
      /* @__PURE__ */ jsx("p", { children: t("отопление-6-27") }),
      /* @__PURE__ */ jsx("p", { children: t("отопление-6-28") }),
      /* @__PURE__ */ jsx("p", { children: t("отопление-6-29") }),
      /* @__PURE__ */ jsx("p", { children: t("отопление-6-30") }),
      /* @__PURE__ */ jsx("p", { children: t("отопление-6-31") }),
      /* @__PURE__ */ jsx("p", { children: t("отопление-6-32") }),
      /* @__PURE__ */ jsx("p", { children: t("отопление-6-33") })
    ] }),
    /* @__PURE__ */ jsx(Section, { children: /* @__PURE__ */ jsxs("table", { className: "table", children: [
      /* @__PURE__ */ jsx("caption", { children: t("отопление-6-34") }),
      /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsx("th", { className: "w-1/3 text-center", children: t("отопление-6-35") }),
        /* @__PURE__ */ jsx("th", { className: "w-2/3 text-center", children: t("отопление-6-36") })
      ] }) }),
      /* @__PURE__ */ jsxs("tbody", { children: [
        /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("td", { children: "+26 °C" }),
          /* @__PURE__ */ jsx("td", { children: t("отопление-6-37") })
        ] }),
        /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("td", { children: "+27 °C" }),
          /* @__PURE__ */ jsx("td", { children: t("отопление-6-38") })
        ] }),
        /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("td", { children: "+29 °C" }),
          /* @__PURE__ */ jsx("td", { children: t("отопление-6-39") })
        ] }),
        /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("td", { children: "+33 °C" }),
          /* @__PURE__ */ jsx("td", { children: t("отопление-6-40") })
        ] }),
        /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("td", { children: "+35 °C" }),
          /* @__PURE__ */ jsx("td", { children: t("отопление-6-41") })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs(Section, { children: [
      /* @__PURE__ */ jsx("p", { className: "font-bold", children: t("отопление-6-42") }),
      /* @__PURE__ */ jsx("p", { children: t("отопление-6-43") }),
      /* @__PURE__ */ jsx("p", { children: t("отопление-6-44") }),
      /* @__PURE__ */ jsx("p", { className: "font-bold", children: t("отопление-6-45") }),
      /* @__PURE__ */ jsx("p", { children: t("отопление-6-46") }),
      /* @__PURE__ */ jsx("p", { children: t("отопление-6-47") }),
      /* @__PURE__ */ jsx("p", { className: "font-bold", children: t("отопление-6-48") })
    ] }),
    /* @__PURE__ */ jsx(Section, { header: true, children: t("отопление-7") }),
    /* @__PURE__ */ jsxs(Section, { children: [
      /* @__PURE__ */ jsx("p", { children: t("отопление-8") }),
      /* @__PURE__ */ jsx("p", { children: t("отопление-9") })
    ] }),
    /* @__PURE__ */ jsx(Section, { smaller: true, children: t("отопление-10") }),
    /* @__PURE__ */ jsxs(Section, { children: [
      /* @__PURE__ */ jsx("p", { children: t("отопление-11") }),
      /* @__PURE__ */ jsx("p", { children: t("отопление-12") }),
      /* @__PURE__ */ jsxs("ul", { className: "list", children: [
        /* @__PURE__ */ jsx("li", { children: t("отопление-13") }),
        /* @__PURE__ */ jsx("li", { children: t("отопление-14") }),
        /* @__PURE__ */ jsx("li", { children: t("отопление-15") }),
        /* @__PURE__ */ jsx("li", { children: t("отопление-16") })
      ] }),
      t("отопление-17"),
      /* @__PURE__ */ jsx(Image, { width: "700px", img: HeatingSystems1, alt: "Газовое отопление" })
    ] }),
    /* @__PURE__ */ jsx(Section, { smaller: true, children: t("отопление-18") }),
    /* @__PURE__ */ jsxs(Section, { children: [
      /* @__PURE__ */ jsx("p", { children: t("отопление-19") }),
      /* @__PURE__ */ jsxs("ul", { className: "list", children: [
        /* @__PURE__ */ jsx("li", { children: t("отопление-20") }),
        /* @__PURE__ */ jsx("li", { children: t("отопление-21") }),
        /* @__PURE__ */ jsx("li", { children: t("отопление-22") }),
        /* @__PURE__ */ jsx("li", { children: t("отопление-23") })
      ] }),
      /* @__PURE__ */ jsx("p", { children: t("отопление-24") }),
      /* @__PURE__ */ jsx("p", { children: t("отопление-24-1") }),
      /* @__PURE__ */ jsx(
        Image,
        {
          width: "700px",
          img: HeatingSystems2,
          alt: "Твердотопливный котёл"
        }
      )
    ] }),
    /* @__PURE__ */ jsx(Section, { smaller: true, children: t("отопление-25") }),
    /* @__PURE__ */ jsxs(Section, { children: [
      t("отопление-26"),
      /* @__PURE__ */ jsxs("ul", { className: "list", children: [
        /* @__PURE__ */ jsx("li", { children: t("отопление-27") }),
        /* @__PURE__ */ jsx("li", { children: t("отопление-28") })
      ] }),
      t("отопление-29"),
      /* @__PURE__ */ jsx("p", { children: t("отопление-30") }),
      /* @__PURE__ */ jsx(Image, { width: "700px", img: HeatingSystems3, alt: "Электрический котёл" })
    ] }),
    /* @__PURE__ */ jsx(Section, { smaller: true, children: t("отопление-31") }),
    /* @__PURE__ */ jsxs(Section, { children: [
      /* @__PURE__ */ jsx("p", { children: t("отопление-32") }),
      /* @__PURE__ */ jsx("p", { children: t("отопление-33") }),
      /* @__PURE__ */ jsx("p", { children: t("отопление-34") }),
      t("отопление-35"),
      /* @__PURE__ */ jsxs("ul", { className: "list", children: [
        /* @__PURE__ */ jsx("li", { children: t("отопление-36") }),
        /* @__PURE__ */ jsx("li", { children: t("отопление-37") }),
        /* @__PURE__ */ jsx("li", { children: t("отопление-38") }),
        /* @__PURE__ */ jsx("li", { children: t("отопление-39") }),
        /* @__PURE__ */ jsx("li", { children: t("отопление-40") }),
        /* @__PURE__ */ jsx("li", { children: t("отопление-41") }),
        /* @__PURE__ */ jsx("li", { children: t("отопление-42") }),
        /* @__PURE__ */ jsx("li", { children: t("отопление-43") }),
        /* @__PURE__ */ jsx("li", { children: t("отопление-44") })
      ] }),
      /* @__PURE__ */ jsx("p", { children: t("отопление-45") }),
      /* @__PURE__ */ jsx(Image, { width: "700px", img: HeatingSystems4, alt: "Воздушное отопление" })
    ] }),
    /* @__PURE__ */ jsx(Section, { smaller: true, children: t("отопление-46") }),
    /* @__PURE__ */ jsxs(Section, { children: [
      /* @__PURE__ */ jsx("p", { children: t("отопление-47") }),
      /* @__PURE__ */ jsx("p", { children: t("отопление-48") }),
      /* @__PURE__ */ jsx("p", { children: t("отопление-49") }),
      t("отопление-50"),
      /* @__PURE__ */ jsxs("ul", { className: "list", children: [
        /* @__PURE__ */ jsx("li", { children: t("отопление-51") }),
        /* @__PURE__ */ jsx("li", { children: t("отопление-52") }),
        /* @__PURE__ */ jsx("li", { children: t("отопление-53") }),
        /* @__PURE__ */ jsx("li", { children: t("отопление-54") }),
        /* @__PURE__ */ jsx("li", { children: t("отопление-55") }),
        /* @__PURE__ */ jsx("li", { children: t("отопление-56") }),
        /* @__PURE__ */ jsx("li", { children: t("отопление-57") }),
        /* @__PURE__ */ jsx("li", { children: t("отопление-58") }),
        /* @__PURE__ */ jsx("li", { children: t("отопление-59") }),
        /* @__PURE__ */ jsx("li", { children: t("отопление-60") }),
        /* @__PURE__ */ jsx("li", { children: t("отопление-61") })
      ] }),
      t("отопление-62"),
      /* @__PURE__ */ jsx(Image, { width: "700px", img: HeatingSystems5, alt: "Инфракрасный обогрев" })
    ] }),
    /* @__PURE__ */ jsx(Section, { header: true, children: t("отопление-63") }),
    /* @__PURE__ */ jsx(Section, { children: /* @__PURE__ */ jsx("p", { children: t("отопление-64") }) })
  ] });
};
const ExcelFileDownloader = ({
  fileName,
  text
}) => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("a", { href: `src/assets/downloads/${fileName}`, target: "_blank", download: true, children: text }) });
};
const ServicePage = () => {
  const { t, i18n: i18n2 } = useTranslation();
  console.log("@", navigator.language);
  return /* @__PURE__ */ jsxs(PageWrapper, { children: [
    /* @__PURE__ */ jsx(Section, { doubledHeader: true, children: t("услуги") }),
    /* @__PURE__ */ jsxs(Section, { className: "flex flex-col items-center *:p-3 *:underline", children: [
      /* @__PURE__ */ jsx(ExcelFileDownloader, { fileName: "service1.xlsx", text: t("услуги-файл-1") }),
      /* @__PURE__ */ jsx(
        ExcelFileDownloader,
        {
          fileName: `service2-${i18n2.language}.xlsx`,
          text: t("услуги-файл-2")
        }
      )
    ] })
  ] });
};
const App = () => {
  return (
    // <HelmetProvider>
    /* @__PURE__ */ jsx("div", { className: "text-[--main] flex flex-col items-center justify-center", children: /* @__PURE__ */ jsx(Suspense, { fallback: /* @__PURE__ */ jsx("div", { children: "Loading..." }), children: /* @__PURE__ */ jsxs(Routes, { children: [
      /* @__PURE__ */ jsx(Route, { path: "/teplo-serbii/", element: /* @__PURE__ */ jsx(MainPage, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/teplo-serbii/service", element: /* @__PURE__ */ jsx(ServicePage, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/teplo-serbii/heating", element: /* @__PURE__ */ jsx(HeatingPage, {}) }),
      /* @__PURE__ */ jsx(
        Route,
        {
          path: "/teplo-serbii/gas-boilers",
          element: /* @__PURE__ */ jsx(GasBoilersPage, {})
        }
      ),
      /* @__PURE__ */ jsx(Route, { path: "/teplo-serbii/heat-pumps", element: /* @__PURE__ */ jsx(HeatPumpsPage, {}) }),
      /* @__PURE__ */ jsx(
        Route,
        {
          path: "/teplo-serbii/air-conditioners",
          element: /* @__PURE__ */ jsx(AirConditionersPage, {})
        }
      ),
      /* @__PURE__ */ jsx(Route, { path: "*", element: /* @__PURE__ */ jsx(NotFoundPage, {}) })
    ] }) }) })
  );
};
const BoilerLogo = "data:image/svg+xml;base64,PHN2ZyB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIiB2aWV3Qm94PSIwIDAgMTIuNyAxNS44NzUiIHZlcnNpb249IjEuMSIgeD0iMHB4IiB5PSIwcHgiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsLTI4NC4yOTk5OCkiPjxwYXRoIHN0eWxlPSIiIGQ9Im0gMi45NTk4LDI4NC44MjkxNCBhIDAuODE0MTg1OTYsMC44MTQxODU5NiAwIDAgMCAtMC44MTM5LDAuODE0NDIgdiA5LjE5ODkzIGEgMC44MTQxODU5NiwwLjgxNDE4NTk2IDAgMCAwIDAuODEzOSwwLjgxNDQyIGggMS42MDA0IHYgMC44MTM5IGggMC41NDMxIHYgLTAuODEzOSBoIDIuNDkyOSB2IDAuODEzOSBoIDAuNTQzMSB2IC0wLjgxMzkgaCAxLjYwMDQgYSAwLjgxNDE4NTk2LDAuODE0MTg1OTYgMCAwIDAgMC44MTQ0LC0wLjgxNDQyIHYgLTkuMTk4OTMgYSAwLjgxNDE4NTk2LDAuODE0MTg1OTYgMCAwIDAgLTAuODE0NCwtMC44MTQ0MiB6IG0gMCwwLjU0MzEyIGggNi43Nzk5IGEgMC4yNzEzOTUzNSwwLjI3MTM5NTM1IDAgMCAxIDAuMjcxMywwLjI3MTMgdiAxLjI2OTE4IGEgMC4yNzEzOTUzNSwwLjI3MTM5NTM1IDAgMCAxIC0wLjI3MTMsMC4yNzEzIEggMi45NTk4IGEgMC4yNzEzOTUzNSwwLjI3MTM5NTM1IDAgMCAxIC0wLjI3MTMsLTAuMjcxMyB2IC0xLjI2OTE4IGEgMC4yNzEzOTUzNSwwLjI3MTM5NTM1IDAgMCAxIDAuMjcxMywtMC4yNzEzIHogbSAwLDIuMzU0OSBoIDYuNzc5OSBhIDAuMjcxMzk1MzUsMC4yNzEzOTUzNSAwIDAgMSAwLjI3MTMsMC4yNzEzIHYgNi44NDQwMyBhIDAuMjcxMzk1MzUsMC4yNzEzOTUzNSAwIDAgMSAtMC4yNzEzLDAuMjcxMyBIIDIuOTU5OCBhIDAuMjcxMzk1MzUsMC4yNzEzOTUzNSAwIDAgMSAtMC4yNzEzLC0wLjI3MTMgdiAtNi44NDQwMyBhIDAuMjcxMzk1MzUsMC4yNzEzOTUzNSAwIDAgMSAwLjI3MTMsLTAuMjcxMyB6IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9Im5vbmUiLz48cGF0aCBzdHlsZT0iIiBkPSJtIDYuNDAwNywyOTEuNTIzODUgYSAwLjg4OTMwMDEyLDAuODg5MzAwMTIgMCAwIDEgMC4yODI4LC0wLjk1MzY0IDAuMzE3NSwwLjMxNzUgMCAwIDAgMC4wNzgsLTAuMDk1MyAxLjgzNzk5NjMsMS44Mzc5OTYzIDAgMCAwIDAuMTg0MywtMC41MTk4MyAwLjMxNzUsMC4zMTc1IDAgMCAwIC0wLjAzOSwtMC4yMjMwNCA2LjAzMjUsNi4wMzI1IDAgMCAwIC0wLjY2NTUsLTAuOTA3NjUgMC4wMzE3NDk5OCwwLjAzMTc0OTk4IDAgMCAwIC0wLjA1NCwwLjAzMTYgMC43MTQyNTY3OCwwLjcxNDI1Njc4IDAgMCAxIC0wLjE0NywwLjcxNzYyIDUuNzE1LDUuNzE1IDAgMCAwIC0wLjUzMjMsMC42Nzg5NSAwLjU1ODYzNDg1LDAuNTU4NjM0ODUgMCAwIDAgMC4wNDcsMC42ODIyNiAzLjE3NSwzLjE3NSAwIDAgMCAwLjYzNDYsMC41NDYwMSAwLjI5MjE3OTI3LDAuMjkyMTc5MjcgMCAwIDAgMC4yMTA2LDAuMDQzIHoiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0ibm9uZSIvPjxwYXRoIHN0eWxlPSIiIGQ9Im0gNy4wODE1LDI5MC4wNDUxMyBhIDAuMDMxNzQ5OTgsMC4wMzE3NDk5OCAwIDAgMCAtMC4wNTksMC4wMDcgMS45MzMyNDYyLDEuOTMzMjQ2MiAwIDAgMSAtMC4xODgxLDAuNDg3OTIgMC4zMTc1LDAuMzE3NSAwIDAgMSAtMC4wOCwwLjA5NTIgMC43OTQwNTAxMiwwLjc5NDA1MDEyIDAgMCAwIC0wLjI2MzUsMC44NTY1OSAwLjI5MjE3OTI3LDAuMjkyMTc5MjcgMCAwIDAgMC4wMjEsLTAuMDEzIDMuMTc1LDMuMTc1IDAgMCAwIDAuNjA3MywtMC41Mjc4NiAwLjU4NTkwNzQxLDAuNTg1OTA3NDEgMCAwIDAgMC4wOTUsLTAuNjMzOTQgNi4wMzI1LDYuMDMyNSAwIDAgMCAtMC4xMzMxLC0wLjI3MjI1IHoiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0ibm9uZSIvPjxwYXRoIHN0eWxlPSIiIGQ9Im0gNC43Mzk5LDI5My4zOTA2OCBhIDAuMTg5MTcsMC4xODkxNyAwIDAgMCAwLDAuMzc4MzQgaCAzLjIxOTcgYSAwLjE4OTE3LDAuMTg5MTcgMCAwIDAgMCwtMC4zNzgzNCB6IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9Im5vbmUiLz48L2c+PHRleHQgeD0iMCIgeT0iMjcuNyIgZmlsbD0iI2ZmZmZmZiIgZm9udC1zaXplPSI1cHgiIGZvbnQtd2VpZ2h0PSJib2xkIiBmb250LWZhbWlseT0iJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCBBcmlhbC1Vbmljb2RlLCBBcmlhbCwgU2Fucy1zZXJpZiI+Q3JlYXRlZCBieSBQaOG6oW0gVGhhbmggTOG7mWM8L3RleHQ+PHRleHQgeD0iMCIgeT0iMzIuNyIgZmlsbD0iI2ZmZmZmZiIgZm9udC1zaXplPSI1cHgiIGZvbnQtd2VpZ2h0PSJib2xkIiBmb250LWZhbWlseT0iJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCBBcmlhbC1Vbmljb2RlLCBBcmlhbCwgU2Fucy1zZXJpZiI+ZnJvbSB0aGUgTm91biBQcm9qZWN0PC90ZXh0Pjwvc3ZnPg==";
const customNavbarTheme = {
  root: {
    base: "nav px-2 py-2.5 sm:px-4",
    rounded: {
      on: "",
      off: ""
    },
    bordered: {
      on: "border",
      off: ""
    },
    inner: {
      base: "mx-auto flex flex-wrap items-center justify-between",
      fluid: {
        on: "",
        off: "container"
      }
    }
  },
  brand: {
    base: "flex items-center"
  },
  collapse: {
    base: "w-full xl:block xl:w-auto",
    list: "mt-4 flex flex-col xl:mt-0 xl:flex-row xl:space-x-8 xl:text-sm xl:font-medium",
    hidden: {
      on: "hidden",
      off: ""
    }
  },
  link: {
    base: "block py-2 pr-4 pl-3 xl:p-0",
    active: {
      on: "text-[--button]",
      off: "border-gray-100  text-gray-700 xl:border-0 xl:hover:text-[--button]"
    },
    disabled: {
      on: "text-gray-400 hover:cursor-not-allowed",
      off: ""
    }
  },
  toggle: {
    base: "inline-flex items-center rounded-lg p-2 text-sm focus:outline-none dark:hover:bg-gray-700 xl:hidden",
    icon: "h-6 w-6 shrink-0"
  }
};
const Navigation = () => {
  const { t, i18n: i18n2 } = useTranslation();
  const toggleLanguage = () => {
    i18n2.changeLanguage(i18n2.language === "ru" ? "sr" : "ru");
  };
  const location = useLocation();
  return /* @__PURE__ */ jsxs(
    Navbar,
    {
      fluid: true,
      rounded: true,
      className: "h-21 lg:p-5 lg:*:p-3 *:rounded-2xl border-0 border-b-2 border-[--main] drop-shadow-l w-full",
      theme: customNavbarTheme,
      children: [
        /* @__PURE__ */ jsxs(
          Navbar.Brand,
          {
            href: "/teplo-serbii/",
            className: "justify-center items-center self-start",
            children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: BoilerLogo,
                  className: "mt-3 mr-3 h-8 lg:h-12",
                  alt: "Boiler Logo"
                }
              ),
              /* @__PURE__ */ jsx("span", { className: "self-center whitespace-nowrap lg:text-xl font-extrabold dark:text-white", children: t("название") })
            ]
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-row *:px-2 items-center", children: [
          /* @__PURE__ */ jsx(
            Link,
            {
              to: location.pathname,
              onClick: toggleLanguage,
              className: "flex items-center justify-center self-start pt-2 lg:pt-2 lg:pr-8 justify-self-end xl:self-center xl:pt-0",
              children: t("язык")
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "flex flex-row", children: /* @__PURE__ */ jsxs(Navbar.Collapse, { className: "md:*:*:text-lg *:pl-0", children: [
            /* @__PURE__ */ jsx(
              Navbar.Link,
              {
                to: "/teplo-serbii/",
                as: Link,
                active: location.pathname === "/teplo-serbii/",
                children: t("главная")
              }
            ),
            /* @__PURE__ */ jsx(
              Navbar.Link,
              {
                to: "/teplo-serbii/service",
                as: Link,
                active: location.pathname === "/teplo-serbii/service",
                children: t("услуги")
              }
            ),
            /* @__PURE__ */ jsx(
              Navbar.Link,
              {
                to: "/teplo-serbii/heating",
                as: Link,
                active: location.pathname === "/teplo-serbii/heating",
                children: t("отопление")
              }
            ),
            /* @__PURE__ */ jsx(
              Navbar.Link,
              {
                to: "/teplo-serbii/gas-boilers",
                as: Link,
                active: location.pathname === "/teplo-serbii/gas-boilers",
                children: t("газовые котлы")
              }
            ),
            /* @__PURE__ */ jsx(
              Navbar.Link,
              {
                to: "/teplo-serbii/heat-pumps",
                as: Link,
                active: location.pathname === "/teplo-serbii/heat-pumps",
                children: t("тепловые насосы")
              }
            ),
            /* @__PURE__ */ jsx(
              Navbar.Link,
              {
                to: "/teplo-serbii/air-conditioners",
                as: Link,
                active: location.pathname === "/teplo-serbii/air-conditioners",
                children: t("кондиционеры")
              }
            )
          ] }) }),
          /* @__PURE__ */ jsx(Navbar.Toggle, { className: "self-start justify-self-end" })
        ] })
      ]
    }
  );
};
const testoviy$1 = "тестовое сообщение";
const translationRU = {
  testoviy: testoviy$1,
  "в начало": "В начало",
  "название": "Тепло Сербии",
  "главная": "Главная",
  "отопление": "Отопление",
  "газовые котлы": "Газовые котлы",
  "тепловые насосы": "Тепловые насосы",
  "кондиционеры": "Кондиционеры",
  "язык": "RU 🇷🇺",
  "тепло сербии": "ТЕПЛО СЕРБИИ",
  "услуги": "Услуги",
  "в разработке": "Страница находится в разработке...",
  "страница не найдена-1": "Страница не найдена!",
  "страница не найдена-2": "на главную",
  "системы отопления": "Системы отопления: виды, преимущества, недостатки",
  "тепловой насос": "Тепловой насос воздух-вода для дома и бассейна, КПД, принцип, схема отопления",
  "отопление-1": "Каждый мужчина обязан не только построить дом, но и обеспечить в нём тепло. При возможности частное жилище подключить к центральному отоплению системе, проблема обогрева дома решается просто. ",
  "отопление-2": "Если такой возможности нет, хозяину приходится искать альтернативные варианты. Также независимые системы отопления интересуют тех, кто считает централизованное отопление слишком дорогостоящей услугой. Рассмотрим наиболее популярные системы:",
  "отопление-3": "Системы подачи тепла в дом — как выбрать лучший вид",
  "отопление-4": "Как и любая система, отопление имеет свои сильные и слабые стороны. Первый момент, на который нужно обратить внимание — цена топлива и лёгкость приобретения. Некоторое оборудование привлекает ценой, простотой и удобством эксплуатации. Но если в вашем регионе сложно достать топливо, на котором работает оборудование или его цена неоправданно высока, установка системы на нём нецелесообразна.",
  "отопление-5": "Второй момент — возможность установки комбинированных систем. Такие установки экономически выгодны. В этом случае одна установка выполняет роль основной, другая дополнительной.",
  "отопление-6": "Третий момент — финансовый. Оборудование нужно не только купить. Его нужно профессионально установить, смонтировать, запустить и обслуживать. Это все расходы, которые могут отразиться на финансовом положении семьи.",
  "отопление-6-1": "Четвертый – и самый важный момент! Это комфорт и экономичность системы отопления для вашей семьи на долгое время ( если только вы не строите дом на продажу).",
  "отопление-6-2": "Взвесьте все плюсы и минусы и примите правильное решение!",
  "отопление-6-3": "Радиаторное отопление",
  "отопление-6-4": "Радиаторное отопление имеет свои преимущества:",
  "отопление-6-5": "Невысокая стоимость и простота монтажа при наличии слесарных навыков;",
  "отопление-6-6": "Выбор радиаторов невероятно огромен. Бывают: секционные, чугунные, алюминиевые, металлические. Также подразделяются на цельнокорпусные (например, стальные, медные, медно-алюминиевые и др.), бывают излучающие (например, чугунные) и чаще всего встречаются конвекционные;",
  "отопление-6-7": "Трубы также радуют своим ассортиментом: самые доступные из полипропилена, также бывают из меди, металлопластика или нержавейки. Наибольшей популярностью пользуются трубы из стали;",
  "отопление-6-8": "•Сама система радиаторного отопления может быть конвекционная (т.е. радиаторы перемешивают потоки холодного и горячего воздуха) и излучающая (т.е. радиаторы больше работают в диапазоне излучения);",
  "отопление-6-9": "Система может быть энергонезависимой, возможно отключение радиаторов при нужной температуре, что оказывается очень экономично в эксплуатации.",
  "отопление-6-10": "Система может быть очень мобильной, так как можно сделать как вертикальные одно-, двухтрубные, так и горизонтальные одно-, двухтрубные. Также можно сделать и со встречными параллельными потоками, и т.д. — всегда можно использовать комбинированные системы.",
  "отопление-6-11": "Система радиаторного отопления очень хорошо комбинируется с другими системами отопления, часто ее совмещают с системой теплого пола. Также в систему возможно включать и другие приборы, например, конвектор (тот же радиатор, но с принудительным разгоном воздуха благодаря встроенному вентилятору).",
  "отопление-6-12": "Недостатки:",
  "отопление-6-13": "Радиаторное отопление гораздо лучше прогревает потолок, нежели пол. Поэтому без дополнительного обогрева ног обойтись сложно;",
  "отопление-6-14": "Следующий недостаток следует из предыдущего. Теплый воздух под потолком не так актуален, как на высоте человеческого роста, и поэтому примерно треть помещения обогревается впустую;",
  "отопление-6-15": "При монтаже современных европейских систем трубы укрыты в различных конструкциях и стяжках. Без насоса такие системы не работают, так что энергозависимость тоже можно отнести к числу недостатков радиаторной системы отопления;",
  "отопление-6-16": "Не всегда бывает легко соблюсти строго горизонтальный уклон труб, в этом и заключается основной минус системы радиаторного отопления;",
  "отопление-6-17": "Внутренняя коррозия радиаторов при использовании неподготовленной воды, уменьшающая срок их службы и повышающая вероятность неожиданной протечки.",
  "отопление-6-18": "Осаждение глины, накипи, шлама в радиаторе и снижение КПД в процессе эксплуатации системы отопления.",
  "отопление-6-19": "Высокотемпературный режим работы радиаторной системы отопления 40-80 ℃, что приводит к большому расходу энергии (топлива).",
  "отопление-6-20": "Возможность повреждения (заморозки) радиаторов и системы в случае аварии теплогенератора при низких температурах.",
  "отопление-6-21": "Радиаторы создают конвекцию: движение воздуха по всей комнате через батарею. Теплый пол просто излучает тепло снизу вверх.",
  "отопление-6-22": "Электрические и водяные теплые полы",
  "отопление-6-23": "Водяные теплые полы — это гибкий трубопровод, который замурован в полу. По этим трубам непрерывно циркулирует подогретая жидкость;",
  "отопление-6-24": "Существуют также электрические теплые полы: в них нет воды, а подогрев происходит за счет электричества и «напрямую», без котлов и буферных емкостей.",
  "отопление-6-25": "По конструкции выделяют два типа электрических полов:",
  "отопление-6-26": "1. Кабельные. Их кладут в слой плиточного клея или стяжку.",
  "отопление-6-27": "2. Пленочные. Их кладут под напольное покрытие, например под ламинат. Такой пол еще излучает инфракрасные лучи, благодаря чему обогреваются стоящие на полу предметы.",
  "отопление-6-28": "В электрополах также ставят термодатчик и терморегулятор. Они позволяют устанавливать нужную температуру и экономить на электричестве: как только пол прогреется до нужного значения, нагрев выключится.",
  "отопление-6-29": "Электрические теплые полы — более дорогостоящее решение, чем водяные, особенно в эксплуатации. В среднем 10 м² электрического пола потребляют в час 1,5 кВт электроэнергии, а на дом площадью 100 м² может даже не хватить стандартной выделенной для дома электрической мощности в 15 кВт.",
  "отопление-6-30": "Поэтому электрические теплые полы обычно используют локально, как дополнительный отопительный элемент на небольшой площади. Например, в ванной или на лоджии.",
  "отопление-6-31": "Главное преимущество водяной системы перед электрической — ее можно использовать с любым источником отопления. Жидкость в трубах можно подогревать в газовом или электрическом котле, камине с водяным теплообменником, тепловым насосом, солнечными батареями.",
  "отопление-6-32": "Более того, разные источники отопления для водяных теплых полов можно комбинировать, чтобы они работали параллельно. Например, вы используете газовый котел, но решили затопить камин, который имеет водяной теплообменник и встроен в общую систему отопления.",
  "отопление-6-33": "Тогда огонь в каминной топке будет не только выполнять эстетическую функцию, но и подогревать пол, а газовый котел на время отключится. Также в эту систему может быть встроен электрический котел как резервный источник тепла на случай, если с газом что-то случится. ",
  "отопление-6-34": "Максимальные значения температуры на поверхности пола для комфортного пребывания",
  "отопление-6-35": "Максимальная температура",
  "отопление-6-36": "Где",
  "отопление-6-37": "Жилые помещения с длительным пребыванием людей",
  "отопление-6-38": "Если на полу покрытие из натурального дерева, паркета, ламината",
  "отопление-6-39": "Жилые помещения с длительным пребыванием людей, согласно европейским нормам",
  "отопление-6-40": "Для ванных комнат, душевых, бассейнов",
  "отопление-6-41": "Полоса шириной 0,5 м по периметру помещений с временным пребыванием людей",
  "отопление-6-42": "Универсальность",
  "отопление-6-43": "Следующий плюс теплого пола заключается в том, что можно использовать любой источник энергии, любой теплогенератор, какой угодно тип теплоносителя и тип напольного покрытия.",
  "отопление-6-44": "Стоит обратить внимание на единственный нюанс, который касается напольного покрытия – это если мы имеем дело, скажем, с ламинатом, паркетной доской, паркетом или линолеумом, тут нужно обращать внимание на упаковку и внимательно ознакамливаться с указанной на ней информацией, можно или нельзя использовать данный вид напольного покрытия при монтаже системы “теплый пол”.",
  "отопление-6-45": "Здоровье и безопасность",
  "отопление-6-46": "Еще один плюс теплого пола – отсутствует циркуляция пыли благодаря равномерным тепловым потокам, отсутствуют электромагнитные поля по сравнению с электрическими теплыми полами.",
  "отопление-6-47": "Это все обусловлено наличием постоянной циркуляции конвекционных потоков воздуха в помещении, с этими пластами воздуха перемещаются мельчайшие сухие частицы, микроорганизмы, которые могут вызывать аллергические и негативные воздействия на организм человека.",
  "отопление-6-48": "Энергоэффективность",
  "отопление-6-49": "Достаточно немаловажный плюс теплого пола. Во-первых, температура теплоносителя, которую мы подаем в трубы теплого пола, максимально возможная по нормам равна 55°C. На практике этот показатель достигает примерно 35-45 градусов. Соответственно это дает возможность снизить затраты на нагрев данного теплоносителя.",
  "отопление-6-50": "Во-вторых, по причине равномерного распределения тепла в помещении и отсутствия необходимости прогревать верхние слои воздуха, средняя температура в помещении снижается примерно на 2°C, без перемен в ощущениях тепла человеком. Данное снижение средней температуры приводит к 15-20% сбережению электроэнергии на нагрев этого пространства, если мы говорим о помещении со стандартной высотой потолков до 3 метров. Если рассматривать промышленный или спортивный объект с высокими потолками, то эта экономия может достигать 30%, или даже 40%.",
  "отопление-6-51": "Третий момент – вертикальное распределение тепла: отсутствует необходимость подогревать верхние слои воздуха, что минимизирует тепловые потери через верхние части стен и перекрытия.",
  "отопление-6-52": "Все перечисленные плюсы теплого пола, вытекают из физики самого процесса. Существует возможность увеличить энергоэффективность еще на 15-20%, используя различного рода автоматизацию системы, в том числе и погодозависимую автоматику.",
  "отопление-6-53": 'Мы не всегда отдаем себе отчет, во что нам обойдется та или иная концепция отопления. Мы видим стоимость оборудования, согласно спецификации, и думаем, что на этом затраты заканчиваются. Но у этого "айсберга" есть и небольшая скрытая часть, которая в значительной мере превышает его верхнюю часть. Так вот, верхняя часть айсберга символизирует стартовые затраты на оборудование и монтаж. Однако система водяного теплого пола делается не на один год, а на многие десятилетия, поэтому скрытая, "нижняя часть" айсберга показывает затраты на эксплуатацию в течение всего срока работы системы. Мы ежемесячно платим за энергопотребление, поэтому чем энергоэффективней смонтирована система отопления, тем меньше будут составлять расходы за энеропотребление нашего дома.',
  "отопление-7": "Жидкий теплоноситель — самый популярный вид систем",
  "отопление-8": "Система, представляющая собой замкнутый контур, внутри которого есть теплообменник и циркулирует жидкость. Жидкость проходит через теплообменник, тут она нагревается. Затем, проходя по контуру, жидкость остывает, нагревая помещения. Потом жидкость опять возвращается, и весь процесс повторяется снова. По привычке такой вид называется водяным. Но в современных системах часто используют другие составы (антифриз). Поэтому такие контуры получили название жидкостные.",
  "отопление-9": "Такие системы хороши тем, что их можно разводить под индивидуальные проекты и нужды. К примеру — принудительная и гравитационная системы: Принудительная — жидкость движется по контуру под действием насоса; Гравитационная — силой, которая приводит жидкость внутри труб, служит гравитация. Также разводка может идти по одной или двум трубам. В перовом случае горячий носитель и холодный передвигаются по одной и той же трубе. Экономичная, но неэффективная для больших домов разводка. Двухтрубная разделяет холодный и горячий носитель. Она сложнее, но позволяет отапливать любые площади. Выбор разводки влияет на выбор оборудования. Не имеет значения принудительная система или гравитационная, одно- или двухтрубная её основной элемент котёл. Рассмотрим разные их виды:",
  "отопление-10": "1. Газовый котел",
  "отопление-11": "Газ сгорает в специальной камере, нагревает жидкость, которая потом передает тепло в помещения. Котлы бывают разные, например, с турбонадувом. Такое оборудование характеризуется высоким КПД, не нужно оборудовать вентиляцию и дымоотвод. Если камера открытого типа, ей нужен дымоотвод, вентиляция.",
  "отопление-12": "Котёл на газу имеет свои плюсы:",
  "отопление-13": "невысокая с низким ростом цена топлива;",
  "отопление-14": "оборудование довольно эффективно;",
  "отопление-15": "система может быть полностью автоматизирована;",
  "отопление-16": "широкий ассортимент моделей.",
  "отопление-17": "К работе с оборудованием допускаются только сертифицированные специалисты.",
  "отопление-18": "2. Твердотопливный котёл",
  "отопление-19": "По названию можно понять, что для таких котлов используют топливо твёрдого типа (уголь, древесина и т.д.). Модели могут быть простыми (нуждаются в контроле, низкое КПД) или современными (автоматические и с автоматом для подачи топлива, технологии длительного горения). К преимуществам можно отнести:",
  "отопление-20": "конструкция простая, поэтому надёжная и долговечная;",
  "отопление-21": "оборудование недорогое, его можно установить и обслуживать самостоятельно;",
  "отопление-22": "не нужно документального разрешения на установку;",
  "отопление-23": "большой выбор моделей.",
  "отопление-24": "Недостаток — нужно создавать внушительные запасы, которые обязательно необходимо правильно хранить. Твердотопливное оборудование нужно регулярно чистить, оно образуют много сажи, копоти.",
  "отопление-24-1": "Кроме того, требование к низкой влажности древесины для высокого КПД котла и отсутствие конденсата.",
  "отопление-25": "3. Электрические котлы",
  "отопление-26": "Такое оборудование делится на несколько типов:",
  "отопление-27": "ТЭНовые и электродные — в теплоноситель опускается источник, который нагревает жидкость. Это могут быть ТЭНы (трубы) или электроды. При этом вторые более практичны, с лучшим КПД, долговечны;",
  "отопление-28": "Индукционные — имеют два контура — магнитный и тепловой. Их основное преимущество — быстрый нагрев жидкости. Устанавливают такой котёл без разрешения, сделать это можно самостоятельно без дымохода.",
  "отопление-29": "Недостаток — дороговизна и самого оборудования, и энергоносителя.",
  "отопление-30": "Водяные системы привычны и удобны. Но многие хозяева считают, что нужно использовать более передовые и современные технологии.",
  "отопление-31": "4. Воздушное отопление",
  "отопление-32": "Принцип работы довольно простой. Источником тепла становится сам воздух. Он нагревается в теплогенераторе, затем по специальным трубам, которые спрятаны и невидимы для жильцов, воздух направляется в помещения. Там он нагревает помещения. Затем, по законам конвекции, холодные потоки опускаются, где попадают в специальный заборник. Из него опять к генератору и так по кругу. Воздух может двигаться естественным путём или принудительно, с использованием насоса.",
  "отопление-33": "Теплогенераторы представляют собой те же котлы, о которых уже шла речь выше. Они имеют те же положительные и отрицательные стороны.",
  "отопление-34": "Воздух может циркулировать по закрытому контуру, а может постоянно пополнятся массами с улицы. В последнем случае эффективность несколько ниже, но в помещении воздух свежее и приятней.",
  "отопление-35": "Преимущества воздушного обогрева очевидны:",
  "отопление-36": "Отсутствие носителя делает нагрев быстрее, эффективней, экономичней;",
  "отопление-37": "Не протекает, не промерзает;",
  "отопление-38": "Работает при любой температуре внешней среды;",
  "отопление-39": "Совместимо с вентиляцией и кондиционированием;",
  "отопление-40": "Легко автоматизируется;",
  "отопление-41": "Простой монтаж;",
  "отопление-42": "Долговечность;",
  "отопление-43": "Нет труб, радиаторов, которые портят вид помещения и его дизайн;",
  "отопление-44": "Невысокая стоимость.",
  "отопление-45": "Не бывает идеального оборудования и, тем более, отепления. Недостатки воздушных систем в следующем: зимой приходится увеличить мощность генератора, чтобы уравновесить температуры вверху и внизу помещения. Воздушные системы сильно шумят, но разработчики постоянно пытаются решить эту проблему.",
  "отопление-46": "5. Инфракрасный обогрев",
  "отопление-47": "Солнце даёт нам ИК излучение с длинными волнами. Оно очень полезно для здоровья и используется в новейшем отоплении.",
  "отопление-48": "Принцип работы следующий — на нетканую плёнку наносят мастику со специальным составом, включающим карбон. Получается излучатель, который активируется с помощью тока. После ламинирования плёнка готова к использованию.",
  "отопление-49": "Полученный излучатель крепят или на потолке, или на полу. После включения системы по излучателю идёт ток, он активируется, начинает излучать длинные волны. Крупные предметы, техника, предметы мебели, пол, стены нагреваются, так как они не пропускают лучи, а накапливают их, нагревая помещение.",
  "отопление-50": "Преимущества самой современной системы очевидны:",
  "отопление-51": "Оптимальное соотношение температур возле потолка и пола;",
  "отопление-52": "Влажность и состав воздуха сохраняются на исходном уровне;",
  "отопление-53": "Отсутствие сквозняков;",
  "отопление-54": "Тихая, бесшумная работа;",
  "отопление-55": "Автоматизация системы;",
  "отопление-56": "Экономия;",
  "отопление-57": "КПД приближается к 100%;",
  "отопление-58": "Длительный срок работы;",
  "отопление-59": "Не нуждается в техническом обслуживании;",
  "отопление-60": "Компактность;",
  "отопление-61": "Возможность демонтажа и повторного монтажа;",
  "отопление-62": "К недостаткам можно отнести большой расход энергии при низком напряжении, дороговизна оборудования.",
  "отопление-63": "Вывод",
  "отопление-64": "Выбор отопления – это индивидуальный случай, в котором поможет специалист. В частом доме возможна установка любой из вышеописанных систем. Оцените все их достоинства и преимущества, и обязательно подберёте лучший вариант.",
  "главная-1": "Мы заботимся о климате в Вашем доме",
  "главная-2": "Компания Тепло Сербии занимается монтажом, ремонтом и обслуживанием систем кондиционирования и вентиляции, а также систем отопления и горячего водоснабжения. ",
  "главная-3": "Мы применяем современное оборудование и профессиональной командой русских инженеров и монтажников решаем сложные технические задачи, что гарантирует высокое качество работы в кратчайшие сроки.",
  "главная-4": "Также активно участвуем в реализации крупных инженерных проектов, применяем инновационные решения и технологии для повышения эффективности систем кондиционирования и экономии ваших энергоресурсов.",
  "главная-5": "На сегодняшний день мы помогли создать комфортный климат во многих домах Сербии, Черногории и России. Если у Вас в доме холодно и влажно зимой, неоправданно большие счета за отопление, а летом жарко и некомфортно – мы всегда готовы проконсультировать, подобрать оптимальное для Вашего дома/квартиры оборудование и произвести монтаж. ",
  "главная-6": "Наши преимущества:",
  "главная-7": "Большой опыт работы",
  "главная-8": "Гарантии",
  "главная-9": "Высокое качество работ",
  "главная-10": "Профессиональный подход",
  "главная-11": "Европейские стандарты",
  "главная-12": "Ознакомиться со списком предоставляемых услуг можно ",
  "главная-13": "здесь",
  "тепл-нас-1": "Возобновляемый источник энергии",
  "тепл-нас-2": 'Когда счета за электроэнергию начинают расти, большинство из нас задается вопросом, есть ли альтернатива. Использование возобновляемых источников энергии в качестве отопления становится необходимым шагом для домовладельцев, в первую очередь потому, что газ и электричество, получаемые из ископаемых видов топлива, становятся все дороже. Переход на "зеленые" технологии, такие как (ВТН) тепловые насосы воздух-вода, часто не вызывает сомнений у тех, кто желает сократить счета и оставить меньший углеродный след, но так ли они хороши? Как и в любом другом деле, перед покупкой важно взвешенно подойти к вопросу, поэтому давайте рассмотрим достоинства и недостатки ВТН.',
  "тепл-нас-3": "Что такое тепловой насос с воздушным источником тепла?",
  "тепл-нас-4": "Тепловые насосы воздух-вода для отопления дома, это поистине гениальный ход. Вопрос в том, почему, имея такие хорошие характеристики, ТН воздух-вода не установлены в каждом доме?",
  "тепл-нас-5": "Моноблок, размером со стиральную машину, гармонично размещается у внешней стены вашего дома и волшебным образом преобразует холодный наружный воздух в горячую воду и отопление. Он способен преобразовывать атмосферу с отрицательной температурой и подавать горячую воду в дом для дальнейшего использования, а в летние месяцы он может работать как кондиционер. Часто люди используют тепловой насос воздух-вода для бассейна, чтобы нагревать с его помощью воду бассейна.",
  "тепл-нас-6": "Установка теплового насоса воздух-вода занимает всего пару дней, а служат они до 20 лет. Устройство требуют минимального обслуживания, чистить их нужно один раз в год. ВТН способен заменить все преимущества традиционного газового котла, а  делает он это с минимальными затратами электроэнергии, без ущерба для окружающей среды. Нет необходимости покупать топливо, так как он просто не потребляет его.",
  "тепл-нас-7": "Как работает тепловой насос воздух-вода?",
  "тепл-нас-8": "Воздушный тепловой преобразователь работает на 75%  от возобновляемой энергии, извлекаемой из воздуха, и на 25%  от электроэнергии. Существует два основных типа ВТН:",
  "тепл-нас-9": "Тепловой насос системы воздух-вода - это устройство, в котором из тепла атмосферы вырабатывается тепло для теплоносителя, а затем подается в традиционные системы отопления, такие как радиаторы и водяные теплые полы. Поскольку напольное отопление работает при более низкой температуре, около 35 °C, оно считаются идеальной системой для работы теплового насоса;",
  "тепл-нас-10": 'Система "воздух-воздух" генерирует теплый поток воздуха, а затем прокачивает его через вентиляторы, которые распределяют тепло по всему дому.',
  "тепл-нас-11": "Принцип работы теплового насоса воздух-вода",
  "тепл-нас-12": "Принцип работы достаточно прост. Энергия добывается  путем всасывания атмосферного воздуха в теплообменник-испаритель. Воздух используется для нагрева газообразного фреона, подобно тому, как работает холодильник, но в обратном направлении. После того как фреон получил от воздуха низкопотенциальное тепло, температура хладагента повышается за счет сжатия, его осуществляет компрессор. Сжатый, теперь уже нагретый газ конденсируется в промежуточном теплообменнике, который называется конденсатором. После чего  накопленное тепло передается теплоносителю системы отопления.",
  "тепл-нас-13": "Эффективность воздушного теплового насоса",
  "тепл-нас-14": "ВТН эффективны и зимой, и летом, благодаря COP (коэффициенту преобразования). COP теплового насоса - это способ измерения его эффективности путем сравнения потребляемой мощности, необходимой для производства тепла, с количеством тепла на выходе. Показатель COP  корректируется с учетом времени года. Чтобы иметь возможность сравнивать тепловые насосы по тому, насколько сильно на них влияют эти изменения, используется сезонный COP (Seasonal Coefficient of Performance). ВТН получает энергию из окружающего воздуха, но при снижении окружающей температуры снижается и эффективность.",
  "тепл-нас-15": "ВТН для холодного климата",
  "тепл-нас-16": "Важно знать тепловую нагрузку объекта и характеристики теплового преобразователя, чем выше требуется температура подачи в систему отопления дома, тем ниже будет конечный СОР. Даже не глядя на то, что эффективность может снизиться, это не означает, что ВТН не работают в холодную погоду. Известно, что они могут извлекать тепло из воздуха при температуре до -25°C, а  с дополнительным источником, таким как электро-котел, и др.  ВТН работают даже в холодном климате Сибири. Но чтобы получить максимальную отдачу, необходимо убедиться, что дом хорошо теплоизолирован.",
  "тепл-нас-17": "Какой тепловой насос воздух-вода выбрать?",
  "тепл-нас-18": "Так, инверторный тепловой насос воздух-вода работает с COP 4, когда температура наружного воздуха 0°C, а температура подачи теплоносителя 35°C. Это означает, что КПД теплового насоса воздух-вода составляет 400%. То есть, на каждый кВт/ч электрической энергии, потребляемой вентиляторами и компрессором, вырабатывается 4кВт/ч тепла.",
  "тепл-нас-19": "Охлаждение тепловым насосом воздух вода",
  "тепл-нас-20": "Опция реверса (обратной работы) в некоторых моделях означает, что их можно использовать и в качестве кондиционера. Конечно, можно приобрести отдельные сплит-системы кондиционирования, но существуют модели оборудования, которые выполняют обе функции. Главное не забывать, что универсальность любого прибора всегда негативно отражается на его специализации.",
  "тепл-нас-21": "Преимущества ВТН",
  "тепл-нас-22": "В отличие от газового котла, тепловой насос с воздушным источником тепла не производит углерод при работе. Хотя они и потребляют электроэнергию, ВТН могут быть объединены с солнечными фотоэлектрическими панелями для получения чистой электроэнергии.",
  "тепл-нас-23": "Для дома тепловые насосы воздух-вода имеют низкие эксплуатационные расходы, особенно по сравнению с видами топлива, такими как пропан, дизель или прямое электрическое отопление.",
  "тепл-нас-24": "Недостатки воздушных тепловых преобразователей",
  "тепл-нас-25": 'Отопление частного дома тепловым насосом воздух-вода не являются "универсальным" решением и не подходят для каждого дома так же, как газовые котлы. Они идеально подходят для хорошо изолированных, герметичных домов. Для работы ВТН по-прежнему требуется электроэнергия. Это, скорее всего, увеличит ваши счета за электричество, но снизит другие расходы на отопление.',
  "тепл-нас-26": "Вы можете еще больше снизить углеродный след, если переведете все энергопотребление, с ископаемого топлива на солнечную энергию. Установка солнечных панелей на крыше позволяет питать систему ВТН (и весь ваш дом) бесплатной электроэнергией с нулевым уровнем выбросов СО2.",
  "тепл-нас-27": "Схема отопления тепловым насосом воздух вода",
  "газ-котл-1": "Эксплуатация газовых котлов",
  "газ-котл-2": "Для правильной и долговечной работы газового оборудования необходимо выполнить следующие условия:",
  "газ-котл-3": "1. Установка стабилизатора напряжения. Это позволит защитить плату управления котлом от перепадов, бросков напряжения 220в. Выбираем модель стабилизатора от 500 Вт;",
  "газ-котл-4": "2. Установка диэлектрической вставки на газовой трубе. Это защита платы управления котла от блуждающих токов на газовой трубе;",
  "газ-котл-5": "3. Установка газового фильтра - шлам, окалина от сварки, мелкие частицы песка и пыли могут попасть в газовый клапан котла, что приведет к нестабильной работе всего котла;",
  "газ-котл-6": "4. Фильтр на обратке системы отопления. Грязь, окалина в трубах отопления и радиаторах, даже если они новые, не попадет в циркуляционный насос , в теплообменники, 3- ходовой привод, и другие узлы котла.",
  "газ-котл-7": "5. Проверьте наклон дымохода. Если у вас конденсатный котел - наклон в сторону котла, если обычный - в сторону улицы (конденсат, образующийся в дымоходе, стекает в котел, разрушает теплообменник и заливает контроллер управления).",
  "газ-котл-8": "6. Двухконтурный котел - большой расход газа и высокий износ деталей котла. При открытии крана горячей воды котел переходит в режим максимальной мощности - через некоторое время начинает бежать теплая вода и помыв, вы закрываете кран - котел выключается. Посчитайте, сколько включений происходит за один день в семье? Для экономной и долговечной работы лучше установить одноконтурный котел с бойлером косвенного нагрева или доработать вашу схему - двухконтурный котел и электронагревательный бойлер. Это избавит вас от большого расхода газа и разнотемпературной воды в душе;",
  "газ-котл-9": '7. Водоподготовка для подпитки котла и ГВС. Обратите внимание на накипь в вашем чайнике! Качество воды отражается не только на вашем здоровье, но и сроке жизни вашего котла. Накипь образуется при температуре 53°, и если вы часто "подпитываете" котел, то это приведет к выходу из строя первичного теплообменника.',
  "газ-котл-10": "То же самое происходит с вторичным теплообменником. Необходимо установить на вход в котел холодной воды полифосфатный или электромагнитный фильтр. Также можно подключить к этой магистрали стиральную и посудомоечную машину.",
  "газ-котл-11": "А у вас это установлено?",
  "газ-котл-12": "Как экономить газ при работе котла?",
  "газ-котл-13": "По этим и другим интересующим Вас вопросам можете проконсультироваться ",
  "газ-котл-14": "с нашими специалистами.",
  "конд-1": "Сервисное обслуживание сплит-систем",
  "конд-2": "Сервисное обслуживание кондиционеров — это комплекс работ, которые не связаны с заменой основных узлов и комплектующих. Наша компания оказывает все виды услуг по сервисному обслуживанию кондиционеров практически всех моделей и производителей. Специалисты нашей компании проводят полную диагностику, замеряют давление хладагента, выполняют дозаправку, полностью очищают внутренний и внешний блоки от грязи и пыли. При обнаружении каких-либо поломок мы обязательно акцентируем внимание заказчика и устраняем все неисправности после полного согласования объема работ. К техническому обслуживанию мы приступаем после полной комплексной диагностики кондиционера и точного выяснения его технического состояния. Также вы можете заказать разовое техническое обслуживание в случае каких-либо нарушений в работе сплит-системы.",
  "конд-3": "Ремонт кондиционеров",
  "конд-4": "Качественный ремонт кондиционера возможен только после проведения его полной диагностики. Именно так выявляются сбои в работе. Это позволяет не только отремонтировать уже вышедшую из строя технику, но и устранить проблемы, способные привести к поломкам в дальнейшем. На запланированную диагностику и своевременный ремонт финансовые затраты будут ниже, чем если оборудование полностью нужно будет заменить.",
  "конд-5": 'Компания "Тепло Сербии" оказывает услуги по ремонту кондиционеров и различных сплит-систем. Квалифицированные специалисты компании способны устранить сложные поломки кондиционеров бытового и производственного типа. Предлагаемый комплекс услуг включает в себя работы с любыми кондиционерами, в том числе потолочного, двухзонного, секционного и кассетного типа.',
  "конд-6": "Современные кондиционеры являются сложной техникой, и их ремонт требует определенных знаний и опыта. Для выполнения ремонта нужны профильные специалисты, способные провести комплексное обследование и устранение неполадок, чаще всего возникающих из-за неправильной эксплуатации и несвоевременно проведенных профилактических мероприятий.",
  "конд-7": "«Тепло Сербии» окажет профессиональную помощь в ремонте климатической техники любой сложности!",
  "конд-8": "Установка кондиционера",
  "конд-9": "Выбор климатической сплит-системы необходимо осуществлять при учете определенных факторов, с целью подбора наиболее оптимальной по мощности модели и грамотного выполнения установки кондиционера. Обратившись к специалистам нашей компании, вы гарантируете себе правильное выполнение монтажа наружного и внутреннего блоков. Самостоятельное произведение крепления системы грозит полным выходом из строя установки и дополнительными финансовыми растратами.",
  "конд-10": "Установка кондиционеров в домах, квартирах, офисах и производственных помещениях",
  "конд-11": 'Как отмечают специалисты компании "Тепло Сербии", грамотная установка климатического оборудования гарантирует его дальнейшее эффективное функционирование, длительность эксплуатационного срока, невозможность утечки фреона.',
  "конд-12": "Мы специализируемся на установке кондиционеров различных марок и типов сплит-систем. Профессионализм сотрудников, грамотный подбор материала и инструментов позволяют нам выполнять работу быстро и качественно. При этом клиенту гарантируется, что техника будет установлена согласно всем требованиям.",
  "конд-13": "Если Вам нужен монтаж кондиционера, просто позвоните по телефону на сайте. Весной и осенью самое лучшее время для установки и сервиса кондиционера. Летом зачастую все хорошие специалисты заняты.",
  "конд-14": "Предлагаем подготовить Ваш кондиционер к летнему сезону!",
  "услуги-файл-1": "Первая часть списка работ",
  "услуги-файл-2": "(RU) Вторая часть списка работ",
  "услуги-1": 'Компания "Тепло Сербии" осуществляет профессиональный монтаж,  ремонт и сервис кондиционеров, систем отопления, тепловых насосов и газовых котлов в Сербии.  Большой опыт. Делаем качественно, быстро и по доступным ценам.'
};
const testoviy = "тест порука";
const translationSR = {
  testoviy,
  "в начало": "До почетка",
  "название": "Топлина Србије",
  "главная": "Почетна",
  "отопление": "Грејање",
  "газовые котлы": "Гасни котлови",
  "тепловые насосы": "Топлотне пумпе",
  "кондиционеры": "Клима уређаји",
  "язык": "RS 🇷🇸",
  "тепло сербии": "ТОПЛИНЕ СРБИЈЕ",
  "услуги": "Услуге",
  "в разработке": "Страница је у изради...",
  "страница не найдена-1": "Страница није пронађена!",
  "страница не найдена-2": "до главног",
  "системы отопления": "Системи грејања: врсте, предности, мане",
  "тепловой насос": "Топлотна пумпа ваздух-вода за дом и базен, ефикасност, принцип, шема грејања",
  "отопление-1": "Сваки човек није само дужан да изгради кућу, већ и да у њој обезбеди топлину. Ако је могуће повезати приватну кућу на систем централног грејања, проблем грејања куће се лако решава.",
  "отопление-2": "Ако то није могуће, власник мора тражити алтернативне опције. Такође, независни системи грејања су од интереса за оне који сматрају да је централизовано грејање прескупа услуга. Хајде да размотримо све системе: течност, воду, инфрацрвено.",
  "отопление-3": "Системи за грејање куће - како одабрати најбољи тип",
  "отопление-4": "Као и сваки систем, грејање има своје предности и слабости. Прва тачка на коју треба да обратите пажњу је цена горива и лакоћа куповине. Нека опрема је атрактивна због своје цене, једноставности и лакоће употребе. Али ако је у вашем региону тешко набавити гориво на којем ради опрема или је његова цена неоправдано висока, инсталирање система на њему није практично.",
  "отопление-5": "Друга тачка је могућност уградње комбинованих система. Такве инсталације су економски исплативе. У овом случају, једна инсталација служи као главна, а друга као додатна.",
  "отопление-6": "Трећа тачка је финансијска. Опрема не само да се мора купити. Мора бити професионално инсталиран, монтиран, пуштен у рад и одржаван. Све су то трошкови који могу утицати на материјално стање породице.",
  "отопление-6-1": "Четврта и најважнија тачка! Ово је удобност и ефикасност система грејања за вашу породицу дуго времена (осим ако не градите кућу на продају).",
  "отопление-6-2": "Одмерите предности и недостатке и донесите праву одлуку!",
  "отопление-6-3": "Радијаторско грејање",
  "отопление-6-4": "Радијаторско грејање има своје предности:",
  "отопление-6-5": "Ниска цена и лакоћа уградње ако имате водоинсталатерске вештине",
  "отопление-6-6": "Избор радијатора је невероватно огроман. Постоје: пресјек, ливено гвожђе, алуминијум, метал. Такође се деле на чврста тела (на пример, челик, бакар, бакар-алуминијум итд.), Постоје зрачење (на пример, ливено гвожђе) и, најчешће, конвекција;",
  "отопление-6-7": "Цеви такође одушевљавају својим асортиманом: најповољније су од полипропилена, али долазе и од бакра, метал-пластике или нерђајућег челика. Најпопуларније су челичне цеви;",
  "отопление-6-8": "Сам систем грејања радијатора може бити конвекцијски (тј. радијатори мешају токове хладног и топлог ваздуха) и радијаторски (тј. радијатори раде више у опсегу зрачења);",
  "отопление-6-9": "Систем може бити неиспарљив, могуће је искључити радијаторе на жељеној температури, што се испоставља веома економично у раду.",
  "отопление-6-10": "Систем може бити веома мобилан, јер је могуће направити и вертикалне једноцевне и двоцевне и хоризонталне једноцевне и двоцевне. То можете урадити и са контра паралелним токовима итд. - Увек можете користити комбиноване системе.",
  "отопление-6-11": "Систем радијаторског грејања се одлично комбинује са другим системима грејања, често се комбинује са системима подног грејања. Такође је могуће укључити и друге уређаје у систем, на пример, конвектор (исти радијатор, али са принудним убрзањем ваздуха захваљујући уграђеном вентилатору).",
  "отопление-6-12": "Недостаци:",
  "отопление-6-13": "Радијаторско грејање загрева плафон много боље од пода. Због тога је тешко учинити без додатног загревања стопала;",
  "отопление-6-14": "Следећи недостатак следи из претходног. Топли ваздух у близини плафона није толико релевантан као на људској висини, па се око трећине просторије загрева узалуд;",
  "отопление-6-15": "Приликом уградње савремених европских система, цеви су прекривене различитим структурама и везама. Без пумпе, такви системи не раде, тако да се енергетска зависност такође може сматрати једним од недостатака радијаторског система грејања;",
  "отопление-6-16": "Није увек лако одржавати стриктно хоризонтални нагиб цеви, ово је главни недостатак система грејања радијатора;",
  "отопление-6-17": "Унутрашња корозија радијатора када се користи необрађена вода, смањује њихов радни век и повећава вероватноћу неочекиваног цурења.",
  "отопление-6-18": "Таложење глине, каменца, муља у радијатору и смањење ефикасности током рада система грејања.",
  "отопление-6-19": "Високотемпературни рад радијаторског система грејања је 40-80 ℃, што доводи до велике потрошње енергије (горива).",
  "отопление-6-20": "Могућност оштећења (смрзавања) радијатора и система у случају квара генератора топлоте на ниским температурама.",
  "отопление-6-21": "Радијатори стварају конвекцију: кретање ваздуха кроз просторију кроз радијатор. Топли под једноставно зрачи топлоту одоздо према горе.",
  "отопление-6-22": "Грејани подови на струју и воду",
  "отопление-6-23": "Подови са грејањем воде су флексибилни цевовод који је утиснут у под. Загрејана течност непрекидно циркулише кроз ове цеви;",
  "отопление-6-24": "Постоје и електрични подови са грејањем: не садрже воду, а грејање се врши на струју и „директно“, без бојлера или тампон резервоара.",
  "отопление-6-25": "По дизајну, постоје две врсте електричних подова:",
  "отопление-6-26": "1. Кабл. Постављају се у слој лепка за плочице или кошуљице.",
  "отопление-6-27": "2. Филмски грејани подови. Постављају се испод пода, као што је ламинат. Такав под такође емитује инфрацрвене зраке, због чега се загревају предмети који стоје на поду.",
  "отопление-6-28": "Електрични подови су такође опремљени сензором температуре и термостатом. Они вам омогућавају да подесите жељену температуру и уштедите електричну енергију: чим се под загреје до жељене вредности, грејање се искључује.",
  "отопление-6-29": "Електрични грејани подови су скупље решење од водених, посебно за рад. У просеку, 10 м² електричног пода троши 1,5 кВ електричне енергије на сат, а кућа површине 100 м² можда неће имати довољно ни стандардне електричне енергије која је додељена за дом од 15 кВ.",
  "отопление-6-30": "Због тога се електрични подови са грејањем обично користе локално, као додатни грејни елемент на малој површини. На пример, у купатилу или на лођи.",
  "отопление-6-31": "Главна предност водоводног система у односу на електрични је то што се може користити са било којим извором грејања. Течност у цевима може се загревати у гасном или електричном котлу, камину са измењивачем топлоте воде, топлотној пумпи или соларним панелима.",
  "отопление-6-32": "Штавише, различити извори грејања за подове са воденим грејањем могу се комбиновати тако да раде паралелно. На пример, користите гасни котао, али одлучите да запалите камин који има водени измењивач топлоте и уграђен је у укупан систем грејања.",
  "отопление-6-33": "Тада ватра у камину неће угасити естетску функцију, већ ће и загрејати под и биће искључена на неко време. Дакле, електрични бојлер се може уградити у овај систем као резервни извор топлоте на сат времена ако се нешто деси са гасом.",
  "отопление-6-34": "Максималне вредности температуре на површини пода за угодан боравак",
  "отопление-6-35": "Максимална температура",
  "отопление-6-36": "Где",
  "отопление-6-37": "Стамбене просторије са дуготрајним боравком људи",
  "отопление-6-38": "Ако је под обложен природним дрветом, паркетом, ламинатом",
  "отопление-6-39": "Стамбени простор са дуготрајним боравком људи, по европским стандардима",
  "отопление-6-40": "За купатила, тушеве, базене",
  "отопление-6-41": "Трака ширине 0,5 м по ободу просторија са привременим коришћењем",
  "отопление-6-42": "Свестраност",
  "отопление-6-43": "Следећа предност подног грејања је што можете користити било који извор енергије, било који генератор топлоте, било коју врсту расхладне течности и врсту подне облоге.",
  "отопление-6-44": "Вриједно је обратити пажњу на једину нијансу која се тиче подних облога - ако се ради о, рецимо, ламинату, паркетним плочама, паркету или линолеуму, овдје морате обратити пажњу на паковање и пажљиво прочитати информације наведене на њему, било да може или не може користити ову врсту подне облоге приликом уградње система „топлог пода“.",
  "отопление-6-45": "Здравље и безбедност",
  "отопление-6-46": "Још једна предност грејних подова је у томе што нема циркулације прашине због равномерних токова топлоте и нема електромагнетних поља у поређењу са електричним грејаним подовима.",
  "отопление-6-47": "То је све због присуства константне циркулације конвекцијских токова ваздуха у просторији, са овим слојевима ваздуха крећу се ситне суве честице и микроорганизми који могу изазвати алергијске и негативне ефекте на људски организам.",
  "отопление-6-48": "Енергетска ефикасност",
  "отопление-6-49": "Прилично важан плус грејаних подова. Прво, температура расхладне течности коју испоручујемо у цеви за подно грејање, максимална могућа по стандардима је 55°Ц. У пракси, ова цифра достиже приближно 35-45 степени. Сходно томе, ово омогућава смањење трошкова загревања ове расхладне течности.",
  "отопление-6-50": "Друго, због равномерне дистрибуције топлоте у просторији и одсуства потребе за загревањем горњих слојева ваздуха, просечна температура у просторији се смањује за око 2°Ц, без промене осећаја топлоте код особе. Ово смањење просечне температуре доводи до 15-20% уштеде енергије за загревање овог простора, ако говоримо о просторији са стандардном висином плафона до 3 метра. Ако узмемо у обзир индустријски или спортски објекат са високим плафонима, онда ове уштеде могу достићи 30%, па чак и 40%.",
  "отопление-6-51": "Трећа тачка је вертикална дистрибуција топлоте: нема потребе за загревањем горњих слојева ваздуха, што минимизира губитак топлоте кроз горње делове зидова и плафона.",
  "отопление-6-52": "Све наведене предности грејних подова произилазе из физике самог процеса. Могуће је повећати енергетску ефикасност за још 15-20% коришћењем различитих врста аутоматизације система, укључујући аутоматизацију зависну од временских прилика.",
  "отопление-6-53": "Нисмо увек свесни колико ће нас коштати овај или онај концепт грејања. Видимо цену опреме, према спецификацији, и мислимо да се трошкови ту завршавају. Али овај „ледени бријег“ такође има мали скривени део, који знатно премашује његов горњи део. Дакле, врх леденог брега симболизује почетне трошкове за опрему и монтажу. Међутим, систем воденог грејања се не гради годину дана, већ деценијама, тако да скривени, „доњи део“ леденог брега показује трошкове рада током целог века трајања система. Потрошња енергије плаћамо месечно, тако да што је енергетски ефикаснији систем грејања, то ће бити нижи трошкови потрошње енергије нашег дома.",
  "отопление-7": "Течност за хлађење је најпопуларнији тип система",
  "отопление-8": "Систем који је затворена петља, унутар којег се налази измењивач топлоте и течност циркулише. Течност пролази кроз измењивач топлоте, где се загрева. Затим, пролазећи кроз коло, течност се хлади, загревајући просторију. Затим се течност поново враћа, и цео процес се понавља. Из навике, ова врста се зове водена. Али у савременим системима често се користе друга једињења (антифриз). Стога се таква кола називају течним.",
  "отопление-9": "Добра ствар код оваквих система је што се могу прилагодити индивидуалним пројектима и потребама. На пример, принудни и гравитациони системи: Принудни - течност се креће дуж контуре под дејством пумпе; Гравитациона - сила која покреће течност унутар цеви је гравитација. Такође, ожичење може проћи кроз једну или две цеви. У првом случају, врући и хладни носач се крећу кроз исту цев. Економичан, али неефикасан за велике куће. Двоцевни систем раздваја хладне и топле медије. То је компликованије, али вам омогућава да загрејете било које подручје. Избор ожичења утиче на избор опреме. Није битно да ли је систем принудни или гравитациони, једноцевни или двоцевни, његов главни елемент је котао. Погледајмо њихове различите врсте:",
  "отопление-10": "1. Гасни котао",
  "отопление-11": "Гас гори у посебној комори, загрева течност, која затим преноси топлоту у просторије. Постоје различити котлови, на пример, са турбо пуњењем. Такву опрему карактерише висока ефикасност, нема потребе за опремањем вентилације или димњака. Ако је комора отворена, потребан јој је димњак и вентилација.",
  "отопление-12": "Гасни котао има своје предности:",
  "отопление-13": "ниска цена горива са ниским растом;",
  "отопление-14": "опрема је прилично ефикасна;",
  "отопление-15": "систем може бити потпуно аутоматизован;",
  "отопление-16": "широк спектар модела.",
  "отопление-17": "Само сертификовани стручњаци могу да раде са опремом.",
  "отопление-18": "2. Котао на чврсто гориво",
  "отопление-19": "По имену можете разумети да такви котлови користе чврсто гориво (угаљ, дрво, итд.). Модели могу бити једноставни (потребна је контрола, ниска ефикасност) или модерни (аутоматски и са аутоматским доводом горива, технологије дугог сагоревања). Предности укључују:",
  "отопление-20": "дизајн је једноставан, стога поуздан и издржљив;",
  "отопление-21": "опрема је јефтина, можете је сами инсталирати и одржавати;",
  "отопление-22": "није потребна документарна дозвола за инсталацију;",
  "отопление-23": "велики избор модела.",
  "отопление-24": "Недостатак је што морате створити импресивне резерве, које се морају правилно складиштити. Опрему на чврсто гориво треба редовно чистити, производи много чађи и чађи.",
  "отопление-24-1": "Поред тога, захтев за ниским садржајем влаге у дрвету за постизање високе ефикасности котла и одсуства кондензације.",
  "отопление-25": "3. Електрични котлови",
  "отопление-26": "Таква опрема је подељена на неколико типова:",
  "отопление-27": "Грејни елемент и електрода - извор се спушта у расхладну течност, која загрева течност. То могу бити грејни елементи (цеви) или електроде. Истовремено, ови други су практичнији, имају бољу ефикасност и издржљиви су;",
  "отопление-28": "Индукција - имају два кола - магнетна и термичка. Њихова главна предност је брзо загревање течности. Такав котао постављају без дозволе, можете то учинити сами без димњака.",
  "отопление-29": "Недостатак је висока цена и саме опреме и енергетског носача.",
  "отопление-30": "Системи за воду су познати и погодни. Али многи власници верују да је неопходно користити напредније и модерније технологије.",
  "отопление-31": "4. Грејање ваздуха",
  "отопление-32": "Принцип рада је прилично једноставан. Извор топлоте је сам ваздух. Загрева се у генератору топлоте, затим се ваздух усмерава у просторије кроз посебне цеви које су скривене и невидљиве за станаре. Тамо греје собе. Затим, према законима конвекције, хладне струје се спуштају, где падају у посебан усис. Одатле опет до генератора и тако у круг. Ваздух се може кретати природно или насилно помоћу пумпе.",
  "отопление-33": "Генератори топлоте су исти котлови о којима је већ било речи. Имају исте позитивне и негативне стране.",
  "отопление-34": "Ваздух може да циркулише у затвореном кругу, или се може стално допуњавати масама са улице. У другом случају, ефикасност је нешто нижа, али је ваздух у просторији свежији и пријатнији.",
  "отопление-35": "Предности грејања ваздуха су очигледне:",
  "отопление-36": "Одсуство блока чини грејање бржим, ефикаснијим и економичнијим;",
  "отопление-37": "Не цури, не замрзава;",
  "отопление-38": "Ради на било којој температури околине;",
  "отопление-39": "Компатибилан са вентилацијом и климатизацијом;",
  "отопление-40": "Лако аутоматизовано;",
  "отопление-41": "Једноставна инсталација;",
  "отопление-42": "Дурабилити;",
  "отопление-43": "Нема цеви или радијатора који кваре изглед просторије и њен дизајн;",
  "отопление-44": "Ниска цена.",
  "отопление-45": "Не постоји савршена опрема, а још мање грејање. Недостаци ваздушних система су следећи: зими морате повећати снагу генератора да бисте уравнотежили температуре на врху и на дну просторије. Ваздушни системи праве велику буку, али програмери стално покушавају да реше овај проблем.",
  "отопление-46": "5. Инфрацрвено грејање",
  "отопление-47": "Сунце нам даје ИЦ зрачење дугим таласима. Веома је здрав и користи се у савременом грејању.",
  "отопление-48": "Принцип рада је следећи: на неткани филм се наноси мастика са посебним саставом, укључујући угљеник. Резултат је емитер који се активира струјом. Након ламинације, филм је спреман за употребу.",
  "отопление-49": "Добијени емитер се монтира или на плафон или на под. Након укључивања система, струја тече кроз емитер, он се активира и почиње да емитује дуге таласе. Велики предмети, апарати, комади намештаја, подови, зидови се загревају, јер не пропуштају зраке, већ их акумулирају, загревајући просторију.",
  "отопление-50": "Предности најсавременијег система су очигледне:",
  "отопление-51": "Оптимални однос температуре у близини плафона и пода;",
  "отопление-52": "Влажност и састав ваздуха се одржавају на првобитном нивоу;",
  "отопление-53": "Нема јаког ветра;",
  "отопление-54": "Тих, нечујан рад;",
  "отопление-55": "Аутоматизација система;",
  "отопление-56": "Уштеда;",
  "отопление-57": "Ефикасност се приближава 100%;",
  "отопление-58": "Дуг радни век;",
  "отопление-59": "Не захтева одржавање;",
  "отопление-60": "Цомпацтнесс;",
  "отопление-61": "Могућност демонтаже и поновне уградње;",
  "отопление-62": "Недостаци укључују високу потрошњу енергије при ниском напону и високу цену опреме.",
  "отопление-63": "Закључак",
  "отопление-64": "Избор грејања је индивидуалан случај, у којем ће специјалиста помоћи. У приватној кући могуће је инсталирати било који од горе наведених система. Процените све њихове предности и обавезно изаберите најбољу опцију.",
  "главная-1": "Ми бринемо о клими у вашем дому",
  "главная-2": "Компанија Тепло Србија бави се монтажом, поправком и одржавањем система климатизације и вентилације, као и система за грејање и топлу воду.",
  "главная-3": "Користимо савремену опрему и професионални тим инжењера и инсталатера решавају сложене техничке проблеме, што гарантује висок квалитет рада у најкраћем могућем року.",
  "главная-4": "Такође активно учествујемо у реализацији великих инжењерских пројеката, користећи иновативна решења и технологије за повећање ефикасности система климатизације и уштеду ваших енергетских ресурса.",
  "главная-5": "До данас смо помогли да се створи пријатна клима у многим домовима у Србији, Црној Гори и Русији. Уколико је у вашем дому зими хладно и влажно, неоправдано високи рачуни за грејање, а лети вруће и неудобно, увек смо спремни да вас посаветујемо, одаберемо оптималну опрему за ваш дом/стан и извршимо монтажу.",
  "главная-6": "Наше предности:",
  "главная-7": "Велико радно искуство",
  "главная-8": "Гаранције",
  "главная-9": "Висок квалитет рада",
  "главная-10": "Професионални приступ",
  "главная-11": "Европски стандарди",
  "главная-12": "Списак услуга које се пружају можете погледати ",
  "главная-13": "овде",
  "тепл-нас-1": "Обновљиви извор енергије",
  "тепл-нас-2": "Када рачуни за енергију почну да расту, већина нас се пита да ли постоји алтернатива. Коришћење обновљиве енергије за грејање постаје неопходан корак за власнике кућа, пре свега зато што гас и струја из фосилних горива постају све скупљи. Прелазак на зелене технологије као што су топлотне пумпе ваздух-вода је често изазов за оне који желе да смање трошкове и оставе мањи угљенични отисак, али да ли су оне добре? Као и код сваког посла, важно је да заузмете уравнотежен приступ пре куповине, па хајде да погледамо предности и недостатке ВТН-а.",
  "тепл-нас-3": "Шта је топлотна пумпа извора ваздуха?",
  "тепл-нас-4": "Топлотне пумпе ваздух-вода за грејање куће су заиста генијални потез. Поставља се питање зашто, са тако добрим карактеристикама, топлотне пумпе ваздух-вода нису уграђене у сваки дом?",
  "тепл-нас-5": "Моноблок, величине машине за прање веша, хармонично се уклапа у спољашњи зид вашег дома и магично претвара хладан спољашњи ваздух у топлу воду и грејање. Способан је да трансформише негативну температурну атмосферу и снабдева кућу топлом водом за даљу употребу, а током летњих месеци може да ради и као клима уређај. Људи често користе топлотну пумпу ваздух-вода за базен за загревање воде у базену.",
  "тепл-нас-6": "Инсталација топлотне пумпе ваздух-вода траје само неколико дана, а трају и до 20 година. Уређаји захтевају минимално одржавање и потребно их је чистити једном годишње. ВТН је у стању да замени све предности традиционалног гасног котла, а то ради уз минималну потрошњу енергије и без штете по животну средину. Нема потребе да купујете гориво јер га једноставно не троши.",
  "тепл-нас-7": "Како функционише топлотна пумпа ваздух-вода?",
  "тепл-нас-8": "Конвертор топлоте ваздуха ради на 75% обновљиве енергије из ваздуха и 25% од електричне енергије. Постоје две главне врсте ВТН-а:",
  "тепл-нас-9": "Топлотна пумпа ваздух-вода је уређај у коме се топлота генерише из атмосферске топлоте за расхладну течност, а затим се испоручује традиционалним системима грејања као што су радијатори и хидротехнички грејани подови. Пошто подно грејање ради на нижој температури, око 35°Ц, сматра се идеалним системом за рад топлотне пумпе;",
  "тепл-нас-10": "Систем ваздух-ваздух генерише топлу струју ваздуха, а затим га пумпа кроз вентилаторе који дистрибуирају топлоту по кући.",
  "тепл-нас-11": "Принцип рада топлотне пумпе ваздух-вода",
  "тепл-нас-12": "Принцип рада је прилично једноставан. Енергија се производи усисавањем атмосферског ваздуха у измењивач топлоте испаривача. Ваздух се користи за загревање гаса фреона, слично како ради фрижидер, али обрнуто. Након што фреон добије топлоту ниског степена из ваздуха, температура расхладног средства се повећава услед компресије, коју врши компресор. Компримовани, сада загрејани гас се кондензује у средњем измењивачу топлоте који се зове кондензатор. Након чега се акумулирана топлота преноси на расхладну течност система грејања.",
  "тепл-нас-13": "Ефикасност топлотне пумпе извора ваздуха",
  "тепл-нас-14": "ВХП су ефикасни и зими и лети, захваљујући ЦОП (коефицијент конверзије). ЦОП топлотне пумпе је начин мерења њене ефикасности упоређивањем улазне снаге потребне за производњу топлоте са количином излазне топлоте. ЦОП се прилагођава на основу доба године. Да бисте могли да упоредите топлотне пумпе на основу тога колико на њих утичу ове промене, користи се сезонски ЦОП (Сеасонал Цоеффициент оф Перформанце). ВХП прима енергију из околног ваздуха, али како се температура околине смањује, ефикасност се такође смањује.",
  "тепл-нас-15": "ВТН за хладне климе",
  "тепл-нас-16": "Важно је знати топлотно оптерећење објекта и карактеристике претварача топлоте; што је већа потребна температура довода у систем грејања куће, то ће бити нижи коначни ЦОП. Иако ефикасност може бити смањена, то не значи да ХХП не раде по хладном времену. Познато је да могу да извуку топлоту из ваздуха на температурама до -25°Ц, и са додатним извором, као што је електрични котао и сл. ТЧ раде чак иу хладној клими Сибира. Али да бисте извукли максимум из тога, морате бити сигурни да је ваш дом добро изолован.",
  "тепл-нас-17": "Коју топлотну пумпу ваздух-вода изабрати?",
  "тепл-нас-18": "Дакле, топлотна пумпа са инвертером ваздух-вода ради са ЦОП 4 када је спољна температура 0°Ц, а температура довода 35°Ц. То значи да је ефикасност топлотне пумпе ваздух-вода 400%. То јест, за сваки кВ/х електричне енергије коју потроше вентилатори и компресор, производи се 4 кВ/х топлоте.",
  "тепл-нас-19": "Топлотна пумпа за хлађење ваздуха вода",
  "тепл-нас-20": "Реверзна опција на неким моделима значи да се могу користити и као клима уређај. Наравно, можете купити одвојене сплит системе за климатизацију, али постоје модели опреме који обављају обе функције. Главна ствар је да не заборавите да свестраност било ког уређаја увек негативно утиче на његову специјализацију.",
  "тепл-нас-21": "Предности ВТН-а",
  "тепл-нас-22": "За разлику од гасног котла, топлотна пумпа са извором ваздуха не производи угљеник када ради. Иако троше електричну енергију, ВХП се могу комбиновати са соларним фотонапонским панелима за производњу чисте електричне енергије.",
  "тепл-нас-23": "За дом, топлотне пумпе ваздух-вода имају ниске оперативне трошкове, посебно у поређењу са горивима као што су пропан, дизел или директно електрично грејање.",
  "тепл-нас-24": "Недостаци претварача топлоте ваздуха",
  "тепл-нас-25": "Грејање приватне куће топлотном пумпом ваздух-вода није „универзално“ решење и није погодно за сваки дом на исти начин као гасни котлови. Идеални су за добро изоловане, херметичке куће. ХХП-у је и даље потребна струја за рад. Ово ће вероватно повећати ваше рачуне за струју, али ће смањити друге трошкове грејања.",
  "тепл-нас-26": "Можете додатно смањити свој угљенични отисак тако што ћете сву потрошњу енергије пребацити са фосилних горива на соларну енергију. Инсталирање соларних панела на вашем крову омогућава вам да напајате свој ВХП систем (и цео ваш дом) бесплатном електричном енергијом уз нулту емисију ЦО2.",
  "тепл-нас-27": "Круг грејања топлотне пумпе ваздух вода",
  "газ-котл-1": "Рад гасних котлова",
  "газ-котл-2": "За правилан и издржљив рад гасне опреме морају бити испуњени следећи услови:",
  "газ-котл-3": "1. Инсталирање стабилизатора напона. Ово ће заштитити контролну таблу котла од пренапона и напона 220В. Изаберите модел стабилизатора од 500 В и више;",
  "газ-котл-4": "2. Уградња диелектричног уметка на гасну цев. Ово је заштита контролне плоче котла од лутајућих струја на гасоводу;",
  "газ-котл-5": "3. Уградња гасног филтера - муљ, вага за заваривање, ситне честице песка и прашине могу ући у гасни вентил котла, што ће довести до нестабилног рада целог котла;",
  "газ-котл-6": "4. Филтер на повратку система грејања. Прљавштина и каменац у цевима за грејање и радијаторима, чак и ако су нови, неће доспети у циркулациону пумпу, измењиваче топлоте, 3-смерни погон и друге компоненте котла.",
  "газ-котл-7": "5. Проверите нагиб димњака. Ако имате кондензациони котао, нагните га према котлу, ако је обичан котао, нагните га према улици (кондензат који се формира у димњаку се слива у котао, уништава измењивач топлоте и поплави контролни регулатор).",
  "газ-котл-8": "6. Двоструки котао - велика потрошња гаса и велико хабање делова котла. Када отворите славину за топлу воду, котао прелази у режим максималне снаге - након неког времена почиње да тече топла вода и након прања затворите славину - бојлер се искључује. Пребројите колико се промена догоди у једном дану у породици? За економичан и издржљив рад, боље је инсталирати котао са једним кругом са котлом за индиректно грејање или модификовати своју шему - котао са двоструким кругом и електрични котао за грејање. Ово ће вас уштедети од велике потрошње гаса и различите температуре воде под тушем;",
  "газ-котл-9": '7. Третман воде за напајање котла и довод топле воде. Обратите пажњу на вагу у вашем чајнику! Квалитет воде утиче не само на ваше здравље, већ и на животни век вашег котла. Каменац се формира на температури од 53°, а ако често "храните" котао, то ће довести до квара примарног измењивача топлоте.',
  "газ-котл-10": "Иста ствар се дешава и са секундарним измењивачем топлоте. На улазу у котао за хладну воду потребно је уградити полифосфатни или електромагнетни филтер. На ову линију можете прикључити и машину за прање веша и машину за прање судова.",
  "газ-котл-11": "Да ли имате ово инсталирано?",
  "газ-котл-12": "Како уштедети гас при раду котла?",
  "газ-котл-13": "За ова и друга питања која вас могу занимати, можете се консултовати",
  "газ-котл-14": "са нашим специјалистима.",
  "услуги-файл-1": "Први део листе услуга",
  "услуги-файл-2": "(RS) Други део списка радова"
};
const resources = {
  ru: {
    translation: translationRU
  },
  sr: {
    translation: translationSR
  }
};
i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
  fallbackLng: "ru",
  debug: false,
  resources,
  interpolation: {
    escapeValue: false
    // not needed for react as it escapes by default
  }
});
const Main = () => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Navigation, {}),
  /* @__PURE__ */ jsx(App, {})
] });
const meta = {
  home: {
    title: {
      ru: "Обслуживание, ремонт и установка кондиционеров, тепловых насосов, газовых котлов и систем отопления русскими специалистами в Сербии",
      rs: "Одржавање, поправка и уградња клима уређаја, топлотних пумпи, гасних котлова и система грејања од стране руских стручњака у Србији"
    },
    content: {
      ru: 'Компания "Тепло Сербии" осуществляет профессиональный монтаж и ремонт систем отопления (теплые полы, фанкойлы, радиаторы) в Сербии. Большой опыт. Делаем качественно, быстро и по доступным ценам.',
      rs: 'Kompanija "Topline Srbije" vrši profesionalnu montažu i popravku sistema grejanja (topli podovi, fancoil, radijatori) u Srbiji. Veliko iskustvo. Radimo to kvalitetno, brzo i po pristupačnim cenama.'
    }
  },
  service: {
    title: {
      ru: "Услуги обслуживания, ремонта и установки кондиционеров, тепловых насосов, газовых котлов и систем отопления русскими специалистами в Сербии",
      rs: "Услуге одржавања, поправке и монтаже клима уређаја, топлотних пумпи, гасних котлова и система грејања од стране руских стручњака у Србији"
    },
    content: {
      ru: 'Компания "Тепло Сербии" осуществляет профессиональный монтаж,  ремонт и сервис кондиционеров, систем отопления, тепловых насосов и газовых котлов в Сербии.  Большой опыт. Делаем качественно, быстро и по доступным ценам.',
      rs: 'Kompanija "Topline Srbije" vrši profesionalnu montažu, popravku i servis klima uređaja, sistema grejanja, toplotnih pumpi i kotlova na gas u Srbiji. Veliko iskustvo. Radimo to kvalitetno, brzo i po pristupačnim cenama.'
    }
  },
  heating: {
    title: {
      ru: "Монтаж систем отопления (радиаторы, теплые полы, фанкойлы) русскими специалистами в Сербии",
      rs: "Монтажа система грејања (радијатори, грејани подови, вентилатор конвектори) од стране руских стручњака у Србији"
    },
    content: {
      ru: 'Компания "Тепло Сербии" осуществляет профессиональный монтаж и ремонт тепловых насосов в Сербии. Большой опыт. Делаем качественно, быстро и по доступным ценам.',
      rs: 'Kompanija "Topline Srbije" vrši profesionalnu montažu i popravku toplotnih pumpi u Srbiji. Veliko iskustvo. Radimo to kvalitetno, brzo i po pristupačnim cenama.'
    }
  },
  gasBoilers: {
    title: {
      ru: "Диагностика, ремонт и установка газовых котлов  русскими специалистами в Сербии",
      rs: "Дијагностика, поправка и уградња гасних котлова од стране руских стручњака у Србији"
    },
    content: {
      ru: 'Компания "Тепло Сербии" осуществляет профессиональный монтаж и ремонт газовых котлов в Сербии.  Большой опыт. Делаем качественно, быстро и по доступным ценам.',
      rs: 'Kompanija "Topline Srbije" vrši profesionalnu montažu i popravku gasnih kotlova u Srbiji. Veliko iskustvo. Radimo to kvalitetno, brzo i po pristupačnim cenama.'
    }
  },
  heatPumps: {
    title: {
      ru: "Обслуживание, ремонт и установка тепловых насосов русскими специалистами в Сербии",
      rs: "Одржавање, поправка и уградња топлотних пумпи од стране руских стручњака у Србији"
    },
    content: {
      ru: 'Компания "Тепло Сербии" осуществляет профессиональный монтаж и ремонт тепловых насосов в Сербии.  Большой опыт. Делаем качественно, быстро и по доступным ценам.',
      rs: `Компанија "Тепло Србија" врши професионалну монтажу и ремонт топлотних пумпи у Србији. Велико искуство. Радимо то ефикасно, брзо и по приступачним ценама.'`
    }
  },
  airConditioners: {
    title: {
      ru: "Обслуживание, ремонт и установка кондиционеров русскими специалистами в Сербии",
      rs: "Одржавање, поправка и уградња клима уређаја од стране руских стручњака у Србији"
    },
    content: {
      ru: 'Компания "Тепло Сербии" осуществляет профессиональный монтаж, ремонт и сервис кондиционеров в Сербии.  Большой опыт. Делаем качественно, быстро и по доступным ценам.',
      rs: 'Kompanija "Topline Srbije" vrši profesionalnu montažu, popravku i servis klima uređaja u Srbiji. Veliko iskustvo. Radimo to kvalitetno, brzo i po pristupačnim cenama.'
    }
  }
};
const getMeta = (url) => {
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
const { StaticRouter } = ReactRouterDom;
function render(url) {
  const head = getMeta(url);
  console.log("@@", head);
  const html = ReactDOMServer.renderToString(
    /* @__PURE__ */ jsx(StaticRouter, { location: "/" + url, children: /* @__PURE__ */ jsx(Main, {}) })
  );
  return { html, head };
}
export {
  render
};
