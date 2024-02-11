import { Link } from "react-router-dom";
import Section from "../components/Section";
import { useTranslation } from "react-i18next";

const NotFoundPage = () => {
  const { t } = useTranslation();
  return ( 
    <div className="main flex flex-col justify-center items-center pt-14 w-full">
      <Section header>
        {t('страница не найдена-1')}
      </Section>
      <Link to="/teplo-serbii/" className="p-3 underline">
        {t('страница не найдена-2')}
      </Link>
    </div>
   );
}
 
export default NotFoundPage;