import React from "react";
import TransactionStep from "./../TransactionStep/index";
import Image from "next/image";
import TableRow from "./TableRow";
import ButtonTab from "./ButtonTab";

type Props = {};

const TransactionContent = (props: Props) => {
  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          My Transactions
        </h2>
        <div className="mb-30">
          <p className="text-lg color-palette-2 mb-12">You’ve spent</p>
          <h3 className="text-5xl fw-medium color-palette-1">
            Rp 4.518.000.500
          </h3>
        </div>
        <div className="row mt-30 mb-20">
          <div className="col-lg-12 col-12 main-content">
            <div id="list_status_title">
              <ButtonTab dataFilter="*" href="#" isActive>
                All Trx
              </ButtonTab>
              <ButtonTab dataFilter="success" href="#">
                Success
              </ButtonTab>
              <ButtonTab dataFilter="Pending" href="#">
                Pending
              </ButtonTab>
              <ButtonTab dataFilter="failed" href="#">
                Failed
              </ButtonTab>
            </div>
          </div>
        </div>
        <div className="latest-transaction">
          <p className="text-lg fw-medium color-palette-1 mb-14">
            Latest Transactions
          </p>
          <div className="main-content main-content-table overflow-auto">
            <table className="table table-borderless">
              <thead>
                <tr className="color-palette-1">
                  <th className="" scope="col">
                    Game
                  </th>
                  <th scope="col">Item</th>
                  <th scope="col">Price</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody id="list_status_item">
                <TableRow
                  image="/img/overview-1.png"
                  category="Desktop"
                  item={200}
                  price={290000}
                  status="Pending"
                  title="Mobile Legends: The New Battle 2021"
                />
                <TableRow
                  image="/img/overview-1.png"
                  category="Desktop"
                  item={200}
                  price={290000}
                  status="Success"
                  title="Mobile Legends: The New Battle 2021"
                />
                <TableRow
                  image="/img/overview-1.png"
                  category="Desktop"
                  item={200}
                  price={290000}
                  status="Failed"
                  title="Mobile Legends: The New Battle 2021"
                />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TransactionContent;
