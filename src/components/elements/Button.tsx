import React, { ReactElement } from "react";
import { twMerge } from "tailwind-merge";

export type ButtonProps = {
  icon?: ReactElement;
  className?: string;
} & React.PropsWithChildren;

export function Button({ children, className, icon }: ButtonProps) {
  return (
    <button
      type="button"
      className={twMerge(
        "bg-[var(--button)] p-4 rounded-full w-[150px] b-0 text-black cursor-pointer font-semibold flex justify-center items-center",
        className || "",
      )}
    >
      {children}
      {icon && <span>{icon}</span>}
    </button>
  );
}

export type ActionButtonProps = {
  variant: "primary" | "secondary";
} & React.PropsWithChildren;

export function ActionButton({ variant, children }: ActionButtonProps) {
  let colors = "";

  if (variant === "primary") {
    colors = "bg-[var(--header-text)] text-white";
  }

  if (variant === "secondary") {
    colors = "text-[var(--header-text)] bg-none";
  }

  return (
    <div
      className={twMerge(
        colors,
        "font-light uppercase rounded-full py-[6px] px-[20px] border-0 cursor-pointer hover:opacity-80",
      )}
    >
      {children}
    </div>
  );
}
