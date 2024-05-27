import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div
      className={twMerge(
        "max-w-1440 mx-auto desktop:px-32 px-14 overflow-hidden",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
