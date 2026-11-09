import "./styles.css";
import PropTypes from "prop-types";

function Button({ children, thema, ...props }) {
  return (
    <button {...props} className={`w-full h-8.75 ${thema === "bn-option1" ? "bg-linear-65 from-purple-500 to-pink-500" : "bg-transparent"} ${thema === "bn-option1" ? "" : "border border-purple-500"} rounded-md  cursor-pointer text-[#ffffff] text-[15px] font-semibold hover:opacity-75 active:opacity-50`}>{children}</button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  thema: PropTypes.string,
};

export default Button;
