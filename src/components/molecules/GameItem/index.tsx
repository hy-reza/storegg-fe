import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  href: string;
  thumbnail: number;
  title: string;
  device: string;
};

const GameItem = ({ href, thumbnail, title, device }: Props) => {
  return (
    <div className="featured-game-card position-relative">
      <Link href={href}>
        <div className="blur-sharp">
          <Image
            src={`/img/Thumbnail-${thumbnail}.png`}
            className="thumbnail"
            width="205"
            height="270"
            alt={`thumb${thumbnail}`}
          />
        </div>
        <div className="cover position-absolute bottom-0 m-32">
          <div className="d-flex flex-column h-100 justify-content-between text-decoration-none">
            <div className="game-icon mx-auto">
              <Image
                src="/icon/console.svg"
                alt="jostick"
                width={54}
                height={36}
              />
            </div>
            <div>
              <p className="fw-semibold text-white text-xl m-0">{title}</p>
              <p className="fw-light text-white m-0">{device}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default GameItem;
