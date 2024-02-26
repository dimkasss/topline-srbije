import { useTranslation } from "react-i18next";
import PageWrapper from "../components/PageWrapper";
import Section from "../components/Section";
import Conditioners1 from "../assets/conditioners-1.jpg";
import Conditioners2 from "../assets/conditioners-2.jpg";
import Conditioners3 from "../assets/conditioners-3.jpg";
import Image from "../components/Image";

const AirConditionersPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <PageWrapper>
        <Section doubledHeader>
          <h1>{t("кондиционеры")}</h1>
        </Section>
        <Image img={Conditioners1} width="700px" alt="Кондиционер" />
        <Section header>{t("конд-1")}</Section>
        <Section>
          <p>{t("конд-2")}</p>
        </Section>
        <Section header>{t("конд-3")}</Section>
        <Section>
          <p>{t("конд-4")}</p>
          <p>{t("конд-5")}</p>
          <p>{t("конд-6")}</p>
          <p>{t("конд-7")}</p>
        </Section>
        <Image img={Conditioners2} width="700px" alt="Кондиционер" />
        <Section header>{t("конд-8")}</Section>
        <Section>
          <p>{t("конд-9")}</p>
        </Section>
        <Section header>{t("конд-10")}</Section>
        <Section>
          <p>{t("конд-11")}</p>
          <p>{t("конд-12")}</p>
          <p>{t("конд-13")}</p>
          <p>{t("конд-14")}</p>
        </Section>
        <Image img={Conditioners3} width="700px" alt="Кондиционер" />
      </PageWrapper>
    </>
  );
};

export default AirConditionersPage;
