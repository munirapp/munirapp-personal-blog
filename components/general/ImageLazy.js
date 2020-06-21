import PropTypes from "prop-types";

function ImageLazy({ src, fallbackSrc, alt }) {
  return (
    <img
      src={isLazy ? fallbackSrc : src}
      alt={alt}
      className={isLazy ? "lazy" : ""}
      data-src={src}
    ></img>
  );
}

ImageLazy.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

ImageLazy.defaultProps = { isLazy: false };

export default ImageLazy;
