import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import { EffectFade, Autoplay } from "swiper";
import {
  WorkSlideContainer,
  WorkDetailsSection,
  Parttitle,
  Partdesc,
  TechniquesTitle,
  WorkImagesSection,
  WorkInnerImage,
  SeeMoreButton,
  TechniquesIconsContainer,
  TechniqueImage,
} from "./Style";
const WorkCardFullSlide = ({
  item,
  applyAnimationOnImage,
  applyAnimationOnText,
}) => {
  const innerParams = {
    slidesPerView: 1,
    autoplay: {
      delay: 650,
      disableOnInteraction: false,
    },
    loop: true,
    modules: [EffectFade, Autoplay],
  };
  return (
    <WorkSlideContainer>
      <WorkDetailsSection className={applyAnimationOnText && "fadeRightText"}>
        <Parttitle>{item.title}</Parttitle>
        <Partdesc>{item.description}</Partdesc>
        <TechniquesTitle>Techniques</TechniquesTitle>
        <TechniquesIconsContainer>
          {item.techniques.map((tech) => (
            <TechniqueImage src={tech.icon} key={tech.techName} />
          ))}
        </TechniquesIconsContainer>
        <SeeMoreButton onClick={() => window.open(`${item.link}`, "_blank")}>
          Visit
        </SeeMoreButton>
      </WorkDetailsSection>
      <WorkImagesSection className={applyAnimationOnImage && "fadeLeftImage"}>
        <Swiper
          {...innerParams}
          effect="fade"
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          {item.images.map((imgSrc, index) => {
            return (
              <SwiperSlide key={index}>
                <WorkInnerImage src={imgSrc} alt="ProjectImage" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </WorkImagesSection>
    </WorkSlideContainer>
  );
};
export default WorkCardFullSlide;
