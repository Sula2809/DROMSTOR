import { cn } from "@/lib/utils";

export const Title = ({ children, className }) => {
  return (
    <h1
      className={cn(
        "bg-admin-blue w-full px-6 py-3 text-white text-body1 font-normal",
        className,
      )}
    >
      {children}
    </h1>
  );
};
