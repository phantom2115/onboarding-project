import { ComponentProps } from "react";

const Input = ({ ...props }: ComponentProps<"input">) => {
  return (
    <input
      className="w-full border-b border-[#494949] px-1.5 h-8 outline-none hover:border-green-500 focus-visible:bg-green-50"
      {...props}
    />
  );
};

export default Input;
