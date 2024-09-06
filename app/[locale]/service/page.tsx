import PageWrapper from "@/src/components/PageWrapper";
import Section from "@/src/components/Section";
import ExcelFileDownloader from "@/src/components/ExcelFileDownloader";
import { PageWithLangProps } from "@/src/types";
import CopyableCredentials from "@/src/components/use-client/CopyableCredentials";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: "ru" | "rs" };
}) {
  const t = await getTranslations({ locale });

  return {
    title: t("service-title"),
    description: t("service-content"),
  };
}

const ServicePage: React.FC<PageWithLangProps> = ({ params, children }) => {
  const t = useTranslations();

  return (
    <PageWrapper>
      <Section doubledHeader>{t("услуги")}</Section>
      <Section className="flex flex-col items-center *:p-3 *:underline">
        <ExcelFileDownloader
          path="@/public/downloads/service1.xlsx"
          text={t("услуги-файл-1")}
        />
        <ExcelFileDownloader
          path={`@/public/downloads/service2_rs.xlsx`}
          text={t("услуги-файл-2")}
        />
      </Section>
      <p className="flex flex-col justify-around items-center text-xl *:text-xl font-semibold indent-0">
        {/* <div className="text-center">{t("главная-14")}</div> */}
        {/* NEED FIX */}
        {/* <CopyableCredentials /> */}
      </p>
    </PageWrapper>
  );
};

export default ServicePage;
