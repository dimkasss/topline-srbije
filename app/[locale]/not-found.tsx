import Link from "next/link";
import Section from "@/src/components/Section";
import { useTranslations } from "next-intl";

const NotFoundPage = () => {
  const t = useTranslations();

  return (
    <div className="main flex flex-col justify-center items-center pt-14 w-full">
      <Section header>{t("страница не найдена-1")}</Section>
      <Link href="/" className="p-3 underline">
        {t("страница не найдена-2")}
      </Link>
    </div>
  );
};

export default NotFoundPage;
