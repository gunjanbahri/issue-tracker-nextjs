import React from "react";
import NextLink from "next/link";

interface Props {
  href: string;
  children: string;
}
export const Link = ({ href, children }: Props) => {
  return (
    <NextLink href={href} className="text-purple-500 hover:text-purple-700">
      {children}
    </NextLink>
  );
};
