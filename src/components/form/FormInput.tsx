import { InputHTMLAttributes } from "react";
import clsx from "clsx";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function FormInput({ className, ...props }: InputProps) {
  return (
    <input
      {...props}
      className={clsx(
        "w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm",
        "placeholder:text-gray-400",
        "focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100",
        "transition",
        className
      )}
    />
  );
}