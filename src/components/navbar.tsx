import * as React from "react";
import {
  IconButton,
  Typography,
  Collapse,
  Navbar,
  Button,
} from "@material-tailwind/react";
import { Menu, Xmark } from "iconoir-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"; // ✅ 引入 i18next

const LINKS = [
  {
    title: "關於教授",
    href: "/professor",
  },
  {
    title: "合作對象",
    href: "/collaborator",
  },
  {
    title: "研究計畫",
    href: "/research",
  },
  {
    title: "實驗室成員",
    href: "/member",
  },
  {
    title: "畢業學長姊",
    href: "/alumni",
  },
  {
    title: "活動花絮",
    href: "/activity",
  },
];

function NavList() {
  const { t } = useTranslation(); // ✅ 翻譯功能也拉進來
  return (
    <ul className="m-2 flex flex-col gap-x-3 gap-y-1 lg:m-0 lg:flex-row lg:items-center">
      {LINKS.map(({ title, href }) => (
        <li key={title}>
          <Link to={href}>
            <Typography type="small" className="p-1 hover:text-primary">
              {t(title)} {/* 之後可以做中英文同步切換 */}
            </Typography>
          </Link>
        </li>
      ))}
    </ul>
  );
}

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const toggleLanguage = () => {
    const newLang = i18n.language === "zh" ? "en" : "zh";
    i18n.changeLanguage(newLang);
  };

  return (
    <Button
      size="sm"
      variant="outline"
      className="ml-2"
      onClick={toggleLanguage}
    >
      {i18n.language === "zh" ? "繁體中文" : "English"}
    </Button>
  );
}

export default function SimpleNavbar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className="mx-auto w-full max-w-screen-xl">
      <div className="flex items-center">
        <Link to="/">
          <Typography type="small" className="mx-2 block py-1 font-semibold">
            ManLab
          </Typography>
        </Link>
        <div className="hidden lg:ml-auto lg:mr-2 lg:flex items-center gap-2">
          <NavList />
          <LanguageSwitcher />
        </div>

        <IconButton
          size="sm"
          variant="ghost"
          color="secondary"
          onClick={() => setOpenNav(!openNav)}
          className="ml-auto grid lg:hidden"
        >
          {openNav ? (
            <Xmark className="h-4 w-4" />
          ) : (
            <Menu className="h-4 w-4" />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <div className="flex flex-col items-center gap-2">
          <NavList />
          <LanguageSwitcher /> {/* ✅ 手機版下拉也加切換按鈕 */}
        </div>
      </Collapse>
    </Navbar>
  );
}
