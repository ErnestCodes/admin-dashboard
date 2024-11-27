import React from "react";

type Props = {
  children: React.ReactNode;
};

const AuthLayout = ({ children }: Props) => {
  return (
    <div className="h-full pt-5 flex items-center justify-center">
      {children}
    </div>
  );
};

export default AuthLayout;
