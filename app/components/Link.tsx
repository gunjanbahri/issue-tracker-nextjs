import React from "react";
import NextLink from "next/link";
import { Link as RadixLink } from "@radix-ui/themes";

interface Props {
  href: string;
  children: string;
}
export const Link = ({ href, children }: Props) => {
  return (
    <NextLink href={href} passHref legacyBehavior>
      <RadixLink className="text-blue-500 hover:text-blue-700">
        {children}
      </RadixLink>
    </NextLink>
  );
};
