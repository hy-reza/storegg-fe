import CheckoutItem from "@/components/organisms/CheckoutItem";
import Image from "next/image";
import React from "react";
import CheckoutDetail from "./../components/CheckoutDetail/index";
import CheckoutConfirmation from "@/components/CheckoutConfirmation";
import Link from "next/link";

type Props = {};

const checkout = (props: Props) => {
  return (
    <section className="fw-normal checkout mx-auto pt-md-100 pb-md-145 pt-30 pb-30">
      <div className="container-fluid">
        <div className="logo text-md-center text-start pb-50">
          <Link className="" href="/">
            <Image src="/icon/logo.svg" alt="" width={60} height={60} />
          </Link>
        </div>
        <div className="title-text pt-md-50 pt-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-10">Checkout</h2>
          <p className="text-lg color-palette-1 mb-0">
            Waktunya meningkatkan cara bermain
          </p>
        </div>
        <CheckoutItem />
        <hr />
        <CheckoutDetail />
        <CheckoutConfirmation />
      </div>
    </section>
  );
};

export default checkout;
