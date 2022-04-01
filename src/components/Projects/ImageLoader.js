import { Fragment, useState } from "react";
import LoadingGif from "../../assets/loadingImages/loading-buffering.gif";
import NoImage from "../../assets/loadingImages/no-image-200x200.png";

const ImageLoader = ({
  imageSrc,
  imageAlt = "alt",
  width = "200",
  height = "200",
  loadingWidth = "75",
  loadingHeight = "75",
  className,
  altWidth = "100%",
  fit = "scale-down",
}) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isImageError, setIsImageError] = useState(false);

  const LoadingImage = (
    <div
      style={{ height: `${height}px` }}
      className="d-flex justify-content-center align-items-center"
    >
      <img src={LoadingGif} width={loadingWidth} height={loadingHeight} />
    </div>
  );

  const ErrorImage = <img src={NoImage} width={altWidth} height={height} />;

  return (
    <Fragment>
      {!isImageLoaded && !isImageError && LoadingImage}
      {isImageError && ErrorImage}
      <img
        src={imageSrc}
        alt={imageAlt}
        className={`${isImageLoaded ? className : "d-none"}`}
        style={{
          width: `${width}px`,
          height: `${height}px`,
          objectFit: fit,
        }}
        onLoad={() => setIsImageLoaded(true)}
        onError={() => setIsImageError(true)}
      />
    </Fragment>
  );
};

export default ImageLoader;
