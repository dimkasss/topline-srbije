"use client";

import { CustomFlowbiteTheme, Navbar } from "flowbite-react";

import BoilerLogo from "@/public/boiler.svg";
import Image from "next/image";
import Link from "next/link";
import { PageWithLangProps, ParamsType } from "../types";
import { saveChosenLanguage } from "../utils/localStorageHandler";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "../i18n/routing";

const NavLink = Navbar.Link;

const customNavbarTheme: CustomFlowbiteTheme["navbar"] = {
  root: {
    base: "nav px-2 py-2.5 sm:px-4",
    rounded: {
      on: "",
      off: "",
    },
    bordered: {
      on: "border",
      off: "",
    },
    inner: {
      base: "mx-auto flex flex-wrap items-center justify-between",
      fluid: {
        on: "",
        off: "container",
      },
    },
  },
  brand: {
    base: "flex items-center",
  },
  collapse: {
    base: "w-full xl:block xl:w-auto",
    list: "mt-4 flex flex-col xl:mt-0 xl:flex-row xl:space-x-8 xl:text-sm xl:font-medium",
    hidden: {
      on: "hidden",
      off: "",
    },
  },
  link: {
    base: "block py-2 pr-4 pl-3 xl:p-0",
    active: {
      on: "text-[--button]",
      off: "border-gray-100  text-gray-700 xl:border-0 xl:hover:text-[--button]",
    },
    disabled: {
      on: "text-gray-400 hover:cursor-not-allowed",
      off: "",
    },
  },
  toggle: {
    base: "inline-flex items-center rounded-lg p-2 text-sm focus:outline-none dark:hover:bg-gray-700 xl:hidden",
    icon: "h-6 w-6 shrink-0",
  },
};

const Navigation = ({ params }: any) => {
  const t = useTranslations();

  // const { locale } = params;
  // TODO: need fix
  const locale = "";

  const pathname = usePathname();

  const router = useRouter();

  return (
    <Navbar
      fluid
      rounded
      className="h-21 lg:p-2 lg:*:p-3 *:rounded-2xl border-0 border-b-2 border-[--main] drop-shadow-l w-full"
      theme={customNavbarTheme}
    >
      <Navbar.Brand href="/" className="justify-center items-center self-start">
        <Image
          src={BoilerLogo}
          className="mt-3 mr-3 h-8 lg:h-12"
          alt="Boiler Logo"
        />
        <span className="self-center whitespace-nowrap lg:text-xl font-extrabold dark:text-white">
          {t("название")}
        </span>
      </Navbar.Brand>

      <div className="flex flex-row *:px-2 items-center">
        {/* <Link
          href={getNewURL(pathname)}
          onClick={() => {
            router.refresh();
            saveChosenLanguage({ locale });
          }}
          className="flex items-center justify-center self-start pt-2 lg:pt-2 lg:pr-8 justify-self-end xl:self-center xl:pt-0"
        >
          {t("язык")}
        </Link> */}

        <button onClick={() => router.replace("/", { locale: "rs" })}>
          RS
        </button>
        <button onClick={() => router.replace("/", { locale: "ru" })}>
          RU
        </button>

        <div className="flex flex-row">
          <Navbar.Collapse className="md:*:*:text-lg *:pl-0">
            <NavLink
              href="/"
              as={Link}
              locale={locale}
              active={pathname === "/"}
              prefetch={false}
            >
              {t("главная")}
            </NavLink>
            <NavLink
              href="/service"
              locale={locale}
              as={Link}
              active={pathname === "/service"}
              prefetch={false}
            >
              {t("услуги")}
            </NavLink>
            <NavLink
              href="/heating"
              locale={locale}
              as={Link}
              active={pathname === "/heating"}
              prefetch={false}
            >
              {t("отопление")}
            </NavLink>
            <NavLink
              href="/gas-boilers"
              locale={locale}
              as={Link}
              active={pathname === "/gas-boilers"}
              prefetch={false}
            >
              {t("газовые котлы")}
            </NavLink>
            <NavLink
              href="/heat-pumps"
              locale={locale}
              as={Link}
              active={pathname === "/heat-pumps"}
              prefetch={false}
            >
              {t("тепловые насосы")}
            </NavLink>
            <NavLink
              href="/air-conditioners"
              locale={locale}
              as={Link}
              active={pathname === "/air-conditioners"}
              prefetch={false}
            >
              {t("кондиционеры")}
            </NavLink>
          </Navbar.Collapse>
        </div>
        <Navbar.Toggle className="self-start justify-self-end" />
      </div>
    </Navbar>
  );
};

export default Navigation;
