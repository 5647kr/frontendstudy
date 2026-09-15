"use client";

import Link from "next/link";
import { ComponentPropsWithoutRef, useState } from "react";

type HoverPrefetchLinkProps = ComponentPropsWithoutRef<typeof Link> & {
  children: React.ReactNode;
};

export default function HoverPrefetchLink({
  href,
  children,
  ...props
}: HoverPrefetchLinkProps) {
  const [active, setActive] = useState(false);
  return (
    <Link
      href={href}
      prefetch={active ? true : false}
      onMouseEnter={() => setActive(true)}
      {...props}>
      {children}
    </Link>
  );
}
