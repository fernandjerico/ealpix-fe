import { cn } from "@/lib/utils";
import React from "react";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  bigPadding?: boolean;
};

export function Maxwidthdiv({
  bigPadding = false,
  className,
  children,
  ...props
}: Props) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-10",
        bigPadding && "px-8 sm:px-10 md:px-12",
        className
      )}
      {...props}>
      {children}
    </div>
  );
}
