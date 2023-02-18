import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  ic: string;
  text: string;
  isActive?: boolean;
  href: string;
};

const MenuItem = ({ href, ic, text, isActive = false }: Props) => {
  return (
    <div className={`item ${isActive && "active"} mb-30`}>
      <Image
        src={`/icon/ic-${ic}.svg`}
        alt=""
        width={25}
        height={25}
        className="me-3"
      />
      <p className="item-title m-0">
        <Link href={href} className="text-lg text-decoration-none">
          {text}
        </Link>
      </p>
    </div>
  );
};

export default MenuItem;
