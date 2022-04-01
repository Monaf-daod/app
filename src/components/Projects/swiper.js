import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import { Button, Modal, ModalBody, ModalHeader, Row, Col } from "reactstrap";
import SwiperCore, { Navigation, Pagination, Thumbs, Zoom } from "swiper";
import ImageLoader from "./ImageLoader";
import ZoomInSVG from "../../assets/loadingImages/zoomIn.svg";
import ZoomOutSVG from "../../assets/loadingImages/zoomOut.svg";
import "swiper/swiper-bundle.css";

const SwiperWithGallery = ({ imagesArr, showZoomIn = false }) => {
  const swiperRef = useRef(null);
  const swiperZoomRef = useRef(null);
  const [zoomInModal, setZoomInModal] = useState(false);
  const [zoomOutStatus, setZoomOutStatus] = useState(false);
  const toggleModal = () => {
    setZoomInModal(!zoomInModal);
  };
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const params = {
    slidesPerView: 1,
    spaceBetween: 10,
    // pagination: {
    //   clickable: true,
    // },
    loop: false,
    navigation: false,
  };

  SwiperCore.use([Zoom, Navigation, Thumbs]);
  return (
    <div>
      <img
        src={ZoomInSVG}
        onClick={toggleModal}
        hidden={!imagesArr.length || !showZoomIn}
        width={30}
        height={30}
        className="cursor-pointer"
      />
      <Modal
        isOpen={zoomInModal}
        toggle={toggleModal}
        className="modal-fullscreen-xxl-down"
        backdrop="static"
      >
        <ModalBody>
          <div className="d-flex justify-content-end">
            <img
              src={ZoomInSVG}
              onClick={() => {
                swiperZoomRef.current.swiper.zoom.in();
                setZoomOutStatus(true);
              }}
              width={30}
              height={30}
              hidden={zoomOutStatus}
              className="cursor-pointer mx-2 my-auto"
            />
            <img
              src={ZoomOutSVG}
              onClick={() => {
                swiperZoomRef.current.swiper.zoom.out();
                setZoomOutStatus(false);
              }}
              width={30}
              height={30}
              hidden={!zoomOutStatus}
              className="cursor-pointer mx-2 my-auto"
            />
            <Button onClick={toggleModal} close className="btn" size="lg" />
          </div>
          <div className="d-flex justify-content-center w-100 mt-5">
            <Swiper
              className="w-75"
              id="controller"
              slidesPerView={1}
              spaceBetween={1}
              zoom={{ maxRatio: 5 }}
              ref={swiperZoomRef}
              onInit={() =>
                swiperZoomRef.current.swiper.slideTo(
                  swiperRef.current.swiper.activeIndex
                )
              }
              onSlideChange={(swiper) =>
                swiperRef.current.swiper.slideTo(swiper.activeIndex)
              }
            >
              {imagesArr.map((item, index) => (
                <SwiperSlide
                  key={`control${item.id}-${index}`}
                  zoom={true}
                  className="text-center"
                >
                  <ImageLoader
                    imageSrc={item}
                    width="400"
                    height="400"
                    imageAlt="product"
                    loadingWidth="75"
                    loadingHeight="75"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </ModalBody>
      </Modal>

      <Swiper
        id="main"
        tag="section"
        wrapperTag="ul"
        {...params}
        ref={swiperRef}
        thumbs={{ swiper: thumbsSwiper }}
      >
        {imagesArr.length > 0 ? (
          <>
            {imagesArr.map((item, index) => (
              <SwiperSlide
                tag="li"
                key={`main${item.id}-${index}`}
                className="text-center cursor-pointer"
              >
                <ImageLoader
                  imageSrc={item}
                  width="400"
                  height="400"
                  imageAlt="product"
                  loadingWidth="75"
                  loadingHeight="75"
                  className="w-100"
                />
              </SwiperSlide>
            ))}
          </>
        ) : (
          <img src="/images/no-image.png" width="80%" />
        )}
      </Swiper>
      <Swiper
        id="thumbs"
        onSwiper={setThumbsSwiper}
        slidesPerView={4}
        spaceBetween={4}
      >
        {imagesArr.map((item, index) => (
          <SwiperSlide
            key={`thumbs${item.id}-${index}`}
            className="cursor-pointer"
          >
            <ImageLoader
              imageSrc={item}
              width="60"
              height="60"
              imageAlt="product"
              loadingWidth="30"
              loadingHeight="30"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperWithGallery;
