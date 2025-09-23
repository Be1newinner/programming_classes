import { HTMLAttributes, ReactNode } from "react";

export default function SuperDiv2({
  children = "",
  className,
  ...props
}: {
  children?: ReactNode;
  className?: string;
} & HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="bg-red-500" {...props}>
      {children}
    </div>
  );
}
