import PageWrapper from "@/src/components/PageWrapper";
import Section from "@/src/components/Section";
import GasBoilers1 from "@/public/gas-boilers-1.jpg";
import GasBoilers2 from "@/public/gas-boilers-2.jpg";
import CustomImage from "@/src/components/CustomImage";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: "ru" | "rs" };
}) {
  const t = await getTranslations({ locale });

  return {
    title: t("gasBoilers-title"),
    description: t("gasBoilers-content"),
  };
}

const GasBoilersPage = () => {
  const t = useTranslations();

  return (
    <PageWrapper>
      <Section doubledHeader>{t("газовые котлы")}</Section>
      <CustomImage img={GasBoilers1} width={700} alt="газовые котлы" />
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
      <CustomImage img={GasBoilers2} width={800} alt="газовые котлы" />
      <Section header>{t("газ-котл-12")}</Section>
      <Section>
        <p>
          {t("газ-котл-13")} {/* NEED FIX */}
          {/* <Link className="underline" href="/service">
            {t("газ-котл-14")}
          </Link> */}
        </p>
      </Section>
    </PageWrapper>
  );
};

export default GasBoilersPage;
