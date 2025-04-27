import * as React from "react";
import { Typography } from "@material-tailwind/react";
import { useTranslation } from "react-i18next"; // ✅ 引入 useTranslation

const YEAR = new Date().getFullYear();

export default function FooterWithLogo() {
  const { t } = useTranslation(); // ✅ 呼叫 useTranslation

  return (
    <footer className="flex w-full flex-wrap items-center justify-center gap-x-12 gap-y-3 border-t border-surface py-4 text-center">
      <Typography className="text-center text-[14px]">
        &copy; {YEAR} {t("footerText")}
      </Typography>
    </footer>
  );
}
