import GameItem from "@/components/molecules/GameItem";
import Image from "next/image";
import React from "react";

type Props = {};

const FeaturedGame = (props: Props) => {
  return (
    <section className="featured-game pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          Our Featured
          <br /> Games This Year
        </h2>
        <div
          className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
          data-aos="fade-up"
        >
          <GameItem
            href="/detail"
            thumbnail={1}
            title="Super Mechs"
            device="Mobile"
          />
          <GameItem
            href="/detail"
            thumbnail={2}
            title="Call of Duty: Modern"
            device="Mobile"
          />
          <GameItem
            href="/detail"
            thumbnail={3}
            title="CMobile Legends"
            device="Mobile"
          />
          <GameItem
            href="/detail"
            thumbnail={4}
            title="Clash of Clans"
            device="Mobile"
          />
          <GameItem
            href="/detail"
            thumbnail={5}
            title="Valorant"
            device="Mobile"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedGame;
