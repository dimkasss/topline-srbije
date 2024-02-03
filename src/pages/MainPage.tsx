import { useTranslation } from "react-i18next";
import PageWrapper from "../components/PageWrapper";
import Section from "../components/Section";


const MainPage = () => {
  const { t } = useTranslation();
  return ( 
    <PageWrapper>
      <Section doubledHeader>
        {t('главная')}
      </Section>
    </PageWrapper>
   );
}
 
export default MainPage;