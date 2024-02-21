import { useTranslation } from "react-i18next";
import PageWrapper from "../components/PageWrapper";
import Section from "../components/Section";
import { Link } from "react-router-dom";
import GasBoilers1 from "../assets/gas-boilers-1.jpg";
import GasBoilers2 from "../assets/gas-boilers-2.jpg";
import Image from "../components/Image";

const GasBoilersPage = () => {
  const { t } = useTranslation();

  return (
    <PageWrapper>
      <Section doubledHeader>{t("газовые котлы")}</Section>
      <Image img={GasBoilers1} width="700px" alt="газовые котлы" />
      <Section header>{t("газ-котл-1")}</Section>
      <Section>
        <p>{t("газ-котл-2")}</p>
        <p>{t("газ-котл-3")}</p>
        <p>{t("газ-котл-4")}</p>
        <p>{t("газ-котл-5")}</p>
        <p>{t("газ-котл-6")}</p>
        <p>{t("газ-котл-7")}</p>
        <p>{t("газ-котл-8")}</p>
        <p>{t("газ-котл-9")}</p>
      </Section>
      <Section>
        <p>{t("газ-котл-10")}</p>
        <p>{t("газ-котл-11")}</p>
      </Section>
      <Image img={GasBoilers2} width="800px" alt="газовые котлы" />
      <Section header>{t("газ-котл-12")}</Section>
      <Section>
        <p>
          {t("газ-котл-13")}{" "}
          <Link className="underline" to={"/teplo-serbii/service"}>
            {t("газ-котл-14")}
          </Link>
        </p>
      </Section>
    </PageWrapper>
  );
};

export default GasBoilersPage;
