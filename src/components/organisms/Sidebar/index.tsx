import Image from "next/image";
import Link from "next/link";
import React from "react";
import Footer from "./Footer";
import MenuItem from "./MenuItem";

type Props = {
  activeMenu: "overview" | "transactions" | "settings";
};

const Sidebar = ({ activeMenu }: Props) => {
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <div className="user text-center pb-50 pe-30">
          <Image
            src="/img/avatar-1.png"
            width="90"
            height="90"
            alt="avatar"
            className="img-fluid mb-20"
          />
          <h2 className="fw-bold text-xl color-palette-1 m-0">Shayna Anne</h2>
          <p className="color-palette-2 m-0">shayna@anne.com</p>
        </div>
        <div className="menus">
          <MenuItem
            text="Overview"
            ic="overview"
            href="/member"
            isActive={activeMenu === "overview"}
          />
          <MenuItem
            text="Transactions"
            ic="transactions"
            href="/member/transactions"
            isActive={activeMenu === "transactions"}
          />
          <MenuItem text="Messages" ic="messages" href="/member/messages" />
          <MenuItem text="Card" ic="card" href="/member/card" />
          <MenuItem text="Rewards" ic="rewards" href="/member/rewards" />
          <MenuItem
            text="Settings"
            ic="settings"
            href="/member/edit-profile"
            isActive={activeMenu === "settings"}
          />
          <MenuItem text="Log Out" ic="logout" href="/sign-in" />
        </div>
        <Footer />
      </div>
    </section>
  );
};

export default Sidebar;
