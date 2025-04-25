import * as React from "react";
import {
  IconButton,
  Typography,
  Collapse,
  Navbar,
} from "@material-tailwind/react";
import { Menu, Xmark } from "iconoir-react";
import { Link } from "react-router-dom"; // ✅ 新增這一行

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
  return (
    <ul className="m-2 flex flex-col gap-x-3 gap-y-1 lg:m-0 lg:flex-row lg:items-center">
      {LINKS.map(({ title, href }) => (
        <li key={title}>
          <Link to={href}>
            <Typography type="small" className="p-1 hover:text-primary">
              {title}
            </Typography>
          </Link>
        </li>
      ))}
    </ul>
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
        <div className="hidden lg:ml-auto lg:mr-2 lg:block">
          <NavList />
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
        <NavList />
      </Collapse>
    </Navbar>
  );
}
