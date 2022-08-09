import { useState, useEffect } from "react";

import style from "./Slider.module.scss";

const data = [
  { id: 1, img: "img/slider/first_slide.png" },
  { id: 2, img: "img/slider/second_slide.png" },
  { id: 3, img: "img/slider/third_slide.png" },
  { id: 4, img: "img/slider/fourth_slide.png" },
  { id: 4, img: "img/slider/fifth_slide.png" },
];

const Slider = () => {
  let [index, setIndex] = useState(1);
  let { img } = data[index];

  const checkNumber = (i) => {
    if (i < 0) {
      return data.length - 1;
    } else if (i > data.length - 1) {
      return 0;
    }
    return i;
  };
  const nextSlider = () => {
    setIndex((index) => checkNumber(index + 1));
  
  };
  const prevSlider = () => {
    setIndex((index) => checkNumber(index - 1));
  };
  useEffect(() => {
    setInterval(nextSlider, 10000);

    return function () {
        clearInterval(nextSlider)
     
    };
  }, []);
  return (
    <div className={style.slider}>
      <div
        className={style.sliderItem}
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div className={style.sliderButtons}>
        <button className={style.sliderButton} onClick={prevSlider}>
          <img src="img/left_arrow.svg" />
        </button>
        <button className={style.sliderButton} onClick={nextSlider}>
          <img src="img/right_arrow.svg" />
        </button>
      </div>
    </div>
  );
};
export default Slider;
