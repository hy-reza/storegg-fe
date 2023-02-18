import Link from "next/link";
import React from "react";

type Props = { isActive?: boolean; text: string; href?: string };

const Menu = ({ isActive, text, href = "/" }: Props) => {
  return (
    <li className="nav-item my-auto">
      <Link
        className={`nav-link ${isActive && "active"}`}
        aria-current="page"
        href={`${href}`}
      >
        {text}
      </Link>
    </li>
  );
};

export default Menu;
