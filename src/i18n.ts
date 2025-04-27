// src/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      ManLab: "ManLab",
      關於教授: "About Professor",
      合作對象: "Partners",
      研究計畫: "Research Projects",
      實驗室成員: "Lab Members",
      畢業學長姊: "Alumni",
      活動花絮: "Activities",
      footerText:
        "Department of Materials Science and Engineering, NTHU, Material Research Building R103",
      // 如果之後有其他頁面也可以加在這裡
    },
  },
  zh: {
    translation: {
      ManLab: "ManLab", // 這個就直接用英文名字沒問題
      關於教授: "關於教授",
      合作對象: "合作對象",
      研究計畫: "研究計畫",
      實驗室成員: "實驗室成員",
      畢業學長姊: "畢業學長姊",
      活動花絮: "活動花絮",
      footerText: "國立清華大學材料科學工程學系 材料實驗館R103",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "zh", // 預設中文
  fallbackLng: "zh",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
