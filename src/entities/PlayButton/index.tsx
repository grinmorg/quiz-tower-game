import { Button, ButtonProps } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

type UIButtonProps = {
  text?: string;
} & ButtonProps;

export default function PlayButton({
  text = "Начать играть",
  ...props
}: UIButtonProps) {
  return (
    <Button
      {...props}
      className="duration-[400ms] group relative rounded-sm px-4 py-2 font-medium text-slate-100 transition-colors hover:text-indigo-300"
      as={Link}
      color="primary"
      variant="flat"
    >
      <span>{text}</span>

      {/* TOP */}
      <span className="absolute left-0 top-0 h-[2px] w-0 bg-indigo-300 transition-all duration-100 group-hover:w-full" />

      {/* RIGHT */}
      <span className="absolute right-0 top-0 h-0 w-[2px] bg-indigo-300 transition-all delay-100 duration-100 group-hover:h-full" />

      {/* BOTTOM */}
      <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-indigo-300 transition-all delay-200 duration-100 group-hover:w-full" />

      {/* LEFT */}
      <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-indigo-300 transition-all delay-300 duration-100 group-hover:h-full" />
    </Button>
  );
}
