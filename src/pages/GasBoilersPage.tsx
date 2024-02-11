import { useTranslation } from "react-i18next";
import PageWrapper from "../components/PageWrapper";
import Section from "../components/Section";

const GasBoilersPage = () => {
  const { t } = useTranslation();

  return ( 
    <PageWrapper>
      <Section doubledHeader>
        {t('газовые котлы')}
      </Section>
      <Section header>
        {t('в разработке')}
      </Section>
    </PageWrapper>
   );
}
 
export default GasBoilersPage;