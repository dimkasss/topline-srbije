import PageWrapper from "@/src/components/PageWrapper";
import Section from "@/src/components/Section";
import Conditioners1 from "@/public/conditioners-1.jpg";
import Conditioners2 from "@/public/conditioners-2.jpg";
import Conditioners3 from "@/public/conditioners-3.jpg";
import CustomImage from "@/src/components/CustomImage";
import { PageWithLangProps } from "@/src/types";
import { useTranslations } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

export async function generateMetadata({ params }: any) {
  const locale = params.locale;
  const t = await getTranslations({ locale });
  return {
    title: t("airConditioners-title"),
    description: t("airConditioners-content"),
  };
}

const AirConditionersPage: React.FC<PageWithLangProps> = ({ params }) => {
  unstable_setRequestLocale(params.locale);

  const t = useTranslations();

  return (
    <>
      <PageWrapper>
        <Section doubledHeader>
          <h1>{t("кондиционеры")}</h1>
        </Section>
        <CustomImage img={Conditioners1} width={700} alt="Кондиционер" />
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
        <CustomImage img={Conditioners2} width={700} alt="Кондиционер" />
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
        <CustomImage img={Conditioners3} width={700} alt="Кондиционер" />
      </PageWrapper>
    </>
  );
};

export default AirConditionersPage;
