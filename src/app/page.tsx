"use client";
import Slider from "react-slick";

const slides = [
  "president",
  "fake news",
  "russians",
  "cia",
  "did epstein kill himself?",
  "911 was an inside job",
  "only fans",
  "burgers",
  "consume",
  "black friday",
  "the american dream",
  "$1 stores",
  "wallmart",
  "naughty america",
  "step mom",
  "trump 2024",
  "dimentia",
  "hoe biden",
  "hunter biden",
  "mcdonalds",
  "fat",
  "guns",
  "republican",
  "democrat",
];

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-start py-[120px]">
      <img src="/prez.svg" alt="prez" />
      <p className="font-microgamma mb-6">
        <span className="text-bg-blue text-[56px] leading-[auto]">PREZ</span>
        &nbsp;
        <span className="text-app-red text-[56px] leading-[auto]">FLIP</span>
      </p>
      <p className="font-josefinsans text-black text-[32px]">
        Make America Gamble Again
      </p>
      <img src="/coming-soon.svg" alt="coming-soon" className="my-[40px]" />
      <img src="/how-it-works.svg" alt="how-it-works" />
    </div>
  );
}
