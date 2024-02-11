import { useTranslation } from "react-i18next";
import PageWrapper from "../components/PageWrapper";
import Section from "../components/Section";

const AirConditionersPage = () => {
  const { t } = useTranslation();
  return ( 
    <PageWrapper>
      <Section doubledHeader>
        {t('кондиционеры')}
      </Section>
      <Section header>
        {t('в разработке')}
      </Section>
    </PageWrapper>
   );
}
 
export default AirConditionersPage;