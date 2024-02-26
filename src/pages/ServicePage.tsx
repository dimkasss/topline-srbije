import { useTranslation } from "react-i18next";
import PageWrapper from "../components/PageWrapper";
import Section from "../components/Section";
import ViewerXLSX from "../components/ExcelFileDownloader";

const ServicePage = () => {
  const { t, i18n } = useTranslation();
  console.log("@", navigator.language);
  return (
    <PageWrapper>
      <Section doubledHeader>{t("услуги")}</Section>
      <Section className="flex flex-col items-center *:p-3 *:underline">
        <ViewerXLSX fileName="service1.xlsx" text={t("услуги-файл-1")} />
        <ViewerXLSX
          fileName={`service2-${i18n.language}.xlsx`}
          text={t("услуги-файл-2")}
        />
      </Section>
    </PageWrapper>
  );
};

export default ServicePage;
