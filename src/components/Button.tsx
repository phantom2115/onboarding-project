import { MouseEvent, PropsWithChildren } from "react";
import { Link } from "react-router-dom";
interface DefaultProps {
  fill?: boolean;
}

interface LinkProps extends DefaultProps {
  href: string;
}

interface ButtonProps extends DefaultProps {
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({
  children,
  fill = false,
  ...props
}: PropsWithChildren<LinkProps | ButtonProps>) => {
  const BUTTON_CN = "bg-green-500 text-white w-full py-2 rounded-md";

  if ("href" in props)
    return (
      <Link to={props.href} className={BUTTON_CN}>
        {children}
      </Link>
    );
  return (
    <button className={BUTTON_CN} onClick={props?.onClick}>
      {children}
    </button>
  );
};

export default Button;
