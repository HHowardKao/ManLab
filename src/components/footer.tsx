import * as React from "react";
import { Typography } from "@material-tailwind/react";

const YEAR = new Date().getFullYear();

export default function FooterWithLogo() {
  return (
    <footer className="flex w-full flex-wrap items-center justify-center gap-x-12 gap-y-3 border-t border-surface py-4 text-center">
      <Typography className="text-center text-[14px]">
        &copy; {YEAR} 國立清華大學材料科學工程學系 材料實驗館R103
      </Typography>
    </footer>
  );
}
