import { ComponentProps } from "react";
import { Link, LinkProps } from "react-router-dom";

const Button = ({
  children,
  hidden,
  ...props
}: { hidden?: boolean } & (LinkProps | ComponentProps<"button">)) => {
  const BUTTON_CN = `bg-green-500 text-white w-full px-2 py-2 rounded-md text-center hover:bg-green-600 ${
    hidden ? "hidden" : ""
  }`;

  if ("to" in props)
    return (
      <Link className={BUTTON_CN} {...props}>
        {children}
      </Link>
    );
  return (
    <button className={BUTTON_CN} {...props}>
      {children}
    </button>
  );
};

export default Button;
