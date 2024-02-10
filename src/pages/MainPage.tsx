import { useTranslation } from "react-i18next";
import PageWrapper from "../components/PageWrapper";
import Section from "../components/Section";
import Main1 from "../assets/main-1.svg";
import Image from "../components/Image";


const MainPage = () => {
  const { t } = useTranslation();
  return ( 
    <PageWrapper>
      <Section doubledHeader className="text-3xl mt-20 pb-5">
        {t('тепло сербии')}
      </Section>
      <Image img={Main1} alt="Тепло Сербии" width="700px" />
      <Section header className="mt-16">
        {t('главная-1')}
      </Section>
      <Section>
        <p>
          {t('главная-2')}
        </p>
        <p>
          {t('главная-3')}
        </p>
        <p>
          {t('главная-4')}
        </p>
        <p>
          {t('главная-5')}
        </p>
      </Section>
      <Section header>
        {t('главная-6')}
      </Section>
      <Section className="flex flex-col items-center justify-center *:*:px-10 *:*:py-5 *:*:text-xl *:flex">
        <div>
          <li>{t('главная-7')}</li>
          <li>{t('главная-8')}</li>
          <li>{t('главная-9')}</li>
        </div>
        <div>
          <li>{t('главная-10')}</li>
          <li>{t('главная-11')}</li>
        </div>
      </Section>
    </PageWrapper>
   );
}
 
export default MainPage;