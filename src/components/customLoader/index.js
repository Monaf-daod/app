import React from "react";

const Loader = () => {
  return (
    <div className="loader-fullwidth d-flex justify-content-center align-items-center">
      <section>
        <div className="loader loader-2">
          <svg
            className="loader-star"
            xmlns="http://www.w3.org/2000/svg"
            xlink="http://www.w3.org/1999/xlink"
            version="1.1"
          >
            <polygon
              points="29.8 0.3 22.8 21.8 0 21.8 18.5 35.2 11.5 56.7 29.8 43.4 48.2 56.7 41.2 35.1 59.6 21.8 36.8 21.8 "
              fill="var(--primary-font-color)"
            />
          </svg>
          <div className="loader-circles"></div>
        </div>
      </section>
    </div>
  );
};

export default Loader;
