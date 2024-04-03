import React, { ReactElement } from "react";
import { twMerge } from "tailwind-merge";

export type ButtonProps = {
  icon: ReactElement;
} & React.PropsWithChildren;

export function Button({ children, icon }: ButtonProps) {
  return (
    <button
      type="button"
      className="bg-[var(--bg)] p-[1rem] rounded-full w-[150px] b-0 text-[var(--text)] cursor-pointer font-semibold flex justify-center items-center"
    >
      {children}
      <span className="icon w-[1rem] h-[1rem] ml-[8px]">{icon}</span>
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
