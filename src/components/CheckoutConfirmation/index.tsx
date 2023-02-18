import Link from "next/link";
import React from "react";

type Props = {};

const CheckoutConfirmation = (props: Props) => {
  return (
    <>
      <label className="checkbox-label text-lg color-palette-1 fw-normal">
        I have transferred the money
        <input type="checkbox" />
        <span className="checkmark" />
      </label>
      <div className="d-md-block d-flex flex-column w-100 pt-50">
        <Link
          className="btn btn-confirm-payment rounded-pill fw-medium text-white border-0 text-lg"
          href="/complete-checkout"
          role="button"
        >
          Confirm Payment
        </Link>
      </div>
    </>
  );
};

export default CheckoutConfirmation;
