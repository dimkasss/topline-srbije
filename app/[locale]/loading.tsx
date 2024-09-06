import PageWrapper from "@/src/components/PageWrapper";
import Section from "@/src/components/Section";
import { useTranslations } from "next-intl";

const Loading = () => {
  const t = useTranslations();

  return (
    <PageWrapper>
      <Section doubledHeader>{t("загрузка")}</Section>
    </PageWrapper>
  );
};

export default Loading;
