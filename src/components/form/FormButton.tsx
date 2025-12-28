import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function FormButton({ className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={clsx(
        "inline-flex w-full items-center justify-center rounded-lg",
        "bg-hp-primary px-4 py-2.5 text-sm font-medium text-white hover:cursor-pointer",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        "transition",
        className
      )}
    />
  );
}