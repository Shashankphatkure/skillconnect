import React from "react";
import PropTypes from "prop-types";

const shapes = { circle: "rounded-[50%]", round: "rounded-[5px]" };
const variants = {
  outline: {
    blue_gray_400: "border-2 border-blue_gray-400 border-solid",
    blue_gray_300:
      "border border-blue_gray-300 border-solid text-blue_gray-300",
    blue_A700: "border border-blue-A700 border-solid text-blue-A700",
  },
  gradient: { green_400_cc_blue_700_cc: "bg-gradient " },
  fill: {
    indigo_50: "bg-indigo-50",
    gray_300: "bg-gray-300",
    gray_50_02: "bg-gray-50_02",
    gray_900_03: "bg-gray-900_03",
    black_900_99: "bg-black-900_99 text-white-A700",
    blue_gray_50: "bg-blue_gray-50",
    blue_50: "bg-blue-50 text-blue-A700",
    blue_A700: "bg-blue-A700 text-white-A700",
    white_A700: "bg-white-A700",
  },
};
const sizes = {
  xs: "p-1",
  sm: "pl-[7px] py-[7px]",
  md: "pr-2 py-2",
  lg: "p-[9px]",
  xl: "p-3",
  "2xl": "pr-3.5 py-3.5",
  "3xl": "p-[15px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "2xl", "3xl"]),
  variant: PropTypes.oneOf(["outline", "gradient", "fill"]),
  color: PropTypes.oneOf([
    "blue_gray_400",
    "blue_gray_300",
    "blue_A700",
    "green_400_cc_blue_700_cc",
    "indigo_50",
    "gray_300",
    "gray_50_02",
    "gray_900_03",
    "black_900_99",
    "blue_gray_50",
    "blue_50",
    "white_A700",
  ]),
};

export { Button };
