import React, { useRef, useState, useEffect } from "react";
import { data } from "./data";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import { Keyboard, EffectFade, Autoplay } from "swiper";
import WorkCardFullSlide from "./WorkCardFullSlide";
import {
  WorkSection,
  Worktitle,
  WorkSwiperContainer,
  WorkSliderButtonsContainer,
  ChevronLeftButton,
  ChevronRightButton,
} from "./Style.js";
import "swiper/swiper-bundle.css";

const Works = () => {
  const swiperWorksRef = useRef(null);
  const [worksList, setWorksList] = useState([]);
  useEffect(() => {
    setWorksList([...data]);
  }, []);
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
      delay: 5000,
      disableOnInteraction: true,
    },
    modules: [EffectFade, Autoplay, Keyboard],
    pagination: false,
    navigation: false,
  };

  const renderWorkList = worksList.map((workItem) => (
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
    <WorkSection id="work-section">
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
          {renderWorkList}
        </Swiper>
      </WorkSwiperContainer>
    </WorkSection>
  );
};

export default Works;
