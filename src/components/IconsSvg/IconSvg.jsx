import { ReactSVG } from "react-svg";
import PropTypes from "prop-types";
import "./IconSvg.css";

export default function IconSvg({ iconName, customClass = " " }) {
  return (
    <ReactSVG
      data-component="icon-svg"
      src={`/icons/${iconName}.svg`}
      wrapper="span"
      className={`svg-icon ${customClass}`}
    />
  );
}

IconSvg.propTypes = {
  iconName: PropTypes.string.isRequired,
  customClass: PropTypes.string,
};
