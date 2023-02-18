import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "@/components/organisms/Navbar";
import MainBenner from "@/components/organisms/MainBanner/MainBenner";
import TransactionStep from "./../components/organisms/TransactionStep/index";
import FeaturedGame from "@/components/organisms/FeaturedGame";
import Reached from "@/components/organisms/Reached";
import Story from "@/components/organisms/Story";
import Footer from "@/components/organisms/Footer";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="fw-normal">
      {/*Navbar*/}
      <Navbar />
      {/* Header */}
      <MainBenner />
      {/* 3 Column - Feature */}
      <TransactionStep />
      {/* 5 Column - Featured-game */}
      <FeaturedGame />
      {/* Reached */}
      <Reached />
      {/* Story */}
      <Story />
      {/* Footer */}
      <Footer/>
    </div>
  );
}
