import React from "react";

type Props = { label: string; value: string | number; isTotal?: boolean };

const Row = ({ label, value, isTotal = false }: Props) => {
  return (
    <p className={`text-lg color-palette-1 mb-20`}>
      {label}
      <span className={`purchase-details ${isTotal && "color-palette-4"}`}>
        {value}
      </span>
    </p>
  );
};

export default Row;
