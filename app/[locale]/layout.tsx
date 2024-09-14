import { Inter } from "next/font/google";
import { PageWithLangProps } from "@/src/types";
import Navigation from "@/src/components/Navigation";

import { NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  getTranslations,
  unstable_setRequestLocale,
} from "next-intl/server";
import "@/src/styles/globals.css";
import { routing } from "@/src/i18n/routing";
import { metadata } from "@/src/utils/metadataStorage";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Topline Srbije",
//   description: "Description",
// };

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: "ru" | "rs" };
}) {
  const t = await getTranslations({ locale });

  return {
    title: {
      default: t("название-компании"),
    },
    applicationName: t("название-компании"),
    referrer: "origin-when-cross-origin",
    keywords: metadata.layout.keywords[locale],
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    verification: {
      google: "MtOpFI0a1y2uSQQ5N-QWwamds4AfNLwl9Uu8zufycig",
    },
  };
}

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const RootLayout: React.FC<PageWithLangProps> = async ({
  params,
  children,
}) => {
  const { locale } = params;
  unstable_setRequestLocale(locale);
  const dict = await getMessages();

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={dict}>
          <Navigation params={params} />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
