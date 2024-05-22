"use client";
import Slider from "react-slick";

const slides = [
  "president",
  "fake news",
  "russians",
  "cia",
  "epstein",
  "inside job",
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

const Carousel: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 0,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
    <Slider {...settings} arrows={false} pauseOnHover={false}>
      {slides.map((slide, index) => (
        <div key={index}>
            <div  className="flex items-center justify-around">
          <p className="font-josefinsans uppercase text-[36px] text-white">{slide}</p>
          <img src="/flag.svg" alt="flag" /></div>
        </div>
      ))}
    </Slider>
    </div>
  );
};

export default Carousel
