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
        <p className="font-bold text-inherit">QUIZ TOWER</p>
      </NavbarBrand>
      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        <NavbarItem isActive>
          <Link href="#">Главная</Link>
        </NavbarItem>
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
            Есть идея
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link className="text-gray-400" href="#">Войти</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Регистрация
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
