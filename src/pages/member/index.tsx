import React from "react";
import Image from "next/image";
import Sidebar from "@/components/organisms/Sidebar";
import OverviewContent from "@/components/organisms/OverviewContent";

type Props = {};

const Member = (props: Props) => {
  return (
    <section className="fw-normal overview overflow-auto">
      <Sidebar activeMenu="overview" />
      <OverviewContent />
    </section>
  );
};

export default Member;
