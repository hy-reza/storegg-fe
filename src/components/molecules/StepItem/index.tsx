import Image from "next/image";
import React from "react";

type Props = { icon: 1 | 2 | 3; title: string; desc1: string; desc2: string };

const StepItem = ({ icon, title, desc1, desc2 }: Props) => {
  return (
    <div className="col-lg-4">
      <div className="card feature-card border-0">
        <Image
          src={`/icon/step${icon}.svg`}
          alt=""
          className="mb-30"
          width={80}
          height={80}
        />
        <p className="fw-semibold text-2xl mb-2 color-palette-1">{title}</p>
        <p className="text-lg color-palette-1 mb-0">
          {desc1}
          <br />
          {desc2}
        </p>
      </div>
    </div>
  );
};

export default StepItem;
