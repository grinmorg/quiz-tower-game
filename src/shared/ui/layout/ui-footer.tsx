import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

export default function UIFooter() {
  return (
    <div className="container mx-auto">
      <div className="flex items-end justify-between gap-4 py-4 text-slate-300">
        <p>QUIZ TOWER</p>
        <p>
          Есть хороший вопрос?<br></br> Будем рады видеть его в разделе{" "}
          <Link href="#" className=" font-bold">есть идея</Link>
        </p>
      </div>
    </div>
  );
}
