import PlayButton from "@/entities/PlayButton";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

export default function UINavbar() {
  return (
    <Navbar>
      <NavbarBrand>
        <Link href="/"><p className="font-bold text-inherit text-white">QUIZ TOWER</p></Link>
      </NavbarBrand>
      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Список комнат
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Маркет
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Топ игроков
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Есть идея
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link className="text-gray-400" href="#">Войти</Link>
        </NavbarItem>
        <NavbarItem>
          <PlayButton href="#" text="Регистрация" />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
