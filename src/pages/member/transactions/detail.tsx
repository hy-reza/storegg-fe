import React from "react";
import Image from "next/image";
import Sidebar from "@/components/organisms/Sidebar";
import TransactionDetailContent from "@/components/organisms/TransactionDetailContent";

type Props = {};

const Detail = (props: Props) => {
  return (
    <section className="fw-normal transactions-detail overflow-auto">
      <Sidebar activeMenu="transactions" />
      <TransactionDetailContent />
    </section>
  );
};

export default Detail;
