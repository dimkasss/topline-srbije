import { CustomFlowbiteTheme, Navbar } from "flowbite-react";
import BoilerLogo from '../assets/boiler.svg';
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const customNavbarTheme: CustomFlowbiteTheme['navbar'] = {
  root: {
    base: "nav px-2 py-2.5 dark:border-gray-700 dark:bg-gray-800 sm:px-4",
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
        off: "container"
      }
    }
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
    }
  },
  link: {
    base: "block py-2 pr-4 pl-3 xl:p-0",
    active: {
      on: "text-[--button]",
      off: "border-gray-100  text-gray-700 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white xl:border-0 xl:hover:bg-transparent xl:hover:text-[--button] xl:dark:hover:bg-transparent xl:dark:hover:text-white",
    },
    disabled: {
      on: "text-gray-400 hover:cursor-not-allowed dark:text-gray-600",
      off: "",
    }
  },
  toggle: {
    base: "inline-flex items-center rounded-lg p-2 text-sm focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 xl:hidden",
    icon: "h-6 w-6 shrink-0",
  }
}

const Navigation = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'sr' : 'ru');
  }

  const location = useLocation();
  return ( 
    <Navbar fluid rounded className="h-21 lg:p-5 lg:*:p-3 *:rounded-2xl border-0 border-b-2 border-[--main] drop-shadow-l w-full" theme={customNavbarTheme}>
      <Navbar.Brand href="/teplo-serbii/" className="justify-center items-center self-start">
        {/* <img src={Cloud} width="100px" color="red" className="mr-3 h-6 sm:h-9" alt="Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span> */}
        <img src={BoilerLogo} className="mt-3 mr-3 h-8 lg:h-12" alt="Boiler Logo" />
        <span className="self-center whitespace-nowrap lg:text-xl font-extrabold dark:text-white">{t('название')}</span>
      </Navbar.Brand>

      <div className="flex flex-row *:px-2 items-center">
        <Link to={location.pathname} onClick={toggleLanguage} className="flex items-center justify-center self-start pt-2 lg:pt-2 lg:pr-8 justify-self-end xl:self-center xl:pt-0">{t('язык')}</Link>
        <div className="flex flex-row">

        

        
        <Navbar.Collapse className="md:*:*:text-lg *:pl-0">
          <Navbar.Link to="/teplo-serbii/" as={Link} active={location.pathname === "/teplo-serbii/"}>{t('главная')}</Navbar.Link>
          <Navbar.Link to="/teplo-serbii/service" as={Link} active={location.pathname === "/teplo-serbii/service"}>{t('услуги')}</Navbar.Link>
          <Navbar.Link to="/teplo-serbii/heating" as={Link} active={location.pathname === "/teplo-serbii/heating"}>{t('отопление')}</Navbar.Link>
          <Navbar.Link to="/teplo-serbii/gas-boilers" as={Link} active={location.pathname === "/teplo-serbii/gas-boilers"}>{t('газовые котлы')}</Navbar.Link>
          <Navbar.Link to="/teplo-serbii/heat-pumps" as={Link} active={location.pathname === "/teplo-serbii/heat-pumps"}>{t('тепловые насосы')}</Navbar.Link>
          <Navbar.Link to="/teplo-serbii/air-conditioners" as={Link} active={location.pathname === "/teplo-serbii/air-conditioners"}>{t('кондиционеры')}</Navbar.Link>
        </Navbar.Collapse>
        </div>
      <Navbar.Toggle className="self-start justify-self-end"/>
      </div>
    </Navbar>
   );
}
 
export default Navigation;