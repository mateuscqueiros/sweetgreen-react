import { IconMenu2, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { ActionButton } from "../elements";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="menu">
      <div className="container relative w-full max-w-[var(--content-width)] mx-auto md:p-5 md:flex md:flex-row md:justify-between md:items-center">
        <nav
          className={twMerge(
            "absolute top-0 left-[-250px] h-screen bg-white w-[250px] p-5 z-10 shadow-black transition md:bg-transparent md:shadow-black md:static md:w-fit md:h-[unset] md:p-0",
            open ? "left-0 fixed" : null,
          )}
        >
          <div
            className={twMerge(
              "list-container",
              "relative h-full flex flex-col justify-between",
            )}
          >
            <ul className="menu-items-list p-0 m-0 h-[120px] flex flex-col justify-between list-none uppercase md:h-[unset] md:gap-[30px] md:flex-row">
              <li className="menu-item">Our menu</li>
              <li className="menu-item">Our mission</li>
              <li className="menu-item">Outpost</li>
            </ul>
            <IconX
              className="absolute right-0 top-0 cursor-pointer md:hidden"
              onClick={() => setOpen(false)}
            />
            <div className="header-actions-mobile flex w-full gap-[20px] md:hidden">
              <ActionButton variant="primary">Sign in</ActionButton>
              <ActionButton variant="secondary">Order</ActionButton>
            </div>
          </div>
        </nav>
        <div className="header-fixed absolute p-5 flex justify-center items-center md:p-0">
          <IconMenu2
            id="open-menu"
            className="absolute left-[20px] cursor-pointer md:hidden"
            onClick={() => setOpen(true)}
          />
          <img id="logo" />
        </div>
        <div className="header-actions-desktop hidden md:flex">
          <ActionButton variant="primary">Sign in</ActionButton>
          <ActionButton variant="secondary">Order</ActionButton>
        </div>
      </div>
    </header>
  );
}
