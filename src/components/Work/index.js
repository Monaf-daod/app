import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import { Keyboard, EffectFade, Autoplay } from "swiper";
import ImageLoader from "../Projects/ImageLoader";
import WorkCardFullSlide from "./WorkCardFullSlide";
// Import Swiper styles
import "swiper/swiper-bundle.css";
import {
  WorkSection,
  Worktitle,
  WorkSwiperContainer,
  WorkSliderButtonsContainer,
  ChevronLeftButton,
  ChevronRightButton,
} from "./Style.js";

const Works = ({ workRef }) => {
  const swiperWorksRef = useRef(null);
  const [works, setWorks] = useState([]);

  const goNext = (swiperRef) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };
  const goPrev = (swiperRef) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };
  const params = {
    grabCursor: true,
    slidesPerView: 1,
    loop: true,
    keyboard: {
      enabled: true,
    },
    autoplay: {
      delay: 10000,
      disableOnInteraction: false,
    },
    modules: [EffectFade, Autoplay, Keyboard],
    pagination: false,
    navigation: false,
  };

  useEffect(() => {
    axios.get("js/data.json").then((res) => {
      setWorks(res.data.works);
    });
  }, []);

  const workList = works.map((workItem) => (
    <SwiperSlide key={workItem.id}>
      {({ isActive }) => (
        <WorkCardFullSlide
          item={workItem}
          applyAnimationOnImage={isActive}
          applyAnimationOnText={isActive}
        />
      )}
    </SwiperSlide>
  ));

  return (
    <WorkSection ref={workRef} data-aos="zoom-in" data-aos-duration="1000">
      <Worktitle>Projects</Worktitle>
      <WorkSwiperContainer>
        <Swiper
          {...params}
          effect="fade"
          ref={swiperWorksRef}
          style={{
            position: "relative",
          }}
        >
          <WorkSliderButtonsContainer>
            <ChevronLeftButton
              size={26}
              onClick={() => goPrev(swiperWorksRef)}
            />
            <ChevronRightButton
              size={26}
              onClick={() => goNext(swiperWorksRef)}
            />
          </WorkSliderButtonsContainer>
          {workList}
        </Swiper>
      </WorkSwiperContainer>
    </WorkSection>
  );
};

export default Works;
