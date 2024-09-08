import PageWrapper from "@/src/components/PageWrapper";
import Section from "@/src/components/Section";
import Main1 from "@/public/main-1.svg";
import CustomImage from "@/src/components/CustomImage";
import Link from "next/link";
import copyableClick from "@/src/utils/copyableClick";
import CopyableCredentials from "@/src/components/use-client/CopyableCredentials";
import { useTranslations } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: "ru" | "rs" };
}) {
  const t = await getTranslations({ locale });

  return {
    title: t("home-title"),
    description: t("home-content"),
  };
}

const MainPage = ({ params }: any) => {
  unstable_setRequestLocale(params.locale);

  const t = useTranslations();

  return (
    <PageWrapper>
      <Section doubledHeader className="text-3xl mt-20 pb-5">
        {t("тепло сербии")}
      </Section>
      <CustomImage img={Main1} alt="Тепло Сербии" width={900} />
      <Section header className="mt-16">
        {t("главная-1")}
      </Section>
      <Section>
        <p>{t("главная-2")}</p>
        <p>{t("главная-3")}</p>
        <p>{t("главная-4")}</p>
        <p>{t("главная-5")}</p>
      </Section>
      <Section header>{t("главная-6")}</Section>
      <Section className="flex flex-col items-center justify-center px-5 md:*:*:px-10*:*:py-5 *:*:text-xl">
        <div className="block md:flex flex-row *:py-1 md:*:py-0 w-full justify-around md:py-4 *:text-left">
          <li>{t("главная-7")}</li>
          <li>{t("главная-8")}</li>
          <li>{t("главная-9")}</li>
        </div>
        <div className="block md:flex flex-row *:py-1 md:*:py-0 w-full justify-around md:py-4">
          <li>{t("главная-10")}</li>
          <li>{t("главная-11")}</li>
        </div>
      </Section>
      <Section className="flex justify-center">
        <p className="text-xl *:text-xl">
          {t("главная-12")}
          {/* NEED FIX */}
          {/* <Link href="/service" className="p-0 underline font-bold">
            {t("главная-13")}
          </Link> */}
        </p>
      </Section>
      <Section>
        <div className="flex flex-col 2xl:flex-row justify-around items-center text-xl *:text-xl font-semibold indent-0">
          <div className="text-center">{t("главная-14")}</div>
          <CopyableCredentials />
        </div>
      </Section>
    </PageWrapper>
  );
};

export default MainPage;
