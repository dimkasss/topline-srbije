"use client";

import copyableClick from "@/src/utils/copyableClick";
import { useTranslations } from "next-intl";
import { useRef } from "react";

const CopyableCredentials = () => {
  const t = useTranslations();

  const phoneNumberRef = useRef<HTMLDivElement>(null);
  const emailRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div
        ref={phoneNumberRef}
        className="transition-prepare text-center"
        onClick={() => copyableClick(phoneNumberRef)}
      >
        {t("главная-15")}
      </div>
      <div
        ref={emailRef}
        className="transition-prepare text-center mb-8"
        onClick={() => copyableClick(emailRef)}
      >
        {t("главная-16")}
      </div>
    </>
  );
};

export default CopyableCredentials;
