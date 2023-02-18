import React from "react";

type Props = {
  dataFilter: string;
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
};

const ButtonTab = ({ dataFilter, href, children, isActive = false }: Props) => {
  return (
    <a
      data-filter={dataFilter}
      href={href}
      className={`btn btn-status rounded-pill text-sm ${isActive && "btn-active"} me-3`}
    >
      {children}
    </a>
  );
};

export default ButtonTab;
