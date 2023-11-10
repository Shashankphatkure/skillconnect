import React from "react";

const sizeClasses = {
  txtGilroySemiBold16Black90002: "font-gilroy font-semibold",
  txtGilroySemiBold24: "font-gilroy font-semibold",
  txtGilroySemiBold20: "font-gilroy font-semibold",
  txtSFProTextRegular15: "font-normal font-sfprotext",
  txtSFProTextRegular11: "font-normal font-sfprotext",
  txtGilroyMedium16BlueA700: "font-gilroy font-medium",
  txtGilroyRegular18: "font-gilroy font-normal",
  txtGilroySemiBold18Bluegray900: "font-gilroy font-semibold",
  txtGilroyMedium16Gray90002: "font-gilroy font-medium",
  txtGilroyBold28: "font-bold font-gilroy",
  txtGilroySemiBold32: "font-gilroy font-semibold",
  txtGilroySemiBold18Bluegray400: "font-gilroy font-semibold",
  txtGilroyBold24: "font-bold font-gilroy",
  txtPoppinsRegular14: "font-normal font-poppins",
  txtGilroySemiBold16Black900: "font-gilroy font-semibold",
  txtGilroyMedium14Bluegray400: "font-gilroy font-medium",
  txtGilroySemiBold16BlueA700: "font-gilroy font-semibold",
  txtGilroyBold18: "font-bold font-gilroy",
  txtGilroyMedium16Black900: "font-gilroy font-medium",
  txtGilroyBold52: "font-bold font-gilroy",
  txtGilroySemiBold18Black90001: "font-gilroy font-semibold",
  txtGilroyMedium24: "font-gilroy font-medium",
  txtOpenSansRomanSemiBold12WhiteA700: "font-opensans font-semibold",
  txtPoppinsMedium12: "font-medium font-poppins",
  txtGilroyMedium16Bluegray400: "font-gilroy font-medium",
  txtGilroyMedium16Bluegray40002: "font-gilroy font-medium",
  txtPoppinsMedium18: "font-medium font-poppins",
  txtGilroyMedium14Black900: "font-gilroy font-medium",
  txtPoppinsMedium16: "font-medium font-poppins",
  txtGilroyMedium14Black90002: "font-gilroy font-medium",
  txtOpenSansRomanSemiBold16: "font-opensans font-semibold",
  txtMontserratMedium14: "font-medium font-montserrat",
  txtGilroyMedium10: "font-gilroy font-medium",
  txtPoppinsMedium2367: "font-medium font-poppins",
  txtGilroyMedium14: "font-gilroy font-medium",
  txtGilroyRegular16Bluegray400: "font-gilroy font-normal",
  txtGilroyMedium18BlueA700: "font-gilroy font-medium",
  txtGilroyMedium15: "font-gilroy font-medium",
  txtGilroyRegular12: "font-gilroy font-normal",
  txtGilroyMedium12: "font-gilroy font-medium",
  txtGilroySemiBold18: "font-gilroy font-semibold",
  txtGilroyRegular16Gray900: "font-gilroy font-normal",
  txtGilroyMedium18: "font-gilroy font-medium",
  txtGilroyMedium18WhiteA70001: "font-gilroy font-medium",
  txtGilroySemiBold16: "font-gilroy font-semibold",
  txtGilroyRegular16: "font-gilroy font-normal",
  txtGilroyMedium16: "font-gilroy font-medium",
  txtOpenSansRomanSemiBold12: "font-opensans font-semibold",
  txtGilroyRegular14: "font-gilroy font-normal",
  txtGilroyRegular12Bluegray40002: "font-gilroy font-normal",
  txtGilroyRegular14Black90001: "font-gilroy font-normal",
  txtGilroySemiBold16Bluegray700: "font-gilroy font-semibold",
  txtGilroySemiBold16Bluegray900: "font-gilroy font-semibold",
  txtGilroyMedium18Gray5003: "font-gilroy font-medium",
  txtGilroySemiBold18Gray90002: "font-gilroy font-semibold",
  txtGilroySemiBold18BlueA200: "font-gilroy font-semibold",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
