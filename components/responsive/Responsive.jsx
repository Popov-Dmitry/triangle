"use client";

import useResponsive from "@/hooks/useResponsive";

export const Desktop = ({ children }) => {
  const { isDesktop } = useResponsive();

  if (!isDesktop) {
    return null;
  }

  return (
    <>{children}</>
  );
};

export const Mobile = ({ children }) => {
  const { isMobile } = useResponsive();

  if (!isMobile) {
    return null;
  }

  return (
    <>{children}</>
  );
};
