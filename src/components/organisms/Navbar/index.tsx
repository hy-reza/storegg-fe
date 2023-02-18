import Image from "next/image";
import React, { useState } from "react";
import Menu from "./menu";
import Auth from "./Auth";
import ToggleMenu from "./ToggleMenu";

type Props = {};

const Navbar = (props: Props) => {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  return (
    <section>
      <nav className="fw-normal navbar navbar-expand-lg navbar-light bg-light bg-white pt-lg-40 pb-lg-40 pt-30 pb-50">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <Image src="/icon/logo.svg" alt="" width={60} height={60} />
          </a>
          <ToggleMenu />
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto text-lg gap-lg-0 gap-2">
              <Menu isActive text="Home" href="/" />
              <Menu text="Games" href="/" />
              <Menu text="Rewards" href="/" />
              <Menu text="Discover" href="/" />
              <Menu text="Global Rank" href="/" />
              <Auth {...{ isLogin }} />
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
