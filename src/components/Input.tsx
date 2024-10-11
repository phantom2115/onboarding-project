import { ChangeEvent } from "react";

interface InputProps {
  placeholder: string;
  type: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
const Input = ({ placeholder, type, value, onChange }: InputProps) => {
  return (
    <input
      className="w-full border border-x-0 border-t-0 border-[#494949] pl-1 h-8"
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
