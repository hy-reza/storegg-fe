import Sidebar from "@/components/organisms/Sidebar";
import TransactionContent from "@/components/organisms/TransactionContent";
import Image from "next/image";

type Props = {};

const Transasctions = (props: Props) => {
  return (
    <section className="fw-normal transactions overflow-auto">
      <Sidebar activeMenu="transactions" />
      <TransactionContent />
    </section>
  );
};

export default Transasctions;
