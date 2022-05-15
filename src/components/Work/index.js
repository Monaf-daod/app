import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import { Keyboard, EffectFade, Autoplay } from "swiper";
import WorkCardFullSlide from "./WorkCardFullSlide";
// Import Swiper styles
import {
  WorkSection,
  Worktitle,
  WorkSwiperContainer,
  WorkSliderButtonsContainer,
  ChevronLeftButton,
  ChevronRightButton,
} from "./Style.js";
import { data } from "./data";
import "swiper/swiper-bundle.css";

const Works = ({ workRef }) => {
  const swiperWorksRef = useRef(null);

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
      delay: 15000,
      disableOnInteraction: true,
    },
    modules: [EffectFade, Autoplay, Keyboard],
    pagination: false,
    navigation: false,
  };

  const workList = data.map((workItem) => (
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
    <WorkSection ref={workRef} data-aos="fade-right">
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
